"use client"

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import parseMarkdownBold from '@/lib/parseMarkdownBold';

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



const ImageInputForm = ({ title, subtitle, desc }: ReplacementTextProps) => {
  // 输入框数据状态
  const [inputData, setInputData] = useState<InputData>({
    input1: '',
    input2: '',
    input3: '',
    pressure: '', // 新增 pressure 初始值
  });

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
      alert('Please fill in all input fields');
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
          body: JSON.stringify({ inputData, contactInfo }),
        });

        if (response.ok) {
          alert('Submission successful! Thank you for your information.');
          setIsModalOpen(false);
          // 重置表单
          setInputData({ input1: '', input2: '', input3: '', pressure: '' });
          setContactInfo({ name: '', email: '', phone: '' });
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

  return (
    <section className="max-w-7xl mx-auto w-full py-4 bg-background">
      <div className="container px-4 md:px-6">
        <div className="space-y-8">
          {/* 标题 */}
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground text-left">
            {title}
          </h2>
          {/* 标题 下划线 */}
          <div className="w-full border-b-3 border-[#0F172B]"></div>
          {/* 新增：显示 replacementText 内容 */}
          <div className="mb-8 text-[#0F172B]]">
            <h3 className="text-2xl font-semibold mb-4 text-left">
              {subtitle}
            </h3>
            <ul className="list-disc list-inside space-y-2 px-4">
              {desc.map((item, index) => (
                <li key={index} className="text-lg leading-relaxed">
                  {parseMarkdownBold(item)}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0F172B] rounded-xl shadow-lg overflow-hidden p-6">
            {/* Radio button container */}
            <div className="flex justify-center items-center space-x-6 mb-8 flex-wrap">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-blue-600"
                  name="radioOption"
                  value="option1"
                />
                <span className="ml-2 text-white font-medium">Gas Spring</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-blue-600"
                  name="radioOption"
                  value="option2"
                />
                <span className="ml-2 text-white font-medium">Lockable Gas Spring</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-blue-600"
                  name="radioOption"
                  value="option3"
                />
                <span className="ml-2 text-white font-medium">Traction Spring</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-blue-600"
                  name="radioOption"
                  value="option4"
                />
                <span className="ml-2 text-white font-medium">Lockable Traction Spring</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-blue-600"
                  name="radioOption"
                  value="option5"
                />
                <span className="ml-2 text-white font-medium">Dampers</span>
              </label>
            </div>

            {/* gas-spring图片 */}
            <div
              ref={imageContainerRef}
              className="relative h-[500px] bg-gray-100 rounded-lg overflow-hidden mb-8"
            >
              <Image
                src="/images/products_page/gas_spring_replacement.png"
                alt="Background Image"
                fill
                className="object-cover"
              />
            </div>

            {/* 输入框容器 */}
            <div className="flex justify-center items-center gap-8 mb-8 flex-wrap">
              {/* Input 1 */}
              <div className="flex justify-center items-center">
                <span className="text-white text-lg font-medium mr-2">Stroke =</span>
                <input
                  type="text"
                  name="input1"
                  value={inputData.input1}
                  onChange={handleInputChange}
                  className="w-20 h-12 px-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-white border border-black"
                />
                <span className="h-12 px-2 bg-gray-100/80 backdrop-blur-sm border-l border-gray-300 rounded-r-md flex items-center text-sm font-medium text-gray-600 shadow-md">
                  mm
                </span>
              </div>

              {/* Input 2 */}
              <div className="flex justify-center items-center">
                <span className="text-white text-lg font-medium mr-2">EL1 =</span>
                <input
                  type="text"
                  name="input2"
                  value={inputData.input2}
                  onChange={handleInputChange}
                  className="w-20 h-12 px-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-white border border-black"
                />
                <span className="h-12 px-2 bg-gray-100/80 backdrop-blur-sm border-l border-gray-300 rounded-r-md flex items-center text-sm font-medium text-gray-600 shadow-md">
                  mm
                </span>
              </div>

              {/* Input 3 */}
              <div className="flex justify-center items-center">
                <span className="text-white text-lg font-medium mr-2">EL2 =</span>
                <input
                  type="text"
                  name="input3"
                  value={inputData.input3}
                  onChange={handleInputChange}
                  className="w-20 h-12 px-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-white border border-black"
                />
                <span className="h-12 px-2 bg-gray-100/80 backdrop-blur-sm border-l border-gray-300 rounded-r-md flex items-center text-sm font-medium text-gray-600 shadow-md">
                  mm
                </span>
              </div>

              {/* 新增：Pressure 输入框 */}
              <div className="flex justify-center items-center">
                <span className="text-white text-lg font-medium mr-2">Pressure =</span>
                <input
                  type="text"
                  name="pressure"
                  value={inputData.pressure}
                  onChange={handleInputChange}
                  className="w-20 h-12 px-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-white border border-black"
                />
                <span className="h-12 px-2 bg-gray-100/80 backdrop-blur-sm border-l border-gray-300 rounded-r-md flex items-center text-sm font-medium text-gray-600 shadow-md">
                  N
                </span>
              </div>
            </div>

            {/* 提交按钮 */}
            <div className="flex justify-center items-center">
              <button
                onClick={handleSubmit}
                className="px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 弹窗 */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={handleCloseModal}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">Your Input Information</h2>

            <div className="mb-6 space-y-2">
              <p className="text-gray-700"><span className="font-medium">Stroke:</span> {inputData.input1}</p>
              <p className="text-gray-700"><span className="font-medium">EL1:</span> {inputData.input2}</p>
              <p className="text-gray-700"><span className="font-medium">EL2:</span> {inputData.input3}</p>
              <p className="text-gray-700"><span className="font-medium">Pressure:</span> {inputData.pressure}</p>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">How We Sent the Information</h3>

            <div className="space-y-4 mb-6">
              <input
                type="text"
                name="name"
                value={contactInfo.name}
                onChange={handleContactChange}
                placeholder="How We Call You?"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <input
                type="email"
                name="email"
                value={contactInfo.email}
                onChange={handleContactChange}
                placeholder="Your Email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleCloseModal}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleModalSubmit}
                className="flex-1 px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-all"
              >
                Submit
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ImageInputForm;