/* eslint-disable @next/next/no-img-element */
import React from 'react';
import parseMarkdownBold from '@/lib/parseMarkdownBold';
import { Calculator, HelpCircle, CheckCircle2, ArrowRight } from 'lucide-react';

interface HowtoChooseGSProps {
  dict: {
    products?: {
      'gas-spring'?: {
        howChooseGS?: {
          title?: string;
          description?: string;
          howItWork?: {
            title?: string;
            list?: string[];
          };
          table?: string[];
        };
      };
    };
    [key: string]: unknown;
  };
  imageSrc: string;
  imageAlt: string;
}

/**
 * HowtoChooseGS 组件
 * 
 * 展示如何选择气弹簧的指南，包含计算公式和步骤说明。
 * 视觉上采用了卡片式布局和清晰的排版。
 */
const HowtoChooseGS = function HowtoChooseGS(props: HowtoChooseGSProps) {
  const { dict, imageSrc, imageAlt } = props;

  const howChoose = dict.products?.['gas-spring']?.howChooseGS;
  const description = howChoose?.description;
  const howItWork = howChoose?.howItWork;
  const howItWorkTitle = howItWork?.title;
  const howItWorkList = howItWork?.list ?? [];
  const table = howChoose?.table ?? [];

  return (
    <div className="pt-6 md:pt-8 lg:pt-10 pb-6 md:pb-8 lg:pb-10 bg-slate-50/80">
      <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="container px-4 md:px-6">
          <div className="space-y-4">
            {/* 标题 - 增加图标和样式 */}
            <div className="flex flex-col items-center text-center space-y-4 mb-10">
              <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-full text-blue-600 dark:text-blue-400">
                <Calculator className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
                {howChoose?.title}
              </h2>
              <div className="w-20 h-1 bg-blue-500 rounded-full" />
            </div>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <p className="text-muted-foreground text-lg leading-relaxed border-l-4 border-blue-500 pl-4">
                  {description}
                </p>
              </div>
            </div>

            {/* F1 计算实例 - 卡片化设计 */}
            <div className="space-y-4 mt-8">
              {/* 整体卡片 */}
              <div className="bg-slate-50 rounded-2xl shadow-xl overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-500 group">
                
                {/* 上半部分：左图 + 右文 */}
                <div className="flex flex-col lg:flex-row border-b border-slate-200">
                  {/* 左图 部分 */}
                  <div className="lg:w-1/3 p-6 bg-slate-100 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-200">
                    <div className="relative w-full rounded-xl overflow-hidden shadow-lg bg-white p-2 border border-slate-100 group-hover:scale-[1.02] transition-transform duration-500">
                      <img
                        src={imageSrc}
                        alt={imageAlt || 'Calculation F1'}
                        className="w-full h-auto object-cover rounded-lg"
                      />
                    </div>
                  </div>

                  {/* 右文 部分 */}
                  <div className="lg:w-2/3 w-full text-slate-900 p-8 flex flex-col justify-center">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-blue-600 flex items-center gap-2 group-hover:text-blue-700 transition-colors">
                        <HelpCircle className="w-5 h-5" />
                        Parameters Definition
                      </h3>
                      <div className="grid gap-3">
                        {table.map((item, index) => (
                          <div key={index} className="flex items-start gap-3 text-slate-600 group-hover:text-slate-800 transition-colors">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                            <p className="text-lg leading-relaxed font-light">
                              {parseMarkdownBold(item)}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 下半部分：公式卡片 */}
                <div className="p-6 md:p-8 bg-slate-50/50 border-t border-slate-100">
                  <h4 className="text-slate-600 text-sm uppercase tracking-wider font-semibold mb-4 ml-1">Calculation Formula & Parameters</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: 6 }).map((_, rowIndex) => (
                      <div 
                        key={rowIndex} 
                        className={`
                          p-4 rounded-xl border transition-colors group/item relative overflow-hidden
                          ${rowIndex === 5 
                            ? 'bg-blue-50 border-blue-200 shadow-sm' 
                            : 'bg-white border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-md'
                          }
                        `}
                      >
                        <label className={`
                          block text-xs font-medium mb-2 uppercase transition-colors
                          ${rowIndex === 5 ? 'text-blue-600' : 'text-slate-500 group-hover/item:text-blue-600'}
                        `}>
                          {rowIndex === 5 ? "Formula" : table[rowIndex + 3]?.split(':')[0] || `Parameter ${rowIndex + 1}`}
                        </label>
                        
                        <div className="flex items-baseline gap-2">
                          {rowIndex === 5 ? (
                            <div className="w-full text-2xl font-bold text-blue-700 font-mono tracking-wide">
                              F1 = KGL / bn
                            </div>
                          ) : (
                            <div className="w-full text-xl font-bold text-slate-900 group-hover/item:text-blue-700 transition-colors">
                              {table[rowIndex + 3]?.split(':').pop()?.trim() || ''}
                            </div>
                          )}
                        </div>
                        
                        {/* 装饰性光效 (仅针对普通卡片) */}
                        {rowIndex !== 5 && (
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-50/30 to-blue-50/0 translate-x-[-100%] group-hover/item:translate-x-[100%] transition-transform duration-700 ease-in-out pointer-events-none" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Body Text - 步骤说明优化 */}
            <div className="space-y-8 mt-12">
              {howItWorkTitle && (
                <div className="flex items-center gap-2 border-b pb-4">
                  <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl text-foreground">
                    {howItWorkTitle}
                  </h3>
                </div>
              )}

              {howItWorkList.length > 0 && (
                <div className="grid gap-6">
                  {howItWorkList.map((item, index) => {
                    // 标题处理 (Step 1, Step 2...)
                    if (index === 0 || index === 6) {
                      return (
                        <div key={index} className="mt-6 first:mt-0">
                          <h4 className="text-xl font-bold text-blue-700 dark:text-blue-400 flex items-center gap-2 mb-4 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg inline-block">
                            <ArrowRight className="w-5 h-5" />
                            {parseMarkdownBold(item)}
                          </h4>
                        </div>
                      );
                    } 
                    // 列表项处理
                    else if (index >= 1 && index <= 5) {
                      return (
                        <div key={index} className="flex items-start gap-4 ml-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                          <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-lg font-medium text-foreground">
                            {item}
                          </span>
                        </div>
                      );
                    }
                    // 普通文本
                    return (
                      <div key={index} className="ml-6 pl-4 border-l-2 border-slate-200">
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          {parseMarkdownBold(item)}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowtoChooseGS;