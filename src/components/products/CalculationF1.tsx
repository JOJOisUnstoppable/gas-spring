'use client'
import parseMarkdownBold from '@/lib/parseMarkdownBold';
import { Activity, Sigma, Info, ChevronRight } from 'lucide-react';

interface CalculationF1Props {
    // 第一个中标题（H3）
    midTitle1: string;
    // 第一个中标题对应正文
    midDesc1: string[];

    // 第二个中标题对应正文
    midDesc2: string[];
}

/**
 * CalculationF1 组件
 * 
 * 展示气弹簧的力学计算原理，包括弹性力曲线和动态力计算。
 * 视觉优化：使用卡片区分不同计算模块，增加数学符号图标增强专业感。
 */
const CalculationF1 = ({
    midTitle1,
    midDesc1,
    midDesc2,
}: CalculationF1Props) => {


    return (
        <div className="pt-6 md:pt-8 lg:pt-10 pb-6 md:pb-8 lg:pb-10">
            <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                <div className="container px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* 模块一：弹性力曲线 (EFC) */}
                        <div className="bg-slate-50 p-8 rounded-2xl shadow-xl border border-slate-200 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-500 group">
                            <div className="flex flex-col items-center text-center space-y-4 mb-8 border-b border-slate-200 pb-6">
                                <div className="p-4 bg-blue-100 rounded-full text-blue-600">
                                    <Activity className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                                    {midTitle1}
                                </h3>
                                <div className="w-16 h-1 bg-blue-500 rounded-full" />
                            </div>
                            
                            <div className="space-y-4">
                                {midDesc1.map((item, index) => {
                                    // 判断是否为小标题（第二个元素）
                                    if (index === 1) {
                                        return (
                                            <div key={index} className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500 my-4 shadow-sm">
                                                <h4 className="text-lg font-bold text-blue-800 flex items-center gap-2">
                                                    <Info className="w-4 h-4" />
                                                    {parseMarkdownBold(item)}
                                                </h4>
                                            </div>
                                        );
                                    }
                                    return (
                                        <div key={index} className="flex gap-3">
                                            {index !== 1 && (
                                                <ChevronRight className="w-5 h-5 text-blue-400 shrink-0 mt-1" />
                                            )}
                                            <div className="text-slate-600 text-lg leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                                                {parseMarkdownBold(item)}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* 模块二：动态力计算 (GSDFCC) */}
                        <div className="bg-slate-50 p-8 rounded-2xl shadow-xl border border-slate-200 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-500 group">
                            <div className="flex flex-col items-center text-center space-y-4 mb-8 border-b border-slate-200 pb-6">
                                <div className="p-4 bg-blue-100 rounded-full text-blue-600">
                                    <Sigma className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                                    Force Calculation
                                </h3>
                                <div className="w-16 h-1 bg-blue-500 rounded-full" />
                            </div>

                            <div className="space-y-4 bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                                {Array.isArray(midDesc2) ? (
                                    midDesc2.map((desc, index) => (
                                        <div key={index} className="flex gap-3 items-start">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                                            <p className="text-slate-600 text-lg leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                                                {parseMarkdownBold(desc)}
                                            </p>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-slate-600 text-lg leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                                        {parseMarkdownBold(midDesc2)}
                                    </p>
                                )}
                            </div>
                            
                            {/* 装饰性公式展示 */}
                            <div className="mt-6 p-4 bg-slate-900 rounded-xl text-center overflow-hidden relative group/code shadow-lg">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 opacity-0 group-hover/code:opacity-100 transition-opacity duration-500" />
                                <code className="text-blue-300 font-mono text-lg font-bold relative z-10 group-hover/code:text-blue-200 transition-colors">
                                    F = p × A
                                </code>
                                <p className="text-slate-500 text-xs mt-2 uppercase tracking-widest font-semibold group-hover/code:text-slate-400 transition-colors">Basic Principle</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalculationF1