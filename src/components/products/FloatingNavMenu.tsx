'use client'

interface FloatingNavMenuProps {
  navigationItems: string[];
}

// 滚动到指定元素的函数
const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    const headerOffset = 20; // 调整这个值来控制标题距离顶部的距离
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
    console.log('elementPosition:', elementPosition);
    console.log('window.pageYOffset:', window.pageYOffset);
    console.log('headerOffset:', headerOffset);
    console.log('offsetPosition:', offsetPosition);


    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export default function FloatingNavMenu({ navigationItems }: FloatingNavMenuProps) {
  const menuItems = [
    { id: 'hero', label: navigationItems[1] },
    { id: 'what-is-gas-spring', label: navigationItems[2] },
    { id: 'product-series', label: navigationItems[3] },
    { id: 'how-gs-work', label: navigationItems[4] },
    { id: 'installation', label: navigationItems[5] },
    { id: 'cta', label: navigationItems[6] }
  ];

  return (
    <div className="fixed left-4 top-2/3 transform -translate-y-1/2 z-50 bg-[#0F172B] text-white rounded-lg shadow-lg p-4 w-48 hidden lg:block">
      <h3 className="text-sm font-semibold mb-3 text-center border-b border-gray-400 pb-2">
        {navigationItems[0]}
      </h3>
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToElement(item.id)}
            className="block text-xs hover:text-blue-300 transition-colors duration-200 py-1 w-full text-left"
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}