'use client';

import React, { FormEvent, useState } from 'react';

// 定义联系方式接口
export interface ContactMethod {
    icon: string;
    title: string;
    value: string;
    description: string;
}

// 定义营业时间接口
export interface BusinessHour {
    timezone: string;
    time: string;
}

// 定义表单数据接口
interface FormData {
    businessType: string;
    country: string;
    companyName: string;
    contactName: string;
    email: string;
    phone: string;
    orderType: string;
    totalQuantity: string;
    specCount: string;
    vehicleModels: string;
    specificRequirements: string;
    newsletter: boolean;
    whatsapp: boolean;
}

// 定义价格预览接口
interface PricingPreview {
    avgPrice: string;
    volumeDiscount: string;
    totalSavings: string;
}

// 定义整体文本参数接口
export interface ContactTexts {
    section_title: string;
    section_desc: string;
    contact_methods: ContactMethod[];
    business_hours: {
        title: string;
        hours: BusinessHour[];
    };
    form: {
        title: string;
        subtitle: string;
        business_info: {
            title: string;
            business_type: {
                label: string;
                placeholder: string;
                options: Array<{value: string; label: string}>;
            };
            country: {
                label: string;
                placeholder: string;
                options: Array<{value: string; label: string}>;
            };
            company_name: {
                label: string;
                placeholder: string;
            };
            contact_name: {
                label: string;
                placeholder: string;
            };
            email: {
                label: string;
                placeholder: string;
            };
            phone: {
                label: string;
                placeholder: string;
            };
        };
        order_config: {
            title: string;
            order_type: {
                label: string;
                mixed: string;
                single: string;
            };
            total_quantity: {
                label: string;
                placeholder: string;
                options: Array<{value: string; label: string}>;
            };
            spec_count: {
                label: string;
                placeholder: string;
                options: Array<{value: string; label: string}>;
            };
            pricing_title: string;
        };
        specifications: {
            title: string;
            vehicle_models: {
                label: string;
                placeholder: string;
            };
            specific_requirements: {
                label: string;
                placeholder: string;
            };
        };
        checkboxes: {
            newsletter: string;
            whatsapp: string;
        };
        submit_btn: string;
        footer: {
            response_time: string;
            privacy: string;
        };
    };
}

// 组件props接口
interface ContactSectionProps {
    texts: ContactTexts;
}

const ContactSection: React.FC<ContactSectionProps> = ({ texts }) => {
    const [formData, setFormData] = useState<FormData>({
        businessType: '',
        country: '',
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        orderType: 'mixed',
        totalQuantity: '',
        specCount: '',
        vehicleModels: '',
        specificRequirements: '',
        newsletter: false,
        whatsapp: false
    });

    const [pricingPreview, setPricingPreview] = useState<PricingPreview>({
        avgPrice: '--',
        volumeDiscount: '--%',
        totalSavings: '$--'
    });

    const [showPricing, setShowPricing] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData(prev => ({ ...prev, [name]: checked }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }

        // 更新价格预览
        if (name === 'totalQuantity' || name === 'specCount') {
            updatePricing();
        }
    };

    const updatePricing = () => {
        const { totalQuantity, specCount } = formData;
        
        if (totalQuantity && specCount) {
            // 根据数量和规格计算价格预览
            let avgPrice = 0;
            let discount = 0;
            
            // 价格计算逻辑
            switch (totalQuantity) {
                case '500-1000':
                    avgPrice = 12;
                    discount = 5;
                    break;
                case '1000-2500':
                    avgPrice = 10;
                    discount = 10;
                    break;
                case '2500-5000':
                    avgPrice = 8;
                    discount = 15;
                    break;
                case '5000+':
                    avgPrice = 6;
                    discount = 20;
                    break;
            }

            // 根据规格数量调整价格
            if (specCount === '15-30') discount += 2;
            else if (specCount === '30-50') discount += 5;
            else if (specCount === '50+') discount += 8;

            const minQty = parseInt(totalQuantity.split('-')[0]) || 5000;
            const savings = (avgPrice * discount / 100) * minQty;

            setPricingPreview({
                avgPrice: `$${avgPrice}`,
                volumeDiscount: `${discount}%`,
                totalSavings: `$${savings.toLocaleString()}`
            });
            
            setShowPricing(true);
        } else {
            setShowPricing(false);
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Quotation submitted:', formData);
        // 这里可以添加实际的提交逻辑
    };

    return (
        <section className="py-24 bg-gradient-to-br from-slate-50 to-orange-50/30" id="contacto">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-10">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6" dangerouslySetInnerHTML={{ __html: texts.section_title }}></h2>
                            <p className="text-lg text-slate-600 leading-relaxed">{texts.section_desc}</p>
                        </div>
                        
                        <div className="space-y-6">
                            {texts.contact_methods.map((method, index) => (
                                <div key={index} className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                    <div className="w-14 h-14 flex items-center justify-center bg-orange-50 text-orange-500 rounded-full text-2xl shrink-0 border border-orange-100">
                                        {method.icon}
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-bold text-slate-900 text-lg">{method.title}</h4>
                                        <p className="text-orange-600 font-medium text-lg">{method.value}</p>
                                        <span className="text-sm text-slate-500 block">{method.description}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <h4 className="font-bold text-slate-900 text-lg mb-6">{texts.business_hours.title}</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                                {texts.business_hours.hours.map((hour, index) => (
                                    <div key={index} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
                                        <span className="text-slate-500 text-sm">{hour.timezone}</span>
                                        <span className="text-green-600 font-semibold text-sm">{hour.time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-orange-600"></div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{texts.form.title}</h3>
                        <p className="text-slate-500 mb-8">{texts.form.subtitle}</p>
                        
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="space-y-4">
                                <h4 className="text-sm uppercase tracking-wider text-slate-400 font-bold border-b border-slate-100 pb-2">{texts.form.business_info.title}</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="businessType" className="text-sm font-semibold text-slate-700">{texts.form.business_info.business_type.label}</label>
                                        <select
                                            id="businessType"
                                            name="businessType"
                                            value={formData.businessType}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white"
                                        >
                                            <option value="">{texts.form.business_info.business_type.placeholder}</option>
                                            {texts.form.business_info.business_type.options.map((option, index) => (
                                                <option key={index} value={option.value}>{option.label}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="country" className="text-sm font-semibold text-slate-700">{texts.form.business_info.country.label}</label>
                                        <select
                                            id="country"
                                            name="country"
                                            value={formData.country}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white"
                                        >
                                            <option value="">{texts.form.business_info.country.placeholder}</option>
                                            {texts.form.business_info.country.options.map((option, index) => (
                                                <option key={index} value={option.value}>{option.label}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="companyName" className="text-sm font-semibold text-slate-700">{texts.form.business_info.company_name.label}</label>
                                        <input
                                            type="text"
                                            id="companyName"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="contactName" className="text-sm font-semibold text-slate-700">{texts.form.business_info.contact_name.label}</label>
                                        <input
                                            type="text"
                                            id="contactName"
                                            name="contactName"
                                            value={formData.contactName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                                        />
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="email" className="text-sm font-semibold text-slate-700">{texts.form.business_info.email.label}</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="phone" className="text-sm font-semibold text-slate-700">{texts.form.business_info.phone.label}</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="space-y-4">
                                <h4 className="text-sm uppercase tracking-wider text-slate-400 font-bold border-b border-slate-100 pb-2">{texts.form.order_config.title}</h4>
                                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                                    <div className="mb-6">
                                        <label className="block text-sm font-semibold text-slate-700 mb-3">{texts.form.order_config.order_type.label}</label>
                                        <div className="flex gap-6">
                                            <label className="flex items-center gap-3 cursor-pointer group">
                                                <div className="relative flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="orderType"
                                                        value="mixed"
                                                        checked={formData.orderType === 'mixed'}
                                                        onChange={handleChange}
                                                        className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-orange-500 transition-all"
                                                    />
                                                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-orange-500 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity"></span>
                                                </div>
                                                <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors">{texts.form.order_config.order_type.mixed}</span>
                                            </label>
                                            <label className="flex items-center gap-3 cursor-pointer group">
                                                <div className="relative flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="orderType"
                                                        value="single"
                                                        checked={formData.orderType === 'single'}
                                                        onChange={handleChange}
                                                        className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-orange-500 transition-all"
                                                    />
                                                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-orange-500 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity"></span>
                                                </div>
                                                <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors">{texts.form.order_config.order_type.single}</span>
                                            </label>
                                        </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="totalQuantity" className="text-sm font-semibold text-slate-700">{texts.form.order_config.total_quantity.label}</label>
                                            <select
                                                id="totalQuantity"
                                                name="totalQuantity"
                                                value={formData.totalQuantity}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white"
                                            >
                                                <option value="">{texts.form.order_config.total_quantity.placeholder}</option>
                                                {texts.form.order_config.total_quantity.options.map((option, index) => (
                                                    <option key={index} value={option.value}>{option.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="specCount" className="text-sm font-semibold text-slate-700">{texts.form.order_config.spec_count.label}</label>
                                            <select
                                                id="specCount"
                                                name="specCount"
                                                value={formData.specCount}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all bg-white"
                                            >
                                                <option value="">{texts.form.order_config.spec_count.placeholder}</option>
                                                {texts.form.order_config.spec_count.options.map((option, index) => (
                                                    <option key={index} value={option.value}>{option.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    
                                    {showPricing && (
                                        <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-100">
                                            <h5 className="font-bold text-green-800 mb-3 text-sm uppercase">{texts.form.order_config.pricing_title}</h5>
                                            <div className="flex flex-col gap-2">
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-green-700">Precio Unitario Promedio:</span>
                                                    <span className="font-bold text-green-900">{pricingPreview.avgPrice}</span>
                                                </div>
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-green-700">Descuento por Volumen:</span>
                                                    <span className="font-bold text-green-600 bg-green-200 px-2 py-0.5 rounded text-xs">{pricingPreview.volumeDiscount}</span>
                                                </div>
                                                <div className="flex justify-between text-base border-t border-green-200 pt-2 mt-1">
                                                    <span className="font-bold text-green-800">Ahorro Estimado:</span>
                                                    <span className="font-bold text-green-600">{pricingPreview.totalSavings}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            
                            <div className="space-y-4">
                                <h4 className="text-sm uppercase tracking-wider text-slate-400 font-bold border-b border-slate-100 pb-2">{texts.form.specifications.title}</h4>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="vehicleModels" className="text-sm font-semibold text-slate-700">{texts.form.specifications.vehicle_models.label}</label>
                                    <textarea
                                        id="vehicleModels"
                                        name="vehicleModels"
                                        value={formData.vehicleModels}
                                        onChange={handleChange}
                                        placeholder={texts.form.specifications.vehicle_models.placeholder}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all min-h-[80px]"
                                    ></textarea>
                                </div>
                                
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="specificRequirements" className="text-sm font-semibold text-slate-700">{texts.form.specifications.specific_requirements.label}</label>
                                    <textarea
                                        id="specificRequirements"
                                        name="specificRequirements"
                                        value={formData.specificRequirements}
                                        onChange={handleChange}
                                        placeholder={texts.form.specifications.specific_requirements.placeholder}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all min-h-[80px]"
                                    ></textarea>
                                </div>
                            </div>
                            
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        id="newsletter"
                                        name="newsletter"
                                        checked={formData.newsletter}
                                        onChange={handleChange}
                                        className="w-5 h-5 rounded border-slate-300 text-orange-500 focus:ring-orange-500"
                                    />
                                    <label htmlFor="newsletter" className="text-sm text-slate-600 cursor-pointer select-none">{texts.form.checkboxes.newsletter}</label>
                                </div>
                                
                                <div className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        id="whatsapp"
                                        name="whatsapp"
                                        checked={formData.whatsapp}
                                        onChange={handleChange}
                                        className="w-5 h-5 rounded border-slate-300 text-orange-500 focus:ring-orange-500"
                                    />
                                    <label htmlFor="whatsapp" className="text-sm text-slate-600 cursor-pointer select-none">{texts.form.checkboxes.whatsapp}</label>
                                </div>
                            </div>
                            
                            <button type="submit" className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all active:scale-[0.98]">
                                {texts.form.submit_btn}
                            </button>
                            
                            <div className="text-center space-y-1">
                                <p className="text-xs text-slate-400">{texts.form.footer.response_time}</p>
                                <p className="text-xs text-slate-400">{texts.form.footer.privacy}</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;