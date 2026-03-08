import { visit } from 'unist-util-visit';
import { Element, Text, Root } from 'hast';
import { keywordLinks } from '@/config/internal-links';

/**
 * 自动内链插件
 * 遍历 Markdown 生成的 HTML AST，将配置的关键词替换为超链接
 * 
 * 功能特性：
 * 1. 自动跳过已有的链接 (a)、代码块 (pre, code)
 * 2. 优先匹配长词 (Longest Match First)
 * 3. 英文支持全词匹配 (Whole Word)
 */
export function rehypeAutoLink() {
  // 1. 预处理关键词：按长度降序排列，防止短词抢占长词（如 "Gas" 抢占 "Gas Spring"）
  const keywords = Object.keys(keywordLinks).sort((a, b) => b.length - a.length);
  
  if (keywords.length === 0) return () => {};

  // 2. 构建正则表达式
  // 对正则特殊字符进行转义
  const escapeRegExp = (string: string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  
  // 生成正则模式
  // 对于英文单词，使用 \b 边界符确保全词匹配
  // 对于中文或其他字符，直接匹配
  const patternSource = keywords.map(kw => {
    const escaped = escapeRegExp(kw);
    // 简单的判断：如果首尾是字母数字，则加上单词边界 \b
    // 注意：这对 "Gas-Spring" 这种带连字符的词可能需要调整，但在大多数标准 Markdown 文本中是有效的
    const isWord = /^[a-zA-Z0-9]/.test(kw);
    return isWord ? `\\b${escaped}\\b` : escaped;
  }).join('|');

  const regex = new RegExp(`(${patternSource})`, 'g');

  return (tree: Root) => {
    // 3. 遍历文本节点
    visit(tree, 'text', (node: Text, index, parent) => {
      // 4. 安全检查：如果父节点是 a, pre, code, script, style，则跳过
      if (!parent || typeof index !== 'number') return;
      
      // 检查父节点是否为 Element 并且在黑名单中
      // 注意：'video' 标签（或我们自定义渲染为 video 的 img 标签）的内容不应该被替换
      if ('tagName' in parent && ['a', 'pre', 'code', 'script', 'style', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'video', 'img'].includes((parent as Element).tagName)) {
        return;
      }

      const content = node.value;
      if (!content) return;

      // 5. 查找匹配
      const parts = content.split(regex);
      
      // 如果没有匹配到任何关键词，parts 长度为 1（即原文本）
      if (parts.length === 1) return;

      // 6. 构建新节点数组
      const newNodes = parts.map((part) => {
        // 检查这一部分是否是关键词
        // 注意：split(regex) 配合捕获组 () 会保留分隔符（即关键词本身）
        // 我们需要判断 part 是否在我们的关键词映射表中
        
        // 由于正则可能包含 \b 等边界，直接用 map 查找可能不准
        // 但 split 的结果就是原始文本片段，所以可以直接查表
        // 另外需要注意大小写敏感问题，这里假设配置和文本完全一致
        
        const link = keywordLinks[part];

        if (link) {
          return {
            type: 'element',
            tagName: 'a',
            properties: {
              href: link,
              className: ['internal-link', 'text-blue-600', 'hover:underline'], // 添加默认样式类
              target: link.startsWith('http') ? '_blank' : undefined, // 外部链接新窗口打开
              rel: link.startsWith('http') ? 'noopener noreferrer' : undefined
            },
            children: [{ type: 'text', value: part }]
          };
        }

        // 普通文本
        return { type: 'text', value: part };
      });

      // 7. 替换原节点
      // parent.children 是节点数组，用 newNodes 替换当前索引处的 node
      parent.children.splice(index, 1, ...newNodes as (Element | Text)[]);
      
      // 由于 splice 修改了数组，visit 函数的索引可能会乱
      // 但 unist-util-visit 通常处理得很好，或者我们需要手动返回新的 index
      // 这里为了简单，通常 visit 会继续遍历，但新插入的节点（a 标签）会被再次遍历吗？
      // a 标签下的 text 会被遍历，但我们在开头检查了 parent.tagName !== 'a'，所以是安全的。
      // 不过，后面的文本节点会被继续遍历。
      return index + newNodes.length; 
    });
  };
}
