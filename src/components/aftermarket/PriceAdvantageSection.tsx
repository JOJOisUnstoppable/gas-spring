'use client';
import React, { useState } from 'react';
import './supply-styles.css';

// 定义文本参数接口
export interface PriceAdvantageTexts {
  showcase_catalogo: string;
  showcase_stock: string;
  product_capo: string;
  product_compatible_capo: string;
  product_porton: string;
  product_compatible_porton: string;
  product_ventanilla: string;
  product_compatible_ventanilla: string;
  product_amortiguador: string;
  product_compatible_amortiguador: string;
  btn_ver_catalogo: string;
  trust_fabrica: string;
  trust_precio: string;
  trust_especificaciones: string;
  email_subject: string;
  email_greeting: string;
  email_interest: string;
  email_info_title: string;
  email_business_type: string;
  email_location: string;
  email_products: string;
  email_quantity: string;
  email_request_info: string;
  email_availability: string;
  email_delivery_time: string;
  email_prices: string;
  email_shipping: string;
  email_thanks: string;
  email_regards: string;
  email_name: string;
  email_company: string;
  email_phone: string;
  shipping_complete_fields: string;
  shipping_express_48h: string;
  shipping_warehouse_sao_paulo: string;
  shipping_warehouse_bogota: string;
  shipping_distributor_buenos_aires: string;
  shipping_distributor_santiago: string;
  shipping_5_7_days: string;
  shipping_7_10_days: string;
  shipping_distributor_lima: string;
  shipping_distributor_quito: string;
}

// 组件props接口
interface PriceAdvantageSectionProps {
  texts: PriceAdvantageTexts;
}

const PriceAdvantageSection: React.FC<PriceAdvantageSectionProps> = ({ texts }) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [weight, setWeight] = useState('');
  const [shippingResult, setShippingResult] = useState('');

  const onOpenCatalog = () => {
    window.open('#catalogo', '_blank');
  };

  const openTrackingSystem = () => {
    window.open('https://track.dkgasspring.com', '_blank');
  };

  const handleConsultAvailability = () => {
    const subject = encodeURIComponent(texts.email_subject);
    const body = encodeURIComponent(`
${texts.email_greeting}

${texts.email_interest}

${texts.email_info_title}
- ${texts.email_business_type}
- ${texts.email_location}
- ${texts.email_products}
- ${texts.email_quantity}

${texts.email_request_info}
- ${texts.email_availability}
- ${texts.email_delivery_time}
- ${texts.email_prices}
- ${texts.email_shipping}

${texts.email_thanks}

${texts.email_regards}
[${texts.email_name}]
[${texts.email_company}]
[${texts.email_phone}]
    `);
    
    window.open(`mailto:sales@dkgasspring.com?subject=${subject}&body=${body}`, '_blank');
  };

  const calculateShipping = () => {
    if (!selectedCountry || !weight) {
      setShippingResult(texts.shipping_complete_fields);
      return;
    }

    const weightNum = parseFloat(weight);
    let cost = 0;
    let time = '';
    let method = '';

    switch (selectedCountry) {
      case 'br':
        cost = weightNum * 2.5;
        time = texts.shipping_express_48h;
        method = texts.shipping_warehouse_sao_paulo;
        break;
      case 'co':
        cost = weightNum * 2.8;
        time = texts.shipping_express_48h;
        method = texts.shipping_warehouse_bogota;
        break;
      case 'ar':
        cost = weightNum * 3.2;
        time = texts.shipping_5_7_days;
        method = texts.shipping_distributor_buenos_aires;
        break;
      case 'cl':
        cost = weightNum * 3.5;
        time = texts.shipping_5_7_days;
        method = texts.shipping_distributor_santiago;
        break;
      case 'pe':
        cost = weightNum * 4.0;
        time = texts.shipping_7_10_days;
        method = texts.shipping_distributor_lima;
        break;
      case 'ec':
        cost = weightNum * 4.2;
        time = texts.shipping_7_10_days;
        method = texts.shipping_distributor_quito;
        break;
      default:
        cost = 0;
    }

    if (cost >= 500) {
      setShippingResult(`Envío GRATUITO - ${time} - ${method}`);
    } else {
      setShippingResult(`Costo: $${cost.toFixed(2)} USD - ${time} - ${method}`);
    }
  };

  return (
    <section className="supply-section" id="ventajas">
      <div className="container">
        <div className="supply-content">
          <div className="supply-info">
            <h2 data-translate="section_precio">
              Precio <span className="highlight-green">Imbatible</span> Garantizado
            </h2>
            <p className="section-subtitle" data-translate="section_precio_desc">
              Directo de fábrica china sin intermediarios. 
              El precio más bajo del mercado sudamericano, garantizado por escrito.
            </p>
            
            <div className="supply-features">
              <div className="supply-feature">
                <div className="feature-icon">⚡</div>
                <div className="feature-content">
                  <h4>Entrega Express 48h</h4>
                  <p>Para pedidos urgentes en ciudades principales de Brasil, Argentina, Colombia y Chile.</p>
                  <div className="feature-details">
                    <span className="detail-item">📍 São Paulo, Buenos Aires, Bogotá, Santiago</span>
                    <span className="detail-item">💰 Costo adicional: $25 USD</span>
                  </div>
                </div>
              </div>
              
              <div className="supply-feature">
                <div className="feature-icon">📦</div>
                <div className="feature-content">
                  <h4>Entrega Estándar 5-7 días</h4>
                  <p>Envío gratuito para pedidos superiores a $500 USD a toda Sudamérica.</p>
                  <div className="feature-details">
                    <span className="detail-item">🚚 Envío gratuito &gt;$500</span>
                    <span className="detail-item">📋 Tracking completo incluido</span>
                  </div>
                </div>
              </div>
              
              <div className="supply-feature">
                <div className="feature-icon">🏭</div>
                <div className="feature-content">
                  <h4>Stock Local Disponible</h4>
                  <p>Almacenes estratégicos en Brasil y Colombia para entrega inmediata.</p>
                  <div className="feature-details">
                    <span className="detail-item">🇧🇷 São Paulo: 2000+ modelos</span>
                    <span className="detail-item">🇨🇴 Bogotá: 1500+ modelos</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="supply-cta">
              <button className="btn-supply" onClick={handleConsultAvailability}>
                Consultar Disponibilidad
              </button>
              <button className="btn-track" onClick={openTrackingSystem}>
                Rastrear Pedido
              </button>
            </div>
          </div>
          
          <div className="supply-visual">
            <div className="logistics-map">
              <div className="map-header">
                <h3>Red de Distribución Sudamérica</h3>
                <div className="map-legend">
                  <span className="legend-item warehouse">🏭 Almacén</span>
                  <span className="legend-item express">⚡ Express 48h</span>
                  <span className="legend-item standard">📦 Estándar 5-7d</span>
                </div>
              </div>
              
              <div className="map-container">
                <div className="country-node brazil">
                  <div className="node-icon">🇧🇷</div>
                  <div className="node-info">
                    <h4>Brasil</h4>
                    <p>Almacén São Paulo</p>
                    <span className="delivery-time express">48h Express</span>
                  </div>
                </div>
                
                <div className="country-node colombia">
                  <div className="node-icon">🇨🇴</div>
                  <div className="node-info">
                    <h4>Colombia</h4>
                    <p>Almacén Bogotá</p>
                    <span className="delivery-time express">48h Express</span>
                  </div>
                </div>
                
                <div className="country-node argentina">
                  <div className="node-icon">🇦🇷</div>
                  <div className="node-info">
                    <h4>Argentina</h4>
                    <p>Distribuidor Buenos Aires</p>
                    <span className="delivery-time standard">5-7 días</span>
                  </div>
                </div>
                
                <div className="country-node chile">
                  <div className="node-icon">🇨🇱</div>
                  <div className="node-info">
                    <h4>Chile</h4>
                    <p>Distribuidor Santiago</p>
                    <span className="delivery-time standard">5-7 días</span>
                  </div>
                </div>
                
                <div className="country-node peru">
                  <div className="node-icon">🇵🇪</div>
                  <div className="node-info">
                    <h4>Perú</h4>
                    <p>Distribuidor Lima</p>
                    <span className="delivery-time standard">7-10 días</span>
                  </div>
                </div>
                
                <div className="country-node ecuador">
                  <div className="node-icon">🇪🇨</div>
                  <div className="node-info">
                    <h4>Ecuador</h4>
                    <p>Distribuidor Quito</p>
                    <span className="delivery-time standard">7-10 días</span>
                  </div>
                </div>
              </div>
              
              <div className="shipping-calculator">
                <h4>Calculadora de Envío</h4>
                <div className="calculator-form">
                  <select 
                    className="country-select" 
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                  >
                    <option value="">Seleccionar país</option>
                    <option value="br">Brasil</option>
                    <option value="co">Colombia</option>
                    <option value="ar">Argentina</option>
                    <option value="cl">Chile</option>
                    <option value="pe">Perú</option>
                    <option value="ec">Ecuador</option>
                  </select>
                  <input 
                    type="number" 
                    placeholder="Peso (kg)" 
                    className="weight-input"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                  <button className="btn-calculate" onClick={calculateShipping}>
                    Calcular
                  </button>
                </div>
                <div className="calculation-result" id="shippingResult">
                  {shippingResult}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceAdvantageSection;