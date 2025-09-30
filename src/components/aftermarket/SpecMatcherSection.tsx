'use client';
import React, { useState } from 'react';

// 技术规格搜索参数类型
export interface SpecSearchParams {
  extendedLength: string;
  compressedLength: string;
  force: string;
  cylinderDiameter: string;
  connectionType: string;
  application: string;
}

// 搜索结果项类型
export interface SpecMatcherResult {
  id: string;
  extendedLength: number;
  compressedLength: number;
  force: number;
  cylinderDiameter: number;
  connectionType: string;
  application: string;
  partNumber: string;
  price: string;
  stock: boolean;
}

// 文本参数类型
export interface SpecMatcherTexts {
  // 主标题和描述
  sectionTitle: string;
  sectionDescription: string;
  
  // 搜索表单
  formTitle: string;
  extendedLengthLabel: string;
  extendedLengthPlaceholder: string;
  compressedLengthLabel: string;
  compressedLengthPlaceholder: string;
  forceLabel: string;
  forcePlaceholder: string;
  cylinderDiameterLabel: string;
  connectionTypeLabel: string;
  applicationLabel: string;
  selectOption: string;
  searchButton: string;
  
  // 连接类型选项
  connectionTypes: {
    ballSocket: string;
    eyeEnd: string;
    threaded: string;
    fork: string;
  };
  
  // 应用选项
  applications: {
    hood: string;
    tailgate: string;
    window: string;
    seat: string;
    cabinet: string;
  };
  
  // 搜索结果
  resultsHeader: string;
  resultsCount: string;
  noResultsText: string;
  
  // 结果项标签
  extendedLengthText: string;
  compressedLengthText: string;
  forceText: string;
  diameterText: string;
  connectionText: string;
  applicationText: string;
  priceText: string;
  stockText: string;
  availableText: string;
  unavailableText: string;
  viewDetailsBtn: string;
  addToQuoteBtn: string;
  searchingText: string;
  
  // 批量订单部分
  bulkTitle: string;
  bulkDescription: string;
  bulkFlexibleTitle: string;
  bulkFlexibleDesc: string;
  bulkDiscountTitle: string;
  bulkDiscountDesc: string;
  bulkCustomTitle: string;
  bulkCustomDesc: string;
}

interface SpecMatcherProps {
  texts: SpecMatcherTexts;
  initialResults?: SpecMatcherResult[];
}

const SpecMatcher: React.FC<SpecMatcherProps> = ({
  texts,
  initialResults = [],
}) => {
  // 搜索参数状态
  const [searchParams, setSearchParams] = useState<SpecSearchParams>({
    extendedLength: '',
    compressedLength: '',
    force: '',
    cylinderDiameter: '',
    connectionType: '',
    application: '',
  });

  const [results, setResults] = useState<SpecMatcherResult[]>(initialResults);
  const [isSearching, setIsSearching] = useState(false);

  // 处理输入变化
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // 搜索规格
  const searchSpecifications = async () => {
    setIsSearching(true);
    
    // 模拟搜索逻辑
    try {
      // 这里应该调用实际的API
      console.log('Searching with params:', searchParams);
      
      // 模拟搜索结果
      const mockResults: SpecMatcherResult[] = [
        {
          id: '1',
          extendedLength: parseInt(searchParams.extendedLength) || 450,
          compressedLength: parseInt(searchParams.compressedLength) || 180,
          force: parseInt(searchParams.force) || 300,
          cylinderDiameter: parseInt(searchParams.cylinderDiameter) || 20,
          connectionType: searchParams.connectionType || 'ball-socket',
          application: searchParams.application || 'hood',
          partNumber: 'GS-450-180-300',
          price: '$45.99',
          stock: true,
        },
      ];
      
      setResults(mockResults);
    } catch (error) {
      console.error('Search error:', error);
      setResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <section className="spec-matcher-section p-10" id="productos">
      <div className="container">
        <div className="section-header">
          <h2 dangerouslySetInnerHTML={{ __html: texts.sectionTitle }} />
          <p>{texts.sectionDescription}</p>
        </div>
        
        <div className="matcher-container">
          <div className="matcher-form">
            <h3>{texts.formTitle}</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>{texts.extendedLengthLabel}</label>
                <input
                  type="number"
                  name="extendedLength"
                  value={searchParams.extendedLength}
                  onChange={handleInputChange}
                  placeholder={texts.extendedLengthPlaceholder}
                />
              </div>
              <div className="form-group">
                <label>{texts.compressedLengthLabel}</label>
                <input
                  type="number"
                  name="compressedLength"
                  value={searchParams.compressedLength}
                  onChange={handleInputChange}
                  placeholder={texts.compressedLengthPlaceholder}
                />
              </div>
              <div className="form-group">
                <label>{texts.forceLabel}</label>
                <input
                  type="number"
                  name="force"
                  value={searchParams.force}
                  onChange={handleInputChange}
                  placeholder={texts.forcePlaceholder}
                />
              </div>
              <div className="form-group">
                <label>{texts.cylinderDiameterLabel}</label>
                <select
                  name="cylinderDiameter"
                  value={searchParams.cylinderDiameter}
                  onChange={handleInputChange}
                >
                  <option value="">{texts.selectOption}</option>
                  <option value="15">15mm</option>
                  <option value="18">18mm</option>
                  <option value="20">20mm</option>
                  <option value="22">22mm</option>
                  <option value="25">25mm</option>
                  <option value="28">28mm</option>
                </select>
              </div>
              <div className="form-group">
                <label>{texts.connectionTypeLabel}</label>
                <select
                  name="connectionType"
                  value={searchParams.connectionType}
                  onChange={handleInputChange}
                >
                  <option value="">{texts.selectOption}</option>
                  <option value="ball-socket">{texts.connectionTypes.ballSocket}</option>
                  <option value="eye-end">{texts.connectionTypes.eyeEnd}</option>
                  <option value="threaded">{texts.connectionTypes.threaded}</option>
                  <option value="fork">{texts.connectionTypes.fork}</option>
                </select>
              </div>
              <div className="form-group">
                <label>{texts.applicationLabel}</label>
                <select
                  name="application"
                  value={searchParams.application}
                  onChange={handleInputChange}
                >
                  <option value="">{texts.selectOption}</option>
                  <option value="hood">{texts.applications.hood}</option>
                  <option value="tailgate">{texts.applications.tailgate}</option>
                  <option value="window">{texts.applications.window}</option>
                  <option value="seat">{texts.applications.seat}</option>
                  <option value="cabinet">{texts.applications.cabinet}</option>
                </select>
              </div>
            </div>
            <button 
              className="btn-search enhanced-search-btn" 
              onClick={searchSpecifications}
              disabled={isSearching}
            >
              <span className="btn-text">
                {isSearching ? texts.searchingText : texts.searchButton}
              </span>
              {isSearching && (
                <div className="loading-spinner">
                  <div className="spinner"></div>
                </div>
              )}
            </button>
          </div>
          
          <div className="matcher-results" id="search-results">
            <div className="results-header">
              <div className="results-title">
                <h4>{texts.resultsHeader}</h4>
                <div className="results-count">
                  <span className="count-number">{results.length}</span>
                  <span className="count-text">{texts.resultsCount}</span>
                </div>
              </div>
            </div>
            <div className="results-grid" id="results-container">
              {results.length === 0 ? (
                <div className="no-results">
                  <div className="no-results-content">
                    <div className="no-results-icon">🔍</div>
                    <h5>No Results Found</h5>
                    <p>{texts.noResultsText}</p>
                  </div>
                </div>
              ) : (
                results.map(result => (
                  <div key={result.id} className="result-card">
                    <div className="card-header">
                      <h5 className="part-number">{result.partNumber}</h5>
                      <div className={`stock-badge ${result.stock ? 'in-stock' : 'out-of-stock'}`}>
                        {result.stock ? texts.availableText : texts.unavailableText}
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="specs-grid">
                        <div className="spec-item">
                          <span className="spec-label">{texts.extendedLengthText}</span>
                          <span className="spec-value">{result.extendedLength}mm</span>
                        </div>
                        <div className="spec-item">
                          <span className="spec-label">{texts.compressedLengthText}</span>
                          <span className="spec-value">{result.compressedLength}mm</span>
                        </div>
                        <div className="spec-item">
                          <span className="spec-label">{texts.forceText}</span>
                          <span className="spec-value">{result.force}N</span>
                        </div>
                        <div className="spec-item">
                          <span className="spec-label">{texts.diameterText}</span>
                          <span className="spec-value">{result.cylinderDiameter}mm</span>
                        </div>
                        <div className="spec-item">
                          <span className="spec-label">{texts.connectionText}</span>
                          <span className="spec-value">{result.connectionType}</span>
                        </div>
                        <div className="spec-item">
                          <span className="spec-label">{texts.applicationText}</span>
                          <span className="spec-value">{result.application}</span>
                        </div>
                      </div>
                      <div className="price-section">
                        <span className="price-label">{texts.priceText}</span>
                        <span className="price-value">{result.price}</span>
                      </div>
                    </div>
                    <div className="card-footer">
                      <button className="btn-details">{texts.viewDetailsBtn}</button>
                      <button className="btn-add-quote">{texts.addToQuoteBtn}</button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
        
        <div className="bulk-order-section">
          <div className="bulk-container">
            <div className="bulk-header">
              <div className="bulk-title-section">
                <h3>{texts.bulkTitle}</h3>
                <p className="bulk-subtitle">{texts.bulkDescription}</p>
              </div>
              <div className="bulk-decoration">
                <div className="decoration-circle"></div>
                <div className="decoration-line"></div>
              </div>
            </div>
            <div className="bulk-features">
              <div className="bulk-feature">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">🎯</div>
                </div>
                <div className="feature-content">
                  <h4>{texts.bulkFlexibleTitle}</h4>
                  <p dangerouslySetInnerHTML={{ __html: texts.bulkFlexibleDesc }} />
                </div>
              </div>
              <div className="bulk-feature">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">💰</div>
                </div>
                <div className="feature-content">
                  <h4>{texts.bulkDiscountTitle}</h4>
                  <p dangerouslySetInnerHTML={{ __html: texts.bulkDiscountDesc }} />
                </div>
              </div>
              <div className="bulk-feature">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">📋</div>
                </div>
                <div className="feature-content">
                  <h4>{texts.bulkCustomTitle}</h4>
                  <p dangerouslySetInnerHTML={{ __html: texts.bulkCustomDesc }} />
                </div>
              </div>
            </div>
            <div className="bulk-cta">
              <button className="bulk-contact-btn">
                <span>Contact for Bulk Orders</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecMatcher;