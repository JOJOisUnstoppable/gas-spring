import React from 'react';

// 定义Hero组件所需文本的接口类型
export interface HeroTexts {
  heroBadge: string;
  heroTitleRed: string;
  heroTitleMain: string;
  heroTitleGreen: string;
  heroSubtitleStrong: string;
  heroSubtitleMain: string;
  heroPainPoint: string;
  statInventario: string;
  statCompetencia: string;
  statModelos: string;
  statRoi: string;
  ctaCalcular: string;
  ctaCotizacion: string;
  trustFabrica: string;
  trustPrecio: string;
  trustEspecificaciones: string;
  showcaseCatalogo: string;
  showcaseStock: string;
  productCapo: string;
  productCompatibleCapo: string;
  productPorton: string;
  productCompatiblePorton: string;
  productVentanilla: string;
  productCompatibleVentanilla: string;
  productAmortiguador: string;
  productCompatibleAmortiguador: string;
  btnVerCatalogo: string;
}

// 定义Hero组件的属性接口
interface HeroProps {
  texts: HeroTexts;
}

const Hero: React.FC<HeroProps> = ({ texts }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white py-20 overflow-hidden" id="inicio">
        {/* Background Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/images/marine-background-pattern.svg')] bg-repeat"></div>
        
        <div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span className="text-orange-500 block">{texts.heroTitleRed}</span> 
              <span className="text-green-500 block">{texts.heroTitleGreen}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed">
              <strong className="block font-bold text-white mb-2">{texts.heroSubtitleStrong}</strong>
              <span className="block mb-2">{texts.heroSubtitleMain}</span>
              <span className="inline-block bg-red-500/10 text-red-400 px-3 py-1 rounded-md text-lg font-medium border border-red-500/20">{texts.heroPainPoint}</span>
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="text-center p-4 border border-white/20 bg-white/5 rounded-xl backdrop-blur-sm min-w-[100px]">
                <span className="block text-3xl font-bold text-white mb-1">$0</span>
                <span className="text-sm text-slate-300 font-medium">{texts.statInventario}</span>
              </div>
              <div className="text-center p-4 border border-white/20 bg-white/5 rounded-xl backdrop-blur-sm min-w-[100px]">
                <span className="block text-3xl font-bold text-white mb-1">-60%</span>
                <span className="text-sm text-slate-300 font-medium">{texts.statCompetencia}</span>
              </div>
              <div className="text-center p-4 border border-white/20 bg-white/5 rounded-xl backdrop-blur-sm min-w-[100px]">
                <span className="block text-3xl font-bold text-white mb-1">1</span>
                <span className="text-sm text-slate-300 font-medium">{texts.statModelos}</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#productos" className="px-8 py-4 bg-orange-500 text-white rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-lg hover:-translate-y-1 text-center">
                {texts.ctaCalcular}
              </a>
              <a href="#contacto" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-slate-900 transition-all text-center">
                {texts.ctaCotizacion}
              </a>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm md:text-base text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏭</span>
                <span>{texts.trustFabrica}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">💰</span>
                <span>{texts.trustPrecio}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                <span>{texts.trustEspecificaciones}</span>
              </div>
            </div>
          </div>

          {/* Visual Side (Optional, adding placeholder or structure if needed, currently just content on left) 
              The original CSS implied a grid but didn't explicitly show right-side content in the component. 
              However, to balance the page, I'll leave the grid as is. 
          */}
           <div className="hidden lg:flex justify-center items-center">
              {/* If there was an image, it would go here. 
                  Since the original component didn't have an image tag in the 'hero-content', 
                  I assume it was background or empty. 
                  But let's add a visual placeholder or keep it empty but layout-ready. 
              */}
              <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-white/5 to-white/10 rounded-full blur-3xl absolute -z-10"></div>
           </div>

        </div>
    </section>
  );
};

export default Hero;