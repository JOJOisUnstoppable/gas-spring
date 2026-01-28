'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface SidebarDirectoryProps {
  navigationItems: string[];
  className?: string;
}

export default function SidebarDirectory({ navigationItems, className }: SidebarDirectoryProps) {
  const [activeId, setActiveId] = useState<string>('')

  const menuItems = [
    { id: 'hero', label: navigationItems[1] },
    { id: 'what-is-gas-spring', label: navigationItems[2] },
    { id: 'product-series', label: navigationItems[3] },
    { id: 'how-gs-work', label: navigationItems[4] },
    { id: 'replacement', label: navigationItems[5]?.includes('Replacement') ? navigationItems[5] : 'Replacement' }, // Note: Original FloatingNavMenu mapped index 5 to 'installation', but CategoryPage has 'replacement', 'how-to-choose', 'calculation', 'installation'. I need to check the mapping carefully.
    // Let's re-read the CategoryPage to be sure about IDs.
    // CategoryPage IDs: 
    // hero
    // what-is-gas-spring
    // product-series
    // how-gs-work
    // replacement
    // how-to-choose
    // calculation
    // installation
    // cta
    
    // FloatingNavMenu only had 6 items. 
    // Let's stick to the logic passed in props or improve it?
    // The user said "Retain original directory function".
    // I should strictly follow the existing FloatingNavMenu logic for now, or expand it if the user missed some sections in the old menu.
    // FloatingNavMenu code:
    // { id: 'installation', label: navigationItems[5] } -> This seems to skip 'replacement', 'how-to-choose', 'calculation'?
    // Let's look at the FloatingNavMenu usage in CategoryPage:
    // <FloatingNavMenu navigationItems={dict.products['gas-spring'].Navigation} />
    
    // If I want to be safe, I will copy the exact mapping from FloatingNavMenu first.
    // But wait, the FloatingNavMenu code I read earlier:
    // { id: 'installation', label: navigationItems[5] }
    // { id: 'cta', label: navigationItems[6] }
    
    // However, the page has sections: replacement, how-to-choose, calculation.
    // If the old menu skipped them, I will skip them too unless obvious.
    // Actually, let's look at the FloatingNavMenu code again.
    // 30-> hero
    // 31-> what-is-gas-spring
    // 32-> product-series
    // 33-> how-gs-work
    // 34-> installation
    // 35-> cta
    
    // It seems the old menu was indeed incomplete or the labels were generic.
    // I will stick to the exact same logic to "retain original function".
  ]

  // Re-mapping based on FloatingNavMenu.tsx read result:
  const items = [
    { id: 'hero', label: navigationItems[1] },
    { id: 'what-is-gas-spring', label: navigationItems[2] },
    { id: 'product-series', label: navigationItems[3] },
    { id: 'how-gs-work', label: navigationItems[4] },
    { id: 'installation', label: navigationItems[5] },
    { id: 'cta', label: navigationItems[6] }
  ];

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      const headerOffset = 100; // Adjust for fixed header if any
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Optional: Add active state detection on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150; // Offset

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
    <nav className={cn("flex flex-col space-y-1", className)}>
      <h3 className="mb-4 px-3 text-sm font-semibold text-gray-900 uppercase tracking-wider">
        {navigationItems[0]}
      </h3>
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToElement(item.id)}
          className={cn(
            "group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 w-full text-left",
            activeId === item.id
              ? "bg-primary/10 text-primary"
              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          )}
          aria-current={activeId === item.id ? 'page' : undefined}
        >
          <span className={cn(
            "w-1 h-4 mr-3 rounded-full transition-all duration-200",
            activeId === item.id ? "bg-primary" : "bg-transparent group-hover:bg-gray-300"
          )} />
          {item.label}
        </button>
      ))}
    </nav>
  )
}
