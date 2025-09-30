'use client';
import React from 'react';

// 定义文本参数接口
export interface MarketCoverageTexts {
  section_title: string;
  section_desc: string;
  vehicles_served: string;
  brazil_title: string;
  brazil_market_size: string;
  brazil_sales_percent: string;
  brazil_workshops: string;
  brazil_models_title: string;
  brazil_model1: string;
  brazil_model2: string;
  brazil_model3: string;
  brazil_model4: string;
  brazil_contact_title: string;
  brazil_phone: string;
  argentina_title: string;
  argentina_market_size: string;
  argentina_sales_percent: string;
  argentina_workshops: string;
  argentina_models_title: string;
  argentina_model1: string;
  argentina_model2: string;
  argentina_model3: string;
  argentina_model4: string;
  argentina_contact_title: string;
  argentina_phone: string;
  colombia_title: string;
  colombia_market_size: string;
  colombia_sales_percent: string;
  colombia_workshops: string;
  colombia_models_title: string;
  colombia_model1: string;
  colombia_model2: string;
  colombia_model3: string;
  colombia_model4: string;
  colombia_contact_title: string;
  colombia_phone: string;
  chile_title: string;
  chile_market_size: string;
  chile_sales_percent: string;
  chile_workshops: string;
  chile_models_title: string;
  chile_model1: string;
  chile_model2: string;
  chile_model3: string;
  chile_model4: string;
  chile_contact_title: string;
  chile_phone: string;
  stat_desc_sales: string;
  stat_desc_workshops: string;
}

// 组件props接口
interface MarketCoverageSectionProps {
  texts: MarketCoverageTexts;
}

const MarketCoverageSection: React.FC<MarketCoverageSectionProps> = ({ texts }) => {

  const handleContactBrazil = () => {
    window.open('mailto:brasil@dkgasspring.com?subject=Consulta sobre resortes de gas - Brasil&body=Hola, me gustaría obtener más información sobre sus productos para el mercado brasileño.');
  };

  const handleContactArgentina = () => {
    window.open('mailto:argentina@dkgasspring.com?subject=Consulta sobre resortes de gas - Argentina&body=Hola, me gustaría obtener más información sobre sus productos para el mercado argentino.');
  };

  const handleContactColombia = () => {
    window.open('mailto:colombia@dkgasspring.com?subject=Consulta sobre resortes de gas - Colombia&body=Hola, me gustaría obtener más información sobre sus productos para el mercado colombiano.');
  };

  const handleContactChile = () => {
    window.open('mailto:chile@dkgasspring.com?subject=Consulta sobre resortes de gas - Chile&body=Hola, me gustaría obtener más información sobre sus productos para el mercado chileno.');
  };

  return (
    <section className="market-section" id="mercados">
      <div className="container">
        <div className="section-header">
          <h2 data-translate="market-coverage-title">
            {texts.section_title}
          </h2>
          <p data-translate="market-coverage-desc">
            {texts.section_desc}
          </p>
          <div className="vehicles-served">
            <span className="vehicles-label" data-translate="vehicles-served">{texts.vehicles_served}</span>
            <div className="vehicles-count">2,500,000+</div>
          </div>
        </div>
        
        <div className="market-stats">
          <div className="stat-card">
            <div className="stat-icon">🚗</div>
            <div className="stat-info">
              <span className="stat-number">15M+</span>
              <span className="stat-label">Vehículos Atendidos</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🏪</div>
            <div className="stat-info">
              <span className="stat-number">2,500+</span>
              <span className="stat-label">Talleres Asociados</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📦</div>
            <div className="stat-info">
              <span className="stat-number">500+</span>
              <span className="stat-label">Distribuidores</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🌎</div>
            <div className="stat-info">
              <span className="stat-number">12</span>
              <span className="stat-label">Países Cubiertos</span>
            </div>
          </div>
        </div>
        
        <div className="market-grid">
          <div className="market-card brazil">
            <div className="market-header">
              <div className="country-flag">🇧🇷</div>
              <h3>{texts.brazil_title}</h3>
              <span className="market-size">{texts.brazil_market_size}</span>
            </div>
            <div className="market-content">
              <div className="market-stats-local">
                <div className="local-stat">
                  <span className="stat-value">{texts.brazil_sales_percent}</span>
                  <span className="stat-desc">{texts.stat_desc_sales}</span>
                </div>
                <div className="local-stat">
                  <span className="stat-value">{texts.brazil_workshops}</span>
                  <span className="stat-desc">{texts.stat_desc_workshops}</span>
                </div>
              </div>
              <div className="popular-models">
                <h4>{texts.brazil_models_title}</h4>
                <ul>
                  <li>{texts.brazil_model1}</li>
                  <li>{texts.brazil_model2}</li>
                  <li>{texts.brazil_model3}</li>
                  <li>{texts.brazil_model4}</li>
                </ul>
              </div>
              <div className="market-contact">
                <p><strong>{texts.brazil_contact_title}</strong></p>
                <p>📧 <button className="contact-link" onClick={handleContactBrazil}>brasil@dkgasspring.com</button></p>
                <p>📱 {texts.brazil_phone}</p>
              </div>
            </div>
          </div>
          
          <div className="market-card argentina">
            <div className="market-header">
              <div className="country-flag">🇦🇷</div>
              <h3>{texts.argentina_title}</h3>
              <span className="market-size">{texts.argentina_market_size}</span>
            </div>
            <div className="market-content">
              <div className="market-stats-local">
                <div className="local-stat">
                  <span className="stat-value">{texts.argentina_sales_percent}</span>
                  <span className="stat-desc">{texts.stat_desc_sales}</span>
                </div>
                <div className="local-stat">
                  <span className="stat-value">{texts.argentina_workshops}</span>
                  <span className="stat-desc">{texts.stat_desc_workshops}</span>
                </div>
              </div>
              <div className="popular-models">
                <h4>{texts.argentina_models_title}</h4>
                <ul>
                  <li>{texts.argentina_model1}</li>
                  <li>{texts.argentina_model2}</li>
                  <li>{texts.argentina_model3}</li>
                  <li>{texts.argentina_model4}</li>
                </ul>
              </div>
              <div className="market-contact">
                <p><strong>{texts.argentina_contact_title}</strong></p>
                <p>📧 <button className="contact-link" onClick={handleContactArgentina}>argentina@dkgasspring.com</button></p>
                <p>📱 {texts.argentina_phone}</p>
              </div>
            </div>
          </div>
          
          <div className="market-card colombia">
            <div className="market-header">
              <div className="country-flag">🇨🇴</div>
              <h3>{texts.colombia_title}</h3>
              <span className="market-size">{texts.colombia_market_size}</span>
            </div>
            <div className="market-content">
              <div className="market-stats-local">
                <div className="local-stat">
                  <span className="stat-value">{texts.colombia_sales_percent}</span>
                  <span className="stat-desc">{texts.stat_desc_sales}</span>
                </div>
                <div className="local-stat">
                  <span className="stat-value">{texts.colombia_workshops}</span>
                  <span className="stat-desc">{texts.stat_desc_workshops}</span>
                </div>
              </div>
              <div className="popular-models">
                <h4>{texts.colombia_models_title}</h4>
                <ul>
                  <li>{texts.colombia_model1}</li>
                  <li>{texts.colombia_model2}</li>
                  <li>{texts.colombia_model3}</li>
                  <li>{texts.colombia_model4}</li>
                </ul>
              </div>
              <div className="market-contact">
                <p><strong>{texts.colombia_contact_title}</strong></p>
                <p>📧 <button className="contact-link" onClick={handleContactColombia}>colombia@dkgasspring.com</button></p>
                <p>📱 {texts.colombia_phone}</p>
              </div>
            </div>
          </div>
          
          <div className="market-card chile">
            <div className="market-header">
              <div className="country-flag">🇨🇱</div>
              <h3>{texts.chile_title}</h3>
              <span className="market-size">{texts.chile_market_size}</span>
            </div>
            <div className="market-content">
              <div className="market-stats-local">
                <div className="local-stat">
                  <span className="stat-value">{texts.chile_sales_percent}</span>
                  <span className="stat-desc">{texts.stat_desc_sales}</span>
                </div>
                <div className="local-stat">
                  <span className="stat-value">{texts.chile_workshops}</span>
                  <span className="stat-desc">{texts.stat_desc_workshops}</span>
                </div>
              </div>
              <div className="popular-models">
                <h4>{texts.chile_models_title}</h4>
                <ul>
                  <li>{texts.chile_model1}</li>
                  <li>{texts.chile_model2}</li>
                  <li>{texts.chile_model3}</li>
                  <li>{texts.chile_model4}</li>
                </ul>
              </div>
              <div className="market-contact">
                <p><strong>{texts.chile_contact_title}</strong></p>
                <p>📧 <button className="contact-link" onClick={handleContactChile}>chile@dkgasspring.com</button></p>
                <p>📱 {texts.chile_phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketCoverageSection;