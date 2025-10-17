import type { JSX } from 'react';

/**
 * 解析 Markdown 加粗语法 (**text**) 和超链接语法 ([text](url)) 并返回 React 元素
 * @param text 包含 Markdown 加粗语法和超链接语法的字符串
 * @returns React 元素数组，其中加粗部分被包装在 <strong> 标签中，超链接被包装在 <a> 标签中
 */
const parseMarkdownBold = (text: string): (string | JSX.Element)[] => {
  // 首先处理超链接 [text](url)
  const parseLinks = (text: string): (string | JSX.Element)[] => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      // 添加链接前的文本
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }
      
      // 添加链接元素
      const linkText = match[1];
      const linkUrl = match[2];
      parts.push(
        <a 
          key={`link-${match.index}`} 
          href={linkUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 underline"
        >
          {linkText}
        </a>
      );
      
      lastIndex = linkRegex.lastIndex;
    }
    
    // 添加剩余的文本
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }
    
    return parts.length > 0 ? parts : [text];
  };

  // 然后处理加粗语法 **text**
  const parseBold = (content: string | JSX.Element): (string | JSX.Element)[] => {
    if (typeof content !== 'string') {
      return [content];
    }
    
    const parts = content.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, index) => {
      // 奇数索引的部分是被 ** 包裹的文本，需要加粗
      if (index % 2 === 1) {
        return <strong key={`bold-${index}`}>{part}</strong>;
      }
      return part;
    });
  };

  // 先解析超链接，再解析加粗
  const linkParsed = parseLinks(text);
  const result: (string | JSX.Element)[] = [];
  
  linkParsed.forEach((item) => {
    const boldParsed = parseBold(item);
    result.push(...boldParsed);
  });

  return result;
};

export default parseMarkdownBold;