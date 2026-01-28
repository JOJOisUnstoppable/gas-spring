'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from '@/lib/utils'
import LanguageSwitcher from '../shared/LanguageSwitcher'
import Image from 'next/image'

interface NavItem {
  title: string
  href: string
  categories?: {
    id: string
    title: string
    description: string
  }[]
}

// 添加字典类型定义
interface NavbarDictionary {
  common: {
    home: string
    products: string
    applications: string
    blog: string
    contact: string
    allProducts: string
  },
  spotlights: {
    solarDamperShort: string
  },
  navbar: {
    gasSpring: string
    aftermarketGasSpring: string
    marineGasSpring: string
    solarDamper: string
    categories: {
      compressionGasSpring: {
        title: string
        description: string
      },
      lockableGasSpring: {
        title: string
        description: string
      },
      microGasSpring: {
        title: string
        description: string
      },
      pushToUnlockGasSpring: {
        title: string
        description: string
      },
      tensionGasSpring: {
        title: string
        description: string
      }
    }
  }
}

export function Navbar({ locale, dict, categories }: {
  locale: string,
  dict: NavbarDictionary,
  categories: { id: string; title: string; description: string }[]
}) {
  const pathname = usePathname()
  
  const getHref = (path: string) => {
    if (locale === 'en') return path
    return path === '/' ? `/${locale}` : `/${locale}${path}`
  }

  const getProductPath = (id: string) => {
    if (id === 'gas-spring') return '/products/category'
    if (['marine_gas_spring', 'aftermarket', 'solar-damper'].includes(id)) {
      return `/products/industry/${id}`
    }
    return `/products/category/${id}`
  }

  const navItems: NavItem[] = [
    { title: dict.common.home, href: getHref('/') },
    {
      title: dict.navbar.gasSpring,
      href: getHref('/products/category'),
      categories: [
        { id: 'compression-gas-spring', title: dict.navbar.categories.compressionGasSpring.title, description: dict.navbar.categories.compressionGasSpring.description },
        { id: 'lockable-gas-spring', title: dict.navbar.categories.lockableGasSpring.title, description: dict.navbar.categories.lockableGasSpring.description },
        { id: 'micro-gas-spring', title: dict.navbar.categories.microGasSpring.title, description: dict.navbar.categories.microGasSpring.description },
        { id: 'push-to-unlock-gas-spring', title: dict.navbar.categories.pushToUnlockGasSpring.title, description: dict.navbar.categories.pushToUnlockGasSpring.description },
        { id: 'tension-gas-spring', title: dict.navbar.categories.tensionGasSpring.title, description: dict.navbar.categories.tensionGasSpring.description },
      ]
    },
    { title: dict.navbar.aftermarketGasSpring, href: getHref('/products/industry/aftermarket') },
    { title: dict.navbar.marineGasSpring, href: getHref('/products/industry/marine_gas_spring') },
    { title: dict.navbar.solarDamper, href: getHref('/products/industry/solar-damper') },
    { title: dict.common.applications, href: getHref('/applications') },
    { title: dict.common.blog, href: getHref('/blog') },
    { title: dict.common.contact, href: getHref('/contact') },
  ]

  const renderNavLink = (item: NavItem) => {
    if (item.categories) {
      return (
        <NavigationMenuItem key={item.title}>
          <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
            {item.title}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-80 p-3">
              {item.categories.map((category) => (
                <li key={category.id}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={getHref(getProductPath(category.id))}
                      className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      <div>
                        <div className="text-sm font-semibold mb-1">{category.title}</div>
                        <p className="text-sm leading-snug text-muted-foreground">
                          {category.description}
                        </p>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      )
    }

    return (
      <NavigationMenuItem key={item.title}>
        <Link href={item.href} legacyBehavior passHref>
          <NavigationMenuLink
            className={cn(
              "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-transparent hover:text-accent-foreground focus:bg-transparent focus:text-accent-foreground",
              pathname === item.href && "text-foreground font-semibold"
            )}
          >
            {item.title}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    )
  }

  const renderMobileMenuItem = (item: NavItem) => {
    if (item.categories) {
      return (
        <AccordionItem key={item.title} value={item.title} className="border-b-0">
          <AccordionTrigger className="py-0 font-semibold hover:no-underline">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="mt-2">
            {item.categories.map((category) => (
              <Link
                key={category.id}
                href={getHref(getProductPath(category.id))}
                className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
              >
                <div>
                  <div className="text-sm font-semibold">{category.title}</div>
                  <p className="text-sm leading-snug text-muted-foreground mt-1">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </AccordionContent>
        </AccordionItem>
      )
    }

    return (
      <Link key={item.title} href={item.href} className="font-semibold py-2 block">
        {item.title}
      </Link>
    )
  }

  return (
    <section className="py-4 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-7xl mx-auto">
        {/* Desktop Navigation */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <Link href={`/${locale}`} className="flex items-center gap-2">
              <Image src="/DK_Logo_withoutBG.png" alt="Logo" width={32} height={32} />
              <Image 
                src="/GasSpring-Logo-Black.png" 
                alt="DK GasSpring" 
                width={140} 
                height={40} 
                className="h-8 w-auto object-contain"
              />
            </Link>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {navItems.map(renderNavLink)}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <LanguageSwitcher />
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <Link href={`/${locale}`} className="flex items-center gap-2">
              <Image src="/DK_Logo_withoutBG.png" alt="Logo" width={32} height={32} />
              <Image 
                src="/GasSpring-Logo-Black.png" 
                alt="DK GasSpring" 
                width={140} 
                height={40} 
                className="h-8 w-auto object-contain"
              />
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link href={`/${locale}`} className="flex items-center gap-2">
                      <Image src="/DK_Logo_withoutBG.png" alt="Logo" width={32} height={32} />
                      <Image 
                src="/GasSpring-Logo-Black.png" 
                alt="DK GasSpring" 
                width={140} 
                height={40} 
                className="h-8 w-auto object-contain"
              />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-6 flex flex-col gap-6">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {navItems.map(renderMobileMenuItem)}
                  </Accordion>
                  <div className="border-t py-4">
                    <LanguageSwitcher />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  )
}
