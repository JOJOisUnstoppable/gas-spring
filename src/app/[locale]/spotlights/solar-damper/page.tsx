'use client'

import { SolarDamperHero } from '@/components/spotlights/SolarDamperHero';
import { SolarDamperIntroduction } from '@/components/spotlights/SolarDamperIntroduction';
import { SolarDamperFeatures } from '@/components/spotlights/SolarDamperFeatures';
import { solarDamperConfig } from '@/components/spotlights/SolarDamperLocale';
import { usePathname } from 'next/navigation';

export default function SolarDamperPage() {
  const locale = usePathname().split('/')[1];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <SolarDamperHero locale={locale} />
      <SolarDamperIntroduction locale={locale} />
      <SolarDamperFeatures locale={locale} />
      {/* 其他内容区域将在后续添加 */}
    </main>
  );
}