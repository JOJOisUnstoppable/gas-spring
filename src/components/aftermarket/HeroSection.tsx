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
    <section className="hero" id="inicio">
        <div className="hero-content container">
          
          <h1 className="hero-title">
            <span className="highlight-red">{texts.heroTitleRed}</span> 
            <span className="highlight-green">{texts.heroTitleGreen}</span>
          </h1>
          
          <p className="hero-subtitle">
            <strong>{texts.heroSubtitleStrong}</strong><br />
            <span>{texts.heroSubtitleMain}</span>
            <br /><span className="pain-point">{texts.heroPainPoint}</span>
          </p>
          
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">$0</span>
              <span className="stat-label">{texts.statInventario}</span>
            </div>
            <div className="stat">
              <span className="stat-number">-60%</span>
              <span className="stat-label">{texts.statCompetencia}</span>
            </div>
            <div className="stat">
              <span className="stat-number">1</span>
              <span className="stat-label">{texts.statModelos}</span>
            </div>
          </div>
          
          <div className="hero-cta">
            <a href="#productos" className="btn-primary">{texts.ctaCalcular}</a>
            <a href="#contacto" className="btn-secondary">{texts.ctaCotizacion}</a>
          </div>
          
          <div className="trust-indicators">
            <div className="trust-item">
              <span className="trust-icon">🏭</span>
              <span>{texts.trustFabrica}</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">💰</span>
              <span>{texts.trustPrecio}</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">🎯</span>
              <span>{texts.trustEspecificaciones}</span>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Hero;