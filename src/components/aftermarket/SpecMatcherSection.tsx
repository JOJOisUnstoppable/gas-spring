'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { toast } from 'sonner';

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
}

const SpecMatcher: React.FC<SpecMatcherProps> = ({
  texts,
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

  const [isSubmitting, setIsSubmitting] = useState(false);

  // 联系信息（用于提交到联系 API）
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');

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

  // 提交规格到联系 API（参考 ContactForm 逻辑）
  const submitSpecifications = async () => {
    // 基础校验：姓名与邮箱
    const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!contactName.trim()) {
      toast.error('Name is required');
      return;
    }
    if (!EMAIL_REGEX.test(contactEmail)) {
      toast.error('Valid email is required');
      return;
    }

    setIsSubmitting(true);
    try {
      const message = [
        'Gas Spring Specification Submission',
        `Extended Length: ${searchParams.extendedLength || '-'} mm`,
        `Compressed Length: ${searchParams.compressedLength || '-'} mm`,
        `Force: ${searchParams.force || '-'} N`,
        `Cylinder Diameter: ${searchParams.cylinderDiameter || '-'} mm`,
        `Connection Type: ${searchParams.connectionType || '-'}`,
        `Application: ${searchParams.application || '-'}`,
      ].join('\n');

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: contactName.trim(),
          email: contactEmail.trim(),
          company: '',
          phone: '',
          message,
          lang: 'English',
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Submit failed');
      }

      toast.success('Submitted successfully');
      // 提交成功后清理表单
      setSearchParams({
        extendedLength: '',
        compressedLength: '',
        force: '',
        cylinderDiameter: '',
        connectionType: '',
        application: '',
      });
      setContactName('');
      setContactEmail('');
      // 已移除搜索结果展示，无需处理结果列表
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Unknown error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await submitSpecifications();
  };

  return (
    <section className="spec-matcher-section p-10" id="productos">
      <div className="container">
        <div className="section-header">
          <h2 dangerouslySetInnerHTML={{ __html: texts.sectionTitle }} />
          <p>{texts.sectionDescription}</p>
        </div>
        
        <div className="matcher-container">
          <div
            className="matcher-visual"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '1.5rem',
            }}
          >
            <Image
              src="/images/products_page/gas_spring_replacement.png"
              alt="Gas Spring Replacement"
              width={720}
              height={405}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
              }}
            />
          </div>
          <div className="matcher-form">
            <h3>{texts.formTitle}</h3>
            <form className="form-grid" onSubmit={handleSubmit}>
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

              {/* 联系信息 */}
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="contactName"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="contactEmail"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  placeholder="your@email.com"
                />
              </div>
              <button 
                type="submit"
                className="btn-search enhanced-search-btn"
                disabled={isSubmitting}
              >
                <span className="btn-text">
                  {isSubmitting ? 'Submitting…' : texts.searchButton}
                </span>
                {isSubmitting && (
                  <div className="loading-spinner">
                    <div className="spinner"></div>
                  </div>
                )}
              </button>
            </form>
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