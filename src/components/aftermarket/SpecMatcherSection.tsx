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
    <section className="py-16 bg-white" id="productos">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" dangerouslySetInnerHTML={{ __html: texts.sectionTitle }} />
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{texts.sectionDescription}</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div
            className="flex justify-center items-center mb-6 lg:mb-0"
          >
            <Image
              src="/images/products_page/gas_spring_replacement.png"
              alt="Gas Spring Replacement"
              width={720}
              height={405}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl shadow-lg border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">{texts.formTitle}</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">{texts.extendedLengthLabel}</label>
                <input
                  type="number"
                  name="extendedLength"
                  value={searchParams.extendedLength}
                  onChange={handleInputChange}
                  placeholder={texts.extendedLengthPlaceholder}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">{texts.compressedLengthLabel}</label>
                <input
                  type="number"
                  name="compressedLength"
                  value={searchParams.compressedLength}
                  onChange={handleInputChange}
                  placeholder={texts.compressedLengthPlaceholder}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">{texts.forceLabel}</label>
                <input
                  type="number"
                  name="force"
                  value={searchParams.force}
                  onChange={handleInputChange}
                  placeholder={texts.forcePlaceholder}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">{texts.cylinderDiameterLabel}</label>
                <select
                  name="cylinderDiameter"
                  value={searchParams.cylinderDiameter}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white"
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
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">{texts.connectionTypeLabel}</label>
                <select
                  name="connectionType"
                  value={searchParams.connectionType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white"
                >
                  <option value="">{texts.selectOption}</option>
                  <option value="ball-socket">{texts.connectionTypes.ballSocket}</option>
                  <option value="eye-end">{texts.connectionTypes.eyeEnd}</option>
                  <option value="threaded">{texts.connectionTypes.threaded}</option>
                  <option value="fork">{texts.connectionTypes.fork}</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">{texts.applicationLabel}</label>
                <select
                  name="application"
                  value={searchParams.application}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white"
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
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">Name</label>
                <input
                  type="text"
                  name="contactName"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">Email</label>
                <input
                  type="email"
                  name="contactEmail"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                />
              </div>
              <button 
                type="submit"
                className="md:col-span-2 w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                <span className="relative z-10">
                  {isSubmitting ? 'Submitting…' : texts.searchButton}
                </span>
                {isSubmitting && (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  </div>
                )}
              </button>
            </form>
          </div>

        </div>
        
        <div className="mt-20 bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl overflow-hidden relative border border-slate-200">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none"></div>
          
          <div className="p-8 md:p-12 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
              <div className="flex-1">
                <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-600 mb-3">{texts.bulkTitle}</h3>
                <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">{texts.bulkDescription}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-80 animate-pulse"></div>
                <div className="w-24 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all group">
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center border-2 border-blue-100 mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-3xl">🎯</div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-slate-900">{texts.bulkFlexibleTitle}</h4>
                  <p className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: texts.bulkFlexibleDesc }} />
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all group">
                <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center border-2 border-green-100 mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-3xl">💰</div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-slate-900">{texts.bulkDiscountTitle}</h4>
                  <p className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: texts.bulkDiscountDesc }} />
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all group">
                <div className="w-16 h-16 bg-purple-50 rounded-xl flex items-center justify-center border-2 border-purple-100 mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-3xl">📋</div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-slate-900">{texts.bulkCustomTitle}</h4>
                  <p className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: texts.bulkCustomDesc }} />
                </div>
              </div>
            </div>
            
            <div className="text-center pt-8 border-t border-slate-200">
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-blue-500/25 group">
                <span>Contact for Bulk Orders</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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