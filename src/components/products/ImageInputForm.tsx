"use client"

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import parseMarkdownBold from '@/lib/parseMarkdownBold';
import { Send, CheckCircle2, Info, ArrowRight, Settings, Mail, User } from 'lucide-react';

interface InputData {
  input1: string;
  input2: string;
  input3: string;
  pressure: string; // 新增 pressure 字段
}

interface ContactInfo {
  name: string;
  email: string;
  phone?: string;
}

// 新增：定义 ReplacementTextProps 接口
interface ReplacementTextProps {
  title: string;
  subtitle: string;
  desc: string[];
}

/**
 * ImageInputForm 组件
 * 
 * 用于展示产品替换表单，包含图片展示、参数输入和联系方式提交功能。
 * 视觉风格经过优化，提供更直观的用户体验。
 */
const ImageInputForm = ({ title, subtitle, desc }: ReplacementTextProps) => {
  // 输入框数据状态
  const [inputData, setInputData] = useState<InputData>({
    input1: '',
    input2: '',
    input3: '',
    pressure: '', // 新增 pressure 初始值
  });

  // 选中的产品类型
  const [selectedType, setSelectedType] = useState('option1');

  // 联系方式状态
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    name: '',
    email: '',
    phone: '',
  });

  // 弹窗显示状态
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 图片容器引用
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // 处理输入框变化
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputData(prev => ({ ...prev, [name]: value }));
  };

  // 处理产品类型选择
  const handleTypeChange = (value: string) => {
    setSelectedType(value);
  };

  // 处理联系方式变化
  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactInfo(prev => ({ ...prev, [name]: value }));
  };

  // 处理提交按钮点击
  const handleSubmit = () => {
    // 检查是否所有输入框都已填写
    if (inputData.input1 && inputData.input2 && inputData.input3 && inputData.pressure) {
      setIsModalOpen(true);
    } else {
      // 使用更友好的提示方式（这里简单起见仍用 alert，实际项目中建议用 toast）
      alert('Please fill in all input fields (Stroke, EL1, EL2, Pressure)');
    }
  };

  // 处理弹窗提交
  const handleModalSubmit = async () => {
    if (contactInfo.name && contactInfo.email) {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ inputData, contactInfo, productType: selectedType }),
        });

        if (response.ok) {
          alert('Submission successful! Thank you for your information.');
          setIsModalOpen(false);
          // 重置表单
          setInputData({ input1: '', input2: '', input3: '', pressure: '' });
          setContactInfo({ name: '', email: '', phone: '' });
          setSelectedType('option1');
        } else {
          alert('Failed to send email. Please try again later.');
        }
      } catch (error) {
        console.error('Error sending email:', error);
        alert('An error occurred while sending the email. Please try again later.');
      }
    } else {
      alert('Please fill in your name and email.');
    }
  };

  // 处理弹窗关闭
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const productOptions = [
    { value: 'option1', label: 'Gas Spring' },
    { value: 'option2', label: 'Lockable Gas Spring' },
    { value: 'option3', label: 'Traction Spring' },
    { value: 'option4', label: 'Lockable Traction Spring' },
    { value: 'option5', label: 'Dampers' },
  ];

  return (
    <div className="pt-6 md:pt-8 lg:pt-10 pb-6 md:pb-8 lg:pb-10">
      <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="container px-4 md:px-6">
          <div className="space-y-4">
            {/* 标题区域 - 增加视觉层级 */}
            <div className="flex flex-col items-center text-center space-y-4 mb-10">
              <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-full text-blue-600 dark:text-blue-400">
                <Settings className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
                {title}
              </h2>
              <div className="w-20 h-1 bg-blue-500 rounded-full" />
            </div>

            <div className="mt-6 bg-blue-50/50 dark:bg-blue-900/10 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800 dark:text-blue-300 flex items-center justify-center gap-2">
                <Info className="w-6 h-6" />
                {subtitle}
              </h3>
              <ul className="grid gap-3 text-muted-foreground">
                {desc.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-lg leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>{parseMarkdownBold(item)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 主表单卡片 */}
            <div className="bg-slate-50 rounded-2xl shadow-xl overflow-hidden border border-slate-200 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-200/50">
              <div className="p-6 md:p-8 lg:p-10 space-y-8">
                
                {/* 1. 产品类型选择 - 优化为胶囊式选择器 */}
                <div className="space-y-4">
                  <h4 className="text-slate-600 text-sm uppercase tracking-wider font-semibold">Select Product Type</h4>
                  <div className="flex flex-wrap gap-3">
                    {productOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleTypeChange(option.value)}
                        className={`
                          px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border
                          ${selectedType === option.value
                            ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200/50'
                            : 'bg-white border-slate-300 text-slate-600 hover:border-blue-400 hover:text-blue-600'
                          }
                        `}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. 图片展示区域 */}
                <div
                  ref={imageContainerRef}
                  className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-slate-200 rounded-[20px] overflow-hidden shadow-inner group border border-slate-100"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-50/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Image
                    src="/images/products_page/gas_spring_replacement.png"
                    alt="Gas Spring Measurement Guide"
                    fill
                    className="object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* 3. 参数输入区域 - 优化为网格布局 */}
                <div className="space-y-4">
                  <h4 className="text-slate-600 text-sm uppercase tracking-wider font-semibold">Enter Specifications</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Stroke Input */}
                    <div className="bg-white p-4 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors group focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500/20 shadow-sm">
                      <label className="block text-slate-500 text-xs font-medium mb-2 uppercase group-hover:text-blue-600 transition-colors">Stroke Length</label>
                      <div className="flex items-baseline gap-2">
                        <input
                          type="text"
                          name="input1"
                          value={inputData.input1}
                          onChange={handleInputChange}
                          placeholder="0"
                          className="w-full bg-transparent text-2xl font-bold text-slate-900 placeholder-slate-300 focus:outline-none"
                        />
                        <span className="text-sm font-medium text-slate-400">mm</span>
                      </div>
                    </div>

                    {/* EL1 Input */}
                    <div className="bg-white p-4 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors group focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500/20 shadow-sm">
                      <label className="block text-slate-500 text-xs font-medium mb-2 uppercase group-hover:text-blue-600 transition-colors">Extended Length (EL1)</label>
                      <div className="flex items-baseline gap-2">
                        <input
                          type="text"
                          name="input2"
                          value={inputData.input2}
                          onChange={handleInputChange}
                          placeholder="0"
                          className="w-full bg-transparent text-2xl font-bold text-slate-900 placeholder-slate-300 focus:outline-none"
                        />
                        <span className="text-sm font-medium text-slate-400">mm</span>
                      </div>
                    </div>

                    {/* EL2 Input */}
                    <div className="bg-white p-4 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors group focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500/20 shadow-sm">
                      <label className="block text-slate-500 text-xs font-medium mb-2 uppercase group-hover:text-blue-600 transition-colors">Compressed Length (EL2)</label>
                      <div className="flex items-baseline gap-2">
                        <input
                          type="text"
                          name="input3"
                          value={inputData.input3}
                          onChange={handleInputChange}
                          placeholder="0"
                          className="w-full bg-transparent text-2xl font-bold text-slate-900 placeholder-slate-300 focus:outline-none"
                        />
                        <span className="text-sm font-medium text-slate-400">mm</span>
                      </div>
                    </div>

                    {/* Pressure Input */}
                    <div className="bg-white p-4 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors group focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500/20 shadow-sm">
                      <label className="block text-slate-500 text-xs font-medium mb-2 uppercase group-hover:text-blue-600 transition-colors">Force / Pressure</label>
                      <div className="flex items-baseline gap-2">
                        <input
                          type="text"
                          name="pressure"
                          value={inputData.pressure}
                          onChange={handleInputChange}
                          placeholder="0"
                          className="w-full bg-transparent text-2xl font-bold text-slate-900 placeholder-slate-300 focus:outline-none"
                        />
                        <span className="text-sm font-medium text-slate-400">N</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 提交按钮 */}
                <div className="pt-4 flex justify-end">
                  <button
                    onClick={handleSubmit}
                    className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-blue-600 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200/50 hover:shadow-blue-300/60 overflow-hidden w-full sm:w-auto"
                  >
                    <span className="relative z-10">Proceed to Inquiry</span>
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
                    {/* 按钮光效 */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-white/20 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 弹窗 - 优化视觉 */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={handleCloseModal}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden border border-gray-200 dark:border-gray-800"
                onClick={(e) => e.stopPropagation()}
              >
                {/* 弹窗头部 */}
                <div className="bg-blue-600 px-6 py-4 flex items-center justify-between">
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Complete Your Inquiry
                  </h2>
                  <button onClick={handleCloseModal} className="text-white/80 hover:text-white transition-colors">
                    ✕
                  </button>
                </div>

                <div className="p-6 md:p-8">
                  {/* 摘要信息 */}
                  <div className="mb-8 bg-gray-50 dark:bg-slate-800/50 rounded-lg p-4 border border-gray-100 dark:border-gray-700">
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Specifications Summary</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500 block">Type</span>
                        <span className="font-semibold text-gray-900 dark:text-gray-200">{productOptions.find(o => o.value === selectedType)?.label}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block">Force</span>
                        <span className="font-semibold text-gray-900 dark:text-gray-200">{inputData.pressure} N</span>
                      </div>
                      <div className="col-span-2 flex gap-4">
                        <div>
                          <span className="text-gray-500 block text-xs">Stroke</span>
                          <span className="font-semibold text-gray-900 dark:text-gray-200">{inputData.input1} mm</span>
                        </div>
                        <div>
                          <span className="text-gray-500 block text-xs">Ext. Length</span>
                          <span className="font-semibold text-gray-900 dark:text-gray-200">{inputData.input2} mm</span>
                        </div>
                        <div>
                          <span className="text-gray-500 block text-xs">Comp. Length</span>
                          <span className="font-semibold text-gray-900 dark:text-gray-200">{inputData.input3} mm</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 联系表单 */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={contactInfo.name}
                          onChange={handleContactChange}
                          placeholder="John Doe"
                          className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={contactInfo.email}
                          onChange={handleContactChange}
                          placeholder="john@example.com"
                          className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 按钮组 */}
                  <div className="flex gap-4 mt-8">
                    <button
                      onClick={handleCloseModal}
                      className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-all"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleModalSubmit}
                      className="flex-1 px-4 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Send Inquiry
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ImageInputForm;