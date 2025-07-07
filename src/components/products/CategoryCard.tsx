import Image from 'next/image'
//import Link from 'next/link'
//import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BentoCard } from "@/components/magicui/bento-grid"
import { GearIcon, LightningBoltIcon } from "@radix-ui/react-icons"

interface CategoryCardProps {
  category: {
    id: string
    name: string
    description: string
    image: string
  }
  locale: string
  viewMore: string
}

export function CategoryCard({ category, locale, viewMore }: CategoryCardProps) {

  return (

    <BentoCard
      key={category.id}
      name={category.name}
      description={category.description}
      className="col-span-1 lg:col-span-6 lg:hover/first:col-span-6 lg:hover/first:[&:hover]:!col-span-6"
      Icon={category.id === 'gas-spring' ? LightningBoltIcon : GearIcon}
      href={`/${locale}/products/category/${category.id}`}
      cta={viewMore}
      background={
        <div className="absolute inset-0 w-full">
          <div className="relative w-full aspect-square before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:via-transparent before:to-white/90 before:z-[1] before:pointer-events-none">
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-contain w-full transition-all duration-300 group-hover:[&]:translate-y-[-50px]" style={{ objectPosition: '0 0px' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      }
    />
  )
}