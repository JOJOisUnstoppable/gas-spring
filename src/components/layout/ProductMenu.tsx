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

interface ProductMenuProps {
  categories: Category[]
}

export function ProductMenu({ categories }: ProductMenuProps) {
  const [hoveredId, setHoveredId] = React.useState<string | null>(categories[0]?.id || null)

  return (
    <div className="flex w-[700px] gap-6 p-4">
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
      <div className="w-[370px] flex flex-col items-center justify-center bg-muted/10 rounded-lg overflow-hidden border">
        {hoveredId ? (
          <div className="relative w-full h-full p-4 flex items-center justify-center">
            <Image
              src={`/images/navbar/${hoveredId}.png`}
              alt={categories.find(c => c.id === hoveredId)?.title || "Product Preview"}
              width={320}
              height={320}
              className="object-contain w-full h-full"
            />
          </div>
        ) : (
          <div className="text-muted-foreground text-sm">Select a product</div>
        )}
      </div>
    </div>
  )
}
