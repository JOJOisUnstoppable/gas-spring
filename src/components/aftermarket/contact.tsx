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
        <section className="contact-section" id="contacto">
            <div className="container">
                <div className="contact-content">
                    <div className="contact-info">
                        <h2 dangerouslySetInnerHTML={{ __html: texts.section_title }}></h2>
                        <p>{texts.section_desc}</p>
                        
                        <div className="contact-methods">
                            {texts.contact_methods.map((method, index) => (
                                <div key={index} className="contact-method">
                                    <div className="method-icon">{method.icon}</div>
                                    <div className="method-info">
                                        <h4>{method.title}</h4>
                                        <p>{method.value}</p>
                                        <span>{method.description}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="business-hours">
                            <h4>{texts.business_hours.title}</h4>
                            <div className="hours-grid">
                                {texts.business_hours.hours.map((hour, index) => (
                                    <div key={index} className="hours-item">
                                        <span className="timezone">{hour.timezone}</span>
                                        <span className="time">{hour.time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <div className="contact-form">
                        <h3>{texts.form.title}</h3>
                        <p className="form-subtitle">{texts.form.subtitle}</p>
                        
                        <form onSubmit={handleSubmit}>
                            <div className="form-section">
                                <h4>{texts.form.business_info.title}</h4>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="businessType">{texts.form.business_info.business_type.label}</label>
                                        <select
                                            id="businessType"
                                            name="businessType"
                                            value={formData.businessType}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">{texts.form.business_info.business_type.placeholder}</option>
                                            {texts.form.business_info.business_type.options.map((option, index) => (
                                                <option key={index} value={option.value}>{option.label}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="country">{texts.form.business_info.country.label}</label>
                                        <select
                                            id="country"
                                            name="country"
                                            value={formData.country}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">{texts.form.business_info.country.placeholder}</option>
                                            {texts.form.business_info.country.options.map((option, index) => (
                                                <option key={index} value={option.value}>{option.label}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="companyName">{texts.form.business_info.company_name.label}</label>
                                        <input
                                            type="text"
                                            id="companyName"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contactName">{texts.form.business_info.contact_name.label}</label>
                                        <input
                                            type="text"
                                            id="contactName"
                                            name="contactName"
                                            value={formData.contactName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="email">{texts.form.business_info.email.label}</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">{texts.form.business_info.phone.label}</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="form-section">
                                <h4>{texts.form.order_config.title}</h4>
                                <div className="mixed-order-builder">
                                    <div className="order-type-selector">
                                        <label>{texts.form.order_config.order_type.label}</label>
                                        <div className="radio-group">
                                            <label className="radio-option">
                                                <input
                                                    type="radio"
                                                    name="orderType"
                                                    value="mixed"
                                                    checked={formData.orderType === 'mixed'}
                                                    onChange={handleChange}
                                                />
                                                <span className="radio-custom"></span>
                                                <span>{texts.form.order_config.order_type.mixed}</span>
                                            </label>
                                            <label className="radio-option">
                                                <input
                                                    type="radio"
                                                    name="orderType"
                                                    value="single"
                                                    checked={formData.orderType === 'single'}
                                                    onChange={handleChange}
                                                />
                                                <span className="radio-custom"></span>
                                                <span>{texts.form.order_config.order_type.single}</span>
                                            </label>
                                        </div>
                                    </div>
                                    
                                    <div className="volume-estimator">
                                        <div className="form-group">
                                            <label htmlFor="totalQuantity">{texts.form.order_config.total_quantity.label}</label>
                                            <select
                                                id="totalQuantity"
                                                name="totalQuantity"
                                                value={formData.totalQuantity}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">{texts.form.order_config.total_quantity.placeholder}</option>
                                                {texts.form.order_config.total_quantity.options.map((option, index) => (
                                                    <option key={index} value={option.value}>{option.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="specCount">{texts.form.order_config.spec_count.label}</label>
                                            <select
                                                id="specCount"
                                                name="specCount"
                                                value={formData.specCount}
                                                onChange={handleChange}
                                            >
                                                <option value="">{texts.form.order_config.spec_count.placeholder}</option>
                                                {texts.form.order_config.spec_count.options.map((option, index) => (
                                                    <option key={index} value={option.value}>{option.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    
                                    {showPricing && (
                                        <div className="pricing-preview">
                                            <h5>{texts.form.order_config.pricing_title}</h5>
                                            <div className="price-breakdown">
                                                <div className="price-item">
                                                    <span>Precio Unitario Promedio:</span>
                                                    <span>{pricingPreview.avgPrice}</span>
                                                </div>
                                                <div className="price-item">
                                                    <span>Descuento por Volumen:</span>
                                                    <span className="highlight-green">{pricingPreview.volumeDiscount}</span>
                                                </div>
                                                <div className="price-item total">
                                                    <span>Ahorro Estimado:</span>
                                                    <span className="highlight-green">{pricingPreview.totalSavings}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            
                            <div className="form-section">
                                <h4>{texts.form.specifications.title}</h4>
                                <div className="form-group">
                                    <label htmlFor="vehicleModels">{texts.form.specifications.vehicle_models.label}</label>
                                    <textarea
                                        id="vehicleModels"
                                        name="vehicleModels"
                                        value={formData.vehicleModels}
                                        onChange={handleChange}
                                        placeholder={texts.form.specifications.vehicle_models.placeholder}
                                    ></textarea>
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="specificRequirements">{texts.form.specifications.specific_requirements.label}</label>
                                    <textarea
                                        id="specificRequirements"
                                        name="specificRequirements"
                                        value={formData.specificRequirements}
                                        onChange={handleChange}
                                        placeholder={texts.form.specifications.specific_requirements.placeholder}
                                    ></textarea>
                                </div>
                            </div>
                            
                            <div className="checkbox-group">
                                <div className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        id="newsletter"
                                        name="newsletter"
                                        checked={formData.newsletter}
                                        onChange={handleChange}
                                    />
                                    <span className="checkmark"></span>
                                    <span>{texts.form.checkboxes.newsletter}</span>
                                </div>
                            </div>
                            
                            <div className="checkbox-group">
                                <div className="checkbox-label">
                                    <input
                                        type="checkbox"
                                        id="whatsapp"
                                        name="whatsapp"
                                        checked={formData.whatsapp}
                                        onChange={handleChange}
                                    />
                                    <span className="checkmark"></span>
                                    <span>{texts.form.checkboxes.whatsapp}</span>
                                </div>
                            </div>
                            
                            <button type="submit" className="btn-submit">
                                {texts.form.submit_btn}
                            </button>
                            
                            <div className="form-footer">
                                <p>{texts.form.footer.response_time}</p>
                                <p>{texts.form.footer.privacy}</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;