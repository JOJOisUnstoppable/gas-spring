'use client';
/* eslint-disable @next/next/no-img-element */
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
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white" id="productos">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" data-translate="section_soluciones">
            {texts.section_title}
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto" data-translate="section_soluciones_desc">
            {texts.section_desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border-t-4 border-orange-500 transition-all hover:-translate-y-2 hover:shadow-2xl flex flex-col">
            <div className="p-6 text-center border-b border-slate-100 bg-orange-50/30">
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden shadow-sm group">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGN0ZBIi8+CjxyZWN0IHg9IjUwIiB5PSI2MCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSI4MCIgcng9IjEwIiBmaWxsPSIjRkY2NjAwIiBvcGFjaXR5PSIwLjEiLz4KPGV4dCB4PSIxNTAiIHk9IjEwNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzMzMyIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2Ij5BdXRvIFJlcGFpciBTaG9wPC90ZXh0Pgo8L3N2Zz4K"
                  alt="Workshop Gas Springs"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-white/90 p-2 rounded-full shadow-sm text-xl backdrop-blur-sm">🔧</div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-2" data-translate="solution_workshop_title">{texts.solution_workshop_title}</h3>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-orange-500" data-translate="solution_workshop_badge">{texts.solution_workshop_badge}</div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <p className="text-slate-600 mb-6 min-h-[3rem]" data-translate="solution_workshop_desc">
                {texts.solution_workshop_desc}
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  texts.solution_workshop_benefit1,
                  texts.solution_workshop_benefit2,
                  texts.solution_workshop_benefit3,
                  texts.solution_workshop_benefit4,
                  texts.solution_workshop_benefit5
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-700">
                    <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <button
                className="w-full py-3 rounded-lg font-bold text-white bg-orange-500 hover:bg-orange-600 transition-colors shadow-md hover:shadow-lg"
                onClick={handleWorkshopCatalog}
                data-translate="btn_workshop_catalog"
              >
                {texts.btn_workshop_catalog}
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border-t-4 border-green-500 transition-all hover:-translate-y-2 hover:shadow-2xl flex flex-col">
            <div className="p-6 text-center border-b border-slate-100 bg-green-50/30">
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden shadow-sm group">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGN0ZBIi8+CjxyZWN0IHg9IjQwIiB5PSI1MCIgd2lkdGg9IjIyMCIgaGVpZ2h0PSIxMDAiIHJ4PSIxMCIgZmlsbD0iIzAwMzM2NiIgb3BhY2l0eT0iMC4xIi8+CjxyZWN0IHg9IjYwIiB5PSI3MCIgd2lkdGg9IjE4MCIgaGVpZ2h0PSI2MCIgcng9IjUiIGZpbGw9IiNGRjY2MDAiIG9wYWNpdHk9IjAuMiIvPgo8dGV4dCB4PSIxNTAiIHk9IjEwNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzMzMyIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2Ij5XYXJlaG91c2UgJiBEaXN0cmlidXRpb248L3RleHQ+Cjwvc3ZnPgo="
                  alt="Distribution Warehouse"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-white/90 p-2 rounded-full shadow-sm text-xl backdrop-blur-sm">📦</div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2" data-translate="solution_distributor_title">{texts.solution_distributor_title}</h3>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-green-500" data-translate="solution_distributor_badge">{texts.solution_distributor_badge}</div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <p className="text-slate-600 mb-6 min-h-[3rem]" data-translate="solution_distributor_desc">
                {texts.solution_distributor_desc}
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  texts.solution_distributor_benefit1,
                  texts.solution_distributor_benefit2,
                  texts.solution_distributor_benefit3,
                  texts.solution_distributor_benefit4,
                  texts.solution_distributor_benefit5
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-700">
                    <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <button
                className="w-full py-3 rounded-lg font-bold text-white bg-green-500 hover:bg-green-600 transition-colors shadow-md hover:shadow-lg"
                onClick={handleDistributorProgram}
                data-translate="btn_distributor_program"
              >
                {texts.btn_distributor_program}
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border-t-4 border-blue-500 transition-all hover:-translate-y-2 hover:shadow-2xl flex flex-col">
            <div className="p-6 text-center border-b border-slate-100 bg-blue-50/30">
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden shadow-sm group">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGN0ZBIi8+CjxyZWN0IHg9IjMwIiB5PSI0MCIgd2lkdGg9IjI0MCIgaGVpZ2h0PSIxMjAiIHJ4PSIxNSIgZmlsbD0iIzAwMzM2NiIgb3BhY2l0eT0iMC4xIi8+CjxyZWN0IHg9IjUwIiB5PSI2MCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSI4MCIgcng9IjEwIiBmaWxsPSIjRkY2NjAwIiBvcGFjaXR5PSIwLjE1Ii8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTA1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMzMzIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiPkludGVybmF0aW9uYWwgTG9naXN0aWNzPC90ZXh0Pgo8L3N2Zz4K"
                  alt="International Shipping"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-white/90 p-2 rounded-full shadow-sm text-xl backdrop-blur-sm">🌎</div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2" data-translate="solution_importer_title">{texts.solution_importer_title}</h3>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-blue-500" data-translate="solution_importer_badge">{texts.solution_importer_badge}</div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <p className="text-slate-600 mb-6 min-h-[3rem]" data-translate="solution_importer_desc">
                {texts.solution_importer_desc}
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  texts.solution_importer_benefit1,
                  texts.solution_importer_benefit2,
                  texts.solution_importer_benefit3,
                  texts.solution_importer_benefit4,
                  texts.solution_importer_benefit5
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-700">
                    <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <button
                className="w-full py-3 rounded-lg font-bold text-white bg-blue-500 hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg"
                onClick={handleImporterProgram}
                data-translate="btn_importer_program"
              >
                {texts.btn_importer_program}
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <button
            className="px-10 py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            onClick={handleBulkQuote}
            dangerouslySetInnerHTML={{ __html: texts.bulk_quote_btn }}
          />
        </div>
      </div>
    </section>
  );
};

export default EconomicSolutionsSection;