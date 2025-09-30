// PainSolutions.tsx
import React from 'react';

export interface PainSolutionsTexts {
  section_perdiendo: string;
  section_perdiendo_desc: string;
  error1_title: string;
  error1_stat1: string;
  error1_stat2: string;
  error1_problem: string;
  solution_title: string;
  error1_solution: string;
  error1_benefit1: string;
  error1_benefit2: string;
  error1_benefit3: string;
  error2_title: string;
  error2_stat1: string;
  error2_stat2: string;
  error2_problem: string;
  error2_solution: string;
  error2_benefit1: string;
  error2_benefit2: string;
  error2_benefit3: string;
  error3_title: string;
  error3_stat1: string;
  error3_stat2: string;
  error3_problem: string;
  error3_solution: string;
  error3_benefit1: string;
  error3_benefit2: string;
  error3_benefit3: string;
  mixed_order_title: string;
  mixed_order_desc: string;
  order_total_specs: string;
  order_total_specs_value: string;
  order_total_qty: string;
  order_total_qty_value: string;
  order_avg_per_spec: string;
  order_avg_per_spec_value: string;
  order_total_savings: string;
  order_total_savings_value: string;
  breakdown_capo: string;
  breakdown_capo_qty: string;
  breakdown_porton: string;
  breakdown_porton_qty: string;
  breakdown_ventanillas: string;
  breakdown_ventanillas_qty: string;
  breakdown_asientos: string;
  breakdown_asientos_qty: string;
}

export interface PainSolutionsProps {
  texts: PainSolutionsTexts;
}
        
const PainSolutions: React.FC<PainSolutionsProps> = ({ texts }) => {
  return (
    <section className="pain-solutions-section">
      <div className="container">
        <div className="section-header">
          <h2 
            dangerouslySetInnerHTML={{ __html: texts.section_perdiendo }} 
          />
          <p>{texts.section_perdiendo_desc}</p>
        </div>
        
        <div className="pain-solutions-grid">
          {/* 错误1卡片 */}
          <div className="pain-card inventory-risk">
            <div className="pain-icon">💸</div>
            <h3>{texts.error1_title}</h3>
            <div className="pain-stats">
              <div className="stat-item">
                <span className="stat-number">70%</span>
                <span className="stat-label">{texts.error1_stat1}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">$50K+</span>
                <span className="stat-label">{texts.error1_stat2}</span>
              </div>
            </div>
            <p dangerouslySetInnerHTML={{ __html: texts.error1_problem }} />
            <div className="solution-box">
              <h4>{texts.solution_title}</h4>
              <p>{texts.error1_solution}</p>
            </div>
            <ul className="pain-benefits">
              <li>{texts.error1_benefit1}</li>
              <li>{texts.error1_benefit2}</li>
              <li>{texts.error1_benefit3}</li>
            </ul>
          </div>
          
          {/* 错误2卡片 */}
          <div className="pain-card cash-flow">
            <div className="pain-icon">🏦</div>
            <h3>{texts.error2_title}</h3>
            <div className="pain-stats">
              <div className="stat-item">
                <span className="stat-number">300%</span>
                <span className="stat-label">{texts.error2_stat1}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15%</span>
                <span className="stat-label">{texts.error2_stat2}</span>
              </div>
            </div>
            <p dangerouslySetInnerHTML={{ __html: texts.error2_problem }} />
            <div className="solution-box">
              <h4>{texts.solution_title}</h4>
              <p>{texts.error2_solution}</p>
            </div>
            <ul className="pain-benefits">
              <li>{texts.error2_benefit1}</li>
              <li>{texts.error2_benefit2}</li>
              <li>{texts.error2_benefit3}</li>
            </ul>
          </div>
          
          {/* 错误3卡片 */}
          <div className="pain-card complexity">
            <div className="pain-icon">🤯</div>
            <h3>{texts.error3_title}</h3>
            <div className="pain-stats">
              <div className="stat-item">
                <span className="stat-number">8+</span>
                <span className="stat-label">{texts.error3_stat1}</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">40h</span>
                <span className="stat-label">{texts.error3_stat2}</span>
              </div>
            </div>
            <p dangerouslySetInnerHTML={{ __html: texts.error3_problem }} />
            <div className="solution-box">
              <h4>{texts.solution_title}</h4>
              <p>{texts.error3_solution}</p>
            </div>
            <ul className="pain-benefits">
              <li>{texts.error3_benefit1}</li>
              <li>{texts.error3_benefit2}</li>
              <li>{texts.error3_benefit3}</li>
            </ul>
          </div>
        </div>
        
        {/* 混合订单展示 */}
        <div className="mixed-order-showcase">
          <div className="showcase-header">
            <h3>{texts.mixed_order_title}</h3>
            <p>{texts.mixed_order_desc}</p>
          </div>
          <div className="order-example">
            <div className="order-summary">
              <div className="summary-item">
                <span className="label">{texts.order_total_specs}</span>
                <span className="value">{texts.order_total_specs_value}</span>
              </div>
              <div className="summary-item">
                <span className="label">{texts.order_total_qty}</span>
                <span className="value">{texts.order_total_qty_value}</span>
              </div>
              <div className="summary-item">
                <span className="label">{texts.order_avg_per_spec}</span>
                <span className="value">{texts.order_avg_per_spec_value}</span>
              </div>
              <div className="summary-item">
                <span className="label">{texts.order_total_savings}</span>
                <span className="value highlight-green">{texts.order_total_savings_value}</span>
              </div>
            </div>
            <div className="order-breakdown">
              <div className="breakdown-item">
                <span className="category">{texts.breakdown_capo}</span>
                <span className="quantity">{texts.breakdown_capo_qty}</span>
              </div>
              <div className="breakdown-item">
                <span className="category">{texts.breakdown_porton}</span>
                <span className="quantity">{texts.breakdown_porton_qty}</span>
              </div>
              <div className="breakdown-item">
                <span className="category">{texts.breakdown_ventanillas}</span>
                <span className="quantity">{texts.breakdown_ventanillas_qty}</span>
              </div>
              <div className="breakdown-item">
                <span className="category">{texts.breakdown_asientos}</span>
                <span className="quantity">{texts.breakdown_asientos_qty}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSolutions;