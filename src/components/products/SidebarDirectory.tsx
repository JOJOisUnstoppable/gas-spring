'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface SidebarDirectoryProps {
  navigationItems: string[];
  className?: string;
}

export default function SidebarDirectory({ navigationItems, className }: SidebarDirectoryProps) {
  const [activeId, setActiveId] = useState<string>('')

  // 映射导航项
  const items = [
    { id: 'hero', label: navigationItems[0] },
    { id: 'what-is-gas-spring', label: navigationItems[1] },
    { id: 'product-series', label: navigationItems[2] },
    { id: 'accessories-series', label: navigationItems[3] },
    { id: 'how-gs-work', label: navigationItems[4] },
    { id: 'how-to-choose', label: navigationItems[5] },
    { id: 'installation', label: navigationItems[6] },
    { id: 'cta', label: navigationItems[7] } 
  ].filter(item => item.label && item.label.trim() !== '');

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      // headerOffset = Navbar的高度 (约73px) + SidebarDirectory的高度 (约55px) + 缓冲空间
      const headerOffset = 130; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // 监听滚动以更新激活状态
  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(item => document.getElementById(item.id));
      // 增加检测偏移量，使其在内容进入视口中部之前就激活
      const scrollPosition = window.scrollY + 140; 

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveId(items[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={cn(
      // top-[73px] 对应 Navbar 的高度 (py-4 + h-10 + border ≈ 73px)
      "sticky top-[73px] z-40 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200 dark:bg-black/95 dark:border-gray-800 transition-all duration-200", 
      className
    )}>
      <div className="flex justify-center w-full px-4 sm:px-6 lg:px-8">
        <nav className="-mb-px flex items-center justify-center space-x-8 overflow-x-auto no-scrollbar pb-1" aria-label="Tabs">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToElement(item.id)}
              className={cn(
                "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium transition-colors duration-200",
                activeId === item.id
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              )}
              aria-current={activeId === item.id ? 'page' : undefined}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}
