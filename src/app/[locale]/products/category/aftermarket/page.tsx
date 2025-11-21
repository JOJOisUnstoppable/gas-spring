// pages/south-america-aftermarket.js
import { getDictionary } from '@/lib/i18n/getDictionary';
import { Locale } from '@/lib/i18n/config';
import Layout from '@/components/aftermarket/layout';
import HeroSection, { HeroTexts } from '@/components/aftermarket/HeroSection';
import SpecMatcherSection, { SpecMatcherTexts } from '@/components/aftermarket/SpecMatcherSection';
import EconomicSolutionsSection, { EconomicSolutionsTexts } from '@/components/aftermarket/EconomicSolutionsSection';
import './south-america-aftermarket.css';
import ContactSection, { ContactTexts } from '@/components/aftermarket/contact';

export default async function SouthAmericaAftermarket(
  props: {
    params: Promise<{ locale: Locale }>
  }
) {
  const params = await props.params;
  const { locale } = params;
  const dict = await getDictionary(locale)
  const aftermarketGasSpringData = dict.products.aftermarket
  const heroData: HeroTexts = aftermarketGasSpringData.hero
  const specText:SpecMatcherTexts = aftermarketGasSpringData.specMatcher
  const economicSolutionsTexts:EconomicSolutionsTexts = aftermarketGasSpringData.economicSolutions
  const contactTexts:ContactTexts = aftermarketGasSpringData.contact


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
      <EconomicSolutionsSection texts={economicSolutionsTexts} />
      <ContactSection texts={contactTexts} />
    </Layout>
  );
}