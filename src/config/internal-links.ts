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
  "gas springs": "/products/category/gas-spring",
  "gas spring": "/products/category/gas-spring",
  "Gas Spring": "/products/category/gas-spring",
  "Gas Springs": "/products/category/gas-spring",
  "Locking Gas Spring": "/products/lockable-gas-spring",
  "Compression Gas Spring": "/products/compression-gas-spring",
  "Damper": "lineardamper.com/en/products",
  "Tension Gas Spring": "/products/tension-gas-spring",
  "Stainless Steel Gas Spring": "/products/stainless-steel-gas-spring",
  
  // 品牌/通用
  "DK Gas Spring": "/",
  "DK GasSpring": "/",

  // 博客提取关键词 - 别名与替换
  "gas strut": "/products/category/gas-spring",
  "gas struts": "/products/category/gas-spring",
  "gas lift": "/products/category/gas-spring",
  "replacement gas spring": "/products/category/gas-spring",
  "Gas Spring Replacement": "/products/category/gas-spring",
  
  // 博客提取关键词 - 具体型号与参数
  "SX150P-10": "/products/category/gas-spring",
  "Stabilus Lift-o-mat": "/products/category/gas-spring",
  "706817": "/products/category/gas-spring",
  "PN 292575": "/products/category/gas-spring",
  "PN292575": "/products/category/gas-spring",
  "752975": "/products/category/gas-spring",
  "SUSPA C16-32018": "/products/category/gas-spring",
  "C16-32018": "/products/category/gas-spring",
  "YQ10/22-170-604-700N": "/products/category/gas-spring",
  
  // 博客提取关键词 - 应用场景
  "Bus Chair Strut": "/products/category/gas-spring",
  "Seat Footrest Gas Spring": "/products/category/gas-spring",

  // 德语
  "Gasfeder": "/products/category/gas-spring",
  "Gasfedern": "/products/category/gas-spring",
  "Gasstange": "/products/category/gas-spring",
  "Gasheber": "/products/category/gas-spring",
  "Druckgasfeder": "/products/category/gas-spring",
  "Zuggasfeder": "/products/category/gas-spring",
  "Blockierbare Gasfeder": "/products/category/gas-spring",
  "Arretierbare Gasfeder": "/products/category/gas-spring",
  "Verstellbare Gasfeder": "/products/category/gas-spring",
  "Pneumatischer Dämpfer": "/products/category/gas-spring",
  "Busstuhl-Gasfeder": "/products/category/gas-spring",
  "Gasfeder für Sitzfußstütze": "/products/category/gas-spring",
  "Ersatz-Gasfeder": "/products/category/gas-spring",
  "Gasfeder-Ersatz": "/products/category/gas-spring",
  "Gasfederersatz": "/products/category/gas-spring",
  "Gasdruckfeder": "/products/category/gas-spring",
  "Gasdruckfedern": "/products/category/gas-spring",
  "Dämpfung": "/products/category/gas-spring",
  "Kolbenstange": "/products/category/gas-spring",

  // 西班牙语
  "resorte de gas": "/products/category/gas-spring",
  "resortes de gas": "/products/category/gas-spring",
  "resorte neumático": "/products/category/gas-spring",
  "resortes neumáticos": "/products/category/gas-spring",
  "tensión neumática": "/products/category/gas-spring",
  "elevador neumático": "/products/category/gas-spring",
  "resorte de gas de compresión": "/products/category/gas-spring",
  "resorte neumático de compresión": "/products/category/gas-spring",
  "resorte de gas de tensión": "/products/category/gas-spring",
  "resorte neumático de tensión": "/products/category/gas-spring",
  "resorte de gas bloqueable": "/products/category/gas-spring",
  "resortes de gas bloqueables": "/products/category/gas-spring",
  "resorte neumático de bloqueo": "/products/category/gas-spring",
  "resorte de gas ajustable": "/products/category/gas-spring",
  "resortes de gas ajustables": "/products/category/gas-spring",
  "resorte neumático ajustable": "/products/category/gas-spring",
  "amortiguador neumático": "/products/category/gas-spring",
  "amortiguadores neumáticos": "/products/category/gas-spring",
  "amortiguadores industriales": "/products/category/gas-spring",
  "resorte de gas para asientos de autobús": "/products/category/gas-spring",
  "resorte de gas para asiento de autobús": "/products/category/gas-spring",
  "resorte de gas para apoyapiés de asiento": "/products/category/gas-spring",
  "reemplazo de resorte de gas": "/products/category/gas-spring",
  "resorte de gas de reemplazo": "/products/category/gas-spring",
  "vástago de pistón": "/products/category/gas-spring",
  // 波兰语
  "sprężyna gazowa": "/products/category/gas-spring",
  "sprężyny gazowe": "/products/category/gas-spring",
  "środek podpierający gazowy": "/products/category/gas-spring",
  "podnośnik gazowy": "/products/category/gas-spring",
  "podnośniki gazowe": "/products/category/gas-spring",
  "sprężyna gazowa ściskająca": "/products/category/gas-spring",
  "sprężyny gazowe ściskające": "/products/category/gas-spring",
  "sprężyna gazowa rozciągająca": "/products/category/gas-spring",
  "sprężyna gazowa z blokadą": "/products/category/gas-spring",
  "blokowana sprężyna gazowa": "/products/category/gas-spring",
  "blokowane sprężyny gazowe": "/products/category/gas-spring",
  "sprężyna gazowa regulowana": "/products/category/gas-spring",
  "regulowane sprężyny gazowe": "/products/category/gas-spring",
  "tłumik pneumatyczny": "/products/category/gas-spring",
  "tłumiki pneumatyczne": "/products/category/gas-spring",
  "amortyzator fotela autobusowego": "/products/category/gas-spring",
  "amortyzatory foteli autobusowych": "/products/category/gas-spring",
  "sprężyna gazowa podnóżka siedziska": "/products/category/gas-spring",
  "wymiana sprężyny gazowej": "/products/category/gas-spring",
  "zamienniki sprężyn gazowych": "/products/category/gas-spring",
  "amortyzator gazowy": "/products/category/gas-spring",
  "amortyzatory gazowe": "/products/category/gas-spring",
  "tłoczysko": "/products/category/gas-spring",
};
