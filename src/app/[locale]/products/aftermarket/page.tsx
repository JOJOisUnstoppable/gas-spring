// pages/south-america-aftermarket.js
import { getDictionary } from '@/lib/i18n/getDictionary';
import { Locale } from '@/lib/i18n/config';
import Layout from '@/components/aftermarket/layout';
import HeroSection, { HeroTexts } from '@/components/aftermarket/HeroSection';
import SpecMatcherSection, { SpecMatcherTexts } from '@/components/aftermarket/SpecMatcherSection';
import PainSolutionsSection, { PainSolutionsTexts } from '@/components/aftermarket/PainSolutionsSection';
import EconomicSolutionsSection, { EconomicSolutionsTexts } from '@/components/aftermarket/EconomicSolutionsSection';
import PriceAdvantageSection, { PriceAdvantageTexts } from '@/components/aftermarket/PriceAdvantageSection';
import MarketCoverageSection, { MarketCoverageTexts } from '@/components/aftermarket/marketCorverage';
import ContactSection, { ContactTexts } from '@/components/aftermarket/contact';
import './south-america-aftermarket.css';

export default async function SouthAmericaAftermarket(
  props: {
    params: Promise<{ locale: Locale }>
  }
) {
  const params = await props.params;
  const { locale } = params;
  const dict = await getDictionary(locale)
  const aftermarketGasSpringData = dict.products.aftermarket
  const painSolutionsTexts: PainSolutionsTexts = aftermarketGasSpringData.painSolutions
  const heroData: HeroTexts = aftermarketGasSpringData.hero
  const marketCovTexts:MarketCoverageTexts = aftermarketGasSpringData.marketCoverage
  const contactTexts:ContactTexts = aftermarketGasSpringData.contact
  const specText:SpecMatcherTexts = aftermarketGasSpringData.specMatcher
  const economicSolutionsTexts:EconomicSolutionsTexts = aftermarketGasSpringData.economicSolutions
  const priceAdvantageTexts:PriceAdvantageTexts = aftermarketGasSpringData.priceAdvantage
  
  // 页面元数据
  const meta = {
    title: 'Resortes de Gas DK - Repuestos Automotrices Sudamérica | Económico y Rápido',
    description: 'Resortes de gas DK para el mercado de repuestos automotrices en Sudamérica. Soluciones económicas, entrega rápida y calidad confiable para talleres y distribuidores.',
    keywords: 'resortes de gas, repuestos automotrices, aftermarket sudamérica, repuestos económicos, entrega rápida, talleres automotrices, distribuidores',
    ogTitle: 'DK Gas Springs - Repuestos Automotrices Sudamérica',
    ogDescription: 'Soluciones económicas y rápidas para el mercado aftermarket sudamericano',
    ogUrl: 'https://www.dkgasspring.com/south-america-aftermarket',
    ogImage: 'https://www.dkgasspring.com/images/south-america-aftermarket-og.jpg'
  };

  return (
    <Layout {...meta}>
      <HeroSection texts={heroData} />
      <SpecMatcherSection texts={specText} />
      <PainSolutionsSection texts={painSolutionsTexts} />
      <EconomicSolutionsSection texts={economicSolutionsTexts} />
      <PriceAdvantageSection texts={priceAdvantageTexts} />
      <MarketCoverageSection texts={marketCovTexts} />
      <ContactSection texts={contactTexts} />
    </Layout>
  );
}