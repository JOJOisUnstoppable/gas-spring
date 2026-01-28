'use client'

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { NavigationMenuLink } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

interface Category {
  id: string
  title: string
  description: string
  href: string
}

interface allProducts {
  title: string
  description: string
  href: string
}

interface ProductMenuProps {
  allProducts: allProducts
  categories: Category[]
}

export function ProductMenu({ allProducts, categories }: ProductMenuProps) {
  const [hoveredId, setHoveredId] = React.useState<string | null>(categories[0]?.id || null)

  return (
    <div className="flex w-[1040px] gap-6 p-4">
      <div className="w-[200px] flex flex-col items-center justify-center bg-muted/10 rounded-lg overflow-hidden border">
        <Link
          href={allProducts.href}
          className="relative block w-full h-full"
        >
          <div className="relative w-full h-full flex flex-col items-start justify-end p-5">
            <Image
              src={`/images/navbar/navbg.png`}
              alt='All you need to know about gas springs'
              fill
              className="object-cover"
            />
            <div className="relative z-10 space-y-2 text-left">
              <div className="text-2xl font-bold leading-tight text-foreground/90">{allProducts.title}</div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {allProducts.description}
              </p>
            </div>
          </div>
        </Link>
      </div>
      <ul className="flex-1 grid grid-cols-1 gap-2">
        {categories.map((category) => (
          <li
            key={category.id}
            onMouseEnter={() => setHoveredId(category.id)}
          >
            <NavigationMenuLink asChild>
              <Link
                href={category.href}
                className={cn(
                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                  hoveredId === category.id && "bg-accent/50"
                )}
              >
                <div className="text-sm font-medium leading-none">{category.title}</div>
                <p className="line-clamp-2 text-xs leading-snug text-muted-foreground/70 mt-1">
                  {category.description}
                </p>
              </Link>
            </NavigationMenuLink>
          </li>
        ))}
      </ul>
      <div className="w-[440px] h-[440px] flex flex-col items-center justify-center bg-muted/10 rounded-lg overflow-hidden border">
        {hoveredId ? (
          <div className="relative w-full h-full">
            <Image
              src={`/images/navbar/${hoveredId}.png`}
              alt={categories.find(c => c.id === hoveredId)?.title || "Product Preview"}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="text-muted-foreground text-sm">Select a product</div>
        )}
      </div>
    </div >
  )
}
