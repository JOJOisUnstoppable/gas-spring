import React from 'react';
import { Locale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/getDictionary'
import './marine-gas-springs-usa.css'
import Applications from '@/components/marine/Applications'
import Hero from '@/components/marine/Hero'
import TrustIndicators from '@/components/marine/TrustIndicators'
import WhyChooseUs from '@/components/marine/WhyChooseUs'
import ProductShowcase from '@/components/marine/ProductShowcase'
import TechnicalSupport from '@/components/marine/TechnicalSupport'
import SuccessStories from '@/components/marine/SuccessStories'
import QuoteForm from '@/components/marine/QuoteForm'
import FAQ from '@/components/marine/FAQ'

export default async function MarineGasSpringPage(
  props: {
    params: Promise<{ locale: Locale }>
  }
) {
  const params = await props.params;
  const { locale } = params;
  const dict = await getDictionary(locale)
  const marineGasSpringData = dict.products.marine

  const heroData = {
    title: marineGasSpringData.hero.title,
    subtitle: marineGasSpringData.hero.subtitle,
    features: marineGasSpringData.hero.features,
    ctaButtons: marineGasSpringData.hero.ctaButtons,
    heroImageSrc: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=luxury%20yacht%20with%20marine%20gas%20springs%20on%20hatches%2C%20premium%20316L%20stainless%20steel%20gas%20struts%2C%20American%20waters%2C%20professional%20marine%20equipment%2C%20high-end%20boat%20accessories%2C%20nautical%20engineering&image_size=landscape_16_9',
    heroImageAlt: marineGasSpringData.hero.heroImageAlt
  };

  const trustData = {
    trustItems: marineGasSpringData.trustIndicators.items.map(item => ({
      imageSrc: `/images/certifications/${item.imageAlt.toLowerCase().replace(/\s+/g, '-')}.png`,
      imageAlt: item.imageAlt,
      text: item.text
    }))
  }

  const whyChooseUsData = {
    title: marineGasSpringData.whyChooseUs.title,
    advantages: marineGasSpringData.whyChooseUs.advantages.map(advantage => ({
      iconSrc: `/images/icons/${advantage.iconAlt.toLowerCase().replace(/\s+/g, '-')}.svg`,
      iconAlt: advantage.iconAlt,
      title: advantage.title,
      description: advantage.description
    }))
  };

  const productShowcaseData = {
    title: marineGasSpringData.productShowcase.title,
    products: marineGasSpringData.productShowcase.products.map(product => ({
      imageSrc: `/images/products/${product.imageAlt.toLowerCase().replace(/\s+/g, '-')}.jpg`,
      imageAlt: product.imageAlt,
      title: product.title,
      description: product.description,
      features: product.features,
      ctaText: product.ctaText,
      ctaHref: '#quote'
    }))
  };

  const applicationsData = {
    title: marineGasSpringData.applications.title,
    applications: marineGasSpringData.applications.items.map(item => ({
      imageSrc: `/images/applications/${item.imageAlt.toLowerCase().replace(/\s+/g, '-')}.jpg`,
      imageAlt: item.imageAlt,
      title: item.title,
      description: item.description
    }))
  };

  const technicalSupportData = {
    title: marineGasSpringData.technicalSupport.title,
    description: marineGasSpringData.technicalSupport.description,
    features: marineGasSpringData.technicalSupport.features,
    imageSrc: '/images/technical-support-team.jpg',
    imageAlt: marineGasSpringData.technicalSupport.imageAlt
  };

  const successStoriesData = {
    title: marineGasSpringData.successStories.title,
    stories: marineGasSpringData.successStories.stories.map(story => ({
      customerImageSrc: `/images/customers/${story.customerImageAlt.toLowerCase().replace(/\s+/g, '-')}.jpg`,
      customerImageAlt: story.customerImageAlt,
      customerName: story.customerName,
      location: story.location,
      testimonial: story.testimonial,
      results: story.results
    }))
  };

  const quoteFormData = {
    title: marineGasSpringData.quoteForm.title,
    description: marineGasSpringData.quoteForm.description,
    benefits: marineGasSpringData.quoteForm.benefits,
    applicationOptions: marineGasSpringData.quoteForm.applicationOptions,
    submitButtonText: marineGasSpringData.quoteForm.submitButtonText
  };

  const faqData = {
    title: marineGasSpringData.faq.title,
    faqItems: marineGasSpringData.faq.items
  };


  return (
    <div className="min-h-screen bg-white">
      <Hero {...heroData} />
      <TrustIndicators {...trustData} />
      <WhyChooseUs {...whyChooseUsData} />
      <ProductShowcase {...productShowcaseData} />
      <Applications {...applicationsData} />
      <TechnicalSupport {...technicalSupportData} />
      <SuccessStories {...successStoriesData} />
      <QuoteForm {...quoteFormData} />
      <FAQ {...faqData} />
    </div>
  );
}
