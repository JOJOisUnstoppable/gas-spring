/**
 * @file internal-links.ts
 * @description 博客文章关键词自动内链配置
 * 
 * 配置规则：
 * 1. Key: 需要匹配的关键词（支持中英文）
 * 2. Value: 目标链接地址（建议使用相对路径）
 * 
 * 注意事项：
 * - 插件会自动按关键词长度降序处理，优先匹配长词（如 "Gas Spring" 优于 "Gas"）
 * - 英文关键词会进行全词匹配（Whole Word），中文关键词进行子串匹配
 */

export const keywordLinks: Record<string, string> = {
  // 产品类
  "gas springs": "/products/gas-spring",
  "gas spring": "/products/gas-spring",
  "Gas Spring": "/products/gas-spring",
  "Gas Springs": "/products/gas-spring",
  "Locking Gas Spring": "/products/locking-gas-spring",
  "Compression Gas Spring": "/products/compression-gas-spring",
  "Damper": "/products/damper",
  "Tension Gas Spring": "/products/tension-gas-spring",
  "Stainless Steel Gas Spring": "/products/stainless-steel-gas-spring",
  
  // 中文关键词
  "气弹簧": "/zh/products/gas-spring",
  "锁定气弹簧": "/zh/products/locking-gas-spring",
  "压缩气弹簧": "/zh/products/compression-gas-spring",
  "阻尼器": "/zh/products/damper",
  "拉伸气弹簧": "/zh/products/tension-gas-spring",
  "不锈钢气弹簧": "/zh/products/stainless-steel-gas-spring",

  // 品牌/通用
  "DK Gas Spring": "/",
  "DK GasSpring": "/",
};
