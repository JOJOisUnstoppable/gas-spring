'use client';
import React from 'react';

// 定义文本参数接口，避免any类型
export interface EconomicSolutionsTexts {
  section_title: string;
  section_desc: string;
  solution_workshop_title: string;
  solution_workshop_badge: string;
  solution_workshop_desc: string;
  solution_workshop_benefit1: string;
  solution_workshop_benefit2: string;
  solution_workshop_benefit3: string;
  solution_workshop_benefit4: string;
  solution_workshop_benefit5: string;
  solution_price_label: string;
  solution_margin_label: string;
  btn_workshop_catalog: string;
  solution_distributor_title: string;
  solution_distributor_badge: string;
  solution_distributor_desc: string;
  solution_distributor_benefit1: string;
  solution_distributor_benefit2: string;
  solution_distributor_benefit3: string;
  solution_distributor_benefit4: string;
  solution_distributor_benefit5: string;
  btn_distributor_program: string;
  solution_importer_title: string;
  solution_importer_badge: string;
  solution_importer_desc: string;
  solution_importer_benefit1: string;
  solution_importer_benefit2: string;
  solution_importer_benefit3: string;
  solution_importer_benefit4: string;
  solution_importer_benefit5: string;
  btn_importer_program: string;
  bulk_title: string;
  bulk_desc: string;
  bulk_flexible: string;
  bulk_flexible_desc: string;
  bulk_discount: string;
  bulk_discount_desc: string;
  bulk_consolidation: string;
  bulk_consolidation_desc: string;
  bulk_quote_btn: string;
}

// 组件props接口
export interface EconomicSolutionsSectionProps {
  texts: EconomicSolutionsTexts;
}

const EconomicSolutionsSection: React.FC<EconomicSolutionsSectionProps> = ({ texts }) => {
  const handleWorkshopCatalog = () => {
    // 打开工作坊目录
    window.open('#workshop-catalog', '_blank');
  };

  const handleDistributorProgram = () => {
    // 打开分销商程序
    window.open('#distributor-program', '_blank');
  };

  const handleImporterProgram = () => {
    // 打开进口商程序
    window.open('#importer-program', '_blank');
  };

  const handleBulkQuote = () => {
    // 处理批量报价请求
    const subject = encodeURIComponent('Solicitud de Cotización - Pedido Mixto');
    const body = encodeURIComponent(`
Hola,

Estoy interesado en obtener una cotización para un pedido mixto de resortes de gas.

Detalles de mi negocio:
- Tipo de negocio: [Taller/Distribuidor/Importador]
- Ubicación: [País/Ciudad]
- Volumen mensual estimado: [Cantidad]

Por favor, envíenme información sobre:
- Precios por volumen
- Especificaciones disponibles
- Términos de envío
- Descuentos aplicables

Gracias por su atención.

Saludos cordiales,
[Su nombre]
[Su empresa]
[Su teléfono]
    `);

    window.open(`mailto:sales@dkgasspring.com?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <section className="economic-section" id="productos">
      <div className="container">
        <div className="section-header">
          <h2 data-translate="section_soluciones">
            {texts.section_title}
          </h2>
          <p data-translate="section_soluciones_desc">
            {texts.section_desc}
          </p>
        </div>

        <div className="solutions-grid">
          <div className="solution-card workshop">
            <div className="card-header">
              <div className="card-image">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGN0ZBIi8+CjxyZWN0IHg9IjUwIiB5PSI2MCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSI4MCIgcng9IjEwIiBmaWxsPSIjRkY2NjAwIiBvcGFjaXR5PSIwLjEiLz4KPGV4dCB4PSIxNTAiIHk9IjEwNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzMzMyIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2Ij5BdXRvIFJlcGFpciBTaG9wPC90ZXh0Pgo8L3N2Zz4K"
                  alt="Workshop Gas Springs"
                  className="solution-img"
                />
              </div>
              <div className="card-icon">🔧</div>
              <h3 data-translate="solution_workshop_title">{texts.solution_workshop_title}</h3>
              <div className="target-badge" data-translate="solution_workshop_badge">{texts.solution_workshop_badge}</div>
            </div>
            <div className="card-content">
              <p className="card-description" data-translate="solution_workshop_desc">
                {texts.solution_workshop_desc}
              </p>
              <ul className="benefits-list">
                <li data-translate="solution_workshop_benefit1">{texts.solution_workshop_benefit1}</li>
                <li data-translate="solution_workshop_benefit2">{texts.solution_workshop_benefit2}</li>
                <li data-translate="solution_workshop_benefit3">{texts.solution_workshop_benefit3}</li>
                <li data-translate="solution_workshop_benefit4">{texts.solution_workshop_benefit4}</li>
                <li data-translate="solution_workshop_benefit5">{texts.solution_workshop_benefit5}</li>
              </ul>
              <div className="pricing-info">
                <div className="price-range">
                  <span className="price-label" data-translate="solution_price_label">{texts.solution_price_label}</span>
                  <span className="price-value">$8 USD</span>
                </div>
                <div className="margin-info">
                  <span className="margin-label" data-translate="solution_margin_label">{texts.solution_margin_label}</span>
                  <span className="margin-value">+200%</span>
                </div>
              </div>
              <button
                className="btn-solution"
                onClick={handleWorkshopCatalog}
                data-translate="btn_workshop_catalog"
              >
                {texts.btn_workshop_catalog}
              </button>
            </div>
          </div>

          <div className="solution-card distributor">
            <div className="card-header">
              <div className="card-image">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGN0ZBIi8+CjxyZWN0IHg9IjQwIiB5PSI1MCIgd2lkdGg9IjIyMCIgaGVpZ2h0PSIxMDAiIHJ4PSIxMCIgZmlsbD0iIzAwMzM2NiIgb3BhY2l0eT0iMC4xIi8+CjxyZWN0IHg9IjYwIiB5PSI3MCIgd2lkdGg9IjE4MCIgaGVpZ2h0PSI2MCIgcng9IjUiIGZpbGw9IiNGRjY2MDAiIG9wYWNpdHk9IjAuMiIvPgo8dGV4dCB4PSIxNTAiIHk9IjEwNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzMzMyIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2Ij5XYXJlaG91c2UgJiBEaXN0cmlidXRpb248L3RleHQ+Cjwvc3ZnPgo="
                  alt="Distribution Warehouse"
                  className="solution-img"
                />
              </div>
              <div className="card-icon">📦</div>
              <h3 data-translate="solution_distributor_title">{texts.solution_distributor_title}</h3>
              <div className="target-badge" data-translate="solution_distributor_badge">{texts.solution_distributor_badge}</div>
            </div>
            <div className="card-content">
              <p className="card-description" data-translate="solution_distributor_desc">
                {texts.solution_distributor_desc}
              </p>
              <ul className="benefits-list">
                <li data-translate="solution_distributor_benefit1">{texts.solution_distributor_benefit1}</li>
                <li data-translate="solution_distributor_benefit2">{texts.solution_distributor_benefit2}</li>
                <li data-translate="solution_distributor_benefit3">{texts.solution_distributor_benefit3}</li>
                <li data-translate="solution_distributor_benefit4">{texts.solution_distributor_benefit4}</li>
                <li data-translate="solution_distributor_benefit5">{texts.solution_distributor_benefit5}</li>
              </ul>
              <div className="pricing-info">
                <div className="price-range">
                  <span className="price-label" data-translate="solution_price_label">{texts.solution_price_label}</span>
                  <span className="price-value">$6 USD</span>
                </div>
                <div className="margin-info">
                  <span className="margin-label" data-translate="solution_margin_label">{texts.solution_margin_label}</span>
                  <span className="margin-value">+300%</span>
                </div>
              </div>
              <button
                className="btn-solution"
                onClick={handleDistributorProgram}
                data-translate="btn_distributor_program"
              >
                {texts.btn_distributor_program}
              </button>
            </div>
          </div>

          <div className="solution-card importer">
            <div className="card-header">
              <div className="card-image">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGN0ZBIi8+CjxyZWN0IHg9IjMwIiB5PSI0MCIgd2lkdGg9IjI0MCIgaGVpZ2h0PSIxMjAiIHJ4PSIxNSIgZmlsbD0iIzAwMzM2NiIgb3BhY2l0eT0iMC4xIi8+CjxyZWN0IHg9IjUwIiB5PSI2MCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSI4MCIgcng9IjEwIiBmaWxsPSIjRkY2NjAwIiBvcGFjaXR5PSIwLjE1Ii8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTA1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMzMzIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiPkludGVybmF0aW9uYWwgTG9naXN0aWNzPC90ZXh0Pgo8L3N2Zz4K"
                  alt="International Shipping"
                  className="solution-img"
                />
              </div>
              <div className="card-icon">🌎</div>
              <h3 data-translate="solution_importer_title">{texts.solution_importer_title}</h3>
              <div className="target-badge" data-translate="solution_importer_badge">{texts.solution_importer_badge}</div>
            </div>
            <div className="card-content">
              <p className="card-description" data-translate="solution_importer_desc">
                {texts.solution_importer_desc}
              </p>
              <ul className="benefits-list">
                <li data-translate="solution_importer_benefit1">{texts.solution_importer_benefit1}</li>
                <li data-translate="solution_importer_benefit2">{texts.solution_importer_benefit2}</li>
                <li data-translate="solution_importer_benefit3">{texts.solution_importer_benefit3}</li>
                <li data-translate="solution_importer_benefit4">{texts.solution_importer_benefit4}</li>
                <li data-translate="solution_importer_benefit5">{texts.solution_importer_benefit5}</li>
              </ul>
              <div className="pricing-info">
                <div className="price-range">
                  <span className="price-label" data-translate="solution_price_label">{texts.solution_price_label}</span>
                  <span className="price-value">$3.50 USD</span>
                </div>
                <div className="margin-info">
                  <span className="margin-label" data-translate="solution_margin_label">{texts.solution_margin_label}</span>
                  <span className="margin-value">+400%</span>
                </div>
              </div>
              <button
                className="btn-solution"
                onClick={handleImporterProgram}
                data-translate="btn_importer_program"
              >
                {texts.btn_importer_program}
              </button>
            </div>
          </div>
        </div>

        <div className="bulk-cta">
          <button
            className="bulk-contact-btn"
            onClick={handleBulkQuote}
            dangerouslySetInnerHTML={{ __html: texts.bulk_quote_btn }}
          />
        </div>
      </div>
    </section>
  );
};

export default EconomicSolutionsSection;