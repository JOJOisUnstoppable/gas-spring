'use client';

/**
 * @file GasSpringForceCurve.tsx
 * @description 气弹簧动态力特性曲线组件
 * 用于展示气弹簧在压缩和伸展过程中的力学特性
 */

import React, { useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
  ReferenceLine
} from 'recharts';

/**
 * 组件Props定义
 */
interface GasSpringForceCurveProps {
  /** 标称行程 (mm)，默认 165 */
  stroke?: number;
  /** 伸展力 F1 (N)，默认 520 */
  f1?: number;
  /** 力比率 F2/F1，默认 1.35 */
  forceRatio?: number;
  /** 摩擦力系数 (相对于平均力的比例)，默认 0.1 */
  frictionFactor?: number;
  /** 图表标题 */
  title?: string;
  /** 容器类名 */
  className?: string;
}

/**
 * 气弹簧动态力特性曲线组件
 * 
 * 模拟并展示气弹簧的位移-力曲线（迟滞回线）。
 * 包含伸展曲线（下部）和压缩曲线（上部）。
 */
const GasSpringForceCurve: React.FC<GasSpringForceCurveProps> = ({
  stroke = 165,
  f1 = 521.1,
  forceRatio = 1.35,
  frictionFactor = 0.15, // 稍微调大一点以匹配图片中的间距
  title = "气弹簧动态力特性曲线",
  className = ""
}) => {

  // 生成模拟数据
  const { data, keyPoints } = useMemo(() => {
    const points = [];
    const steps = 50; // 数据点数量
    const f2 = f1 * forceRatio;
    
    // 计算关键点的基础力值（不含摩擦）
    // 假设力随位移线性增加（理想气体方程近似）
    
    // 摩擦力估算
    const avgForce = (f1 + f2) / 2;
    const friction = avgForce * frictionFactor;

    // F1, F2 是伸展过程（输出力），通常较小
    // F3, F4 是压缩过程（输入力），通常较大
    // 图片中：下曲线是伸展，上曲线是压缩
    
    const realF1 = f1; // 伸展起始 (x=0)
    const realF2 = f2; // 伸展结束 (x=stroke)
    
    // 压缩时的力 = 基础力 + 摩擦力 + 动态效应
    // 伸展时的力 = 基础力 - 摩擦力 (或者是基础力本身作为输出力)
    
    // 根据图片：
    // 下曲线 (Extension): F1(521) -> F2(704)
    // 上曲线 (Compression): F3(649) -> F4(872)
    
    // 我们用一个简单的线性模型加上一点曲线效果
    // 理想气弹簧力 F = k * x^n ... 这里简化为线性 + 少量非线性
    
    // 压缩曲线 (Compression) - 上方
    const compressionStart = realF1 + friction * 2; // F3
    const compressionEnd = realF2 + friction * 2;   // F4
    
    // 伸展曲线 (Extension) - 下方
    const extensionStart = realF1; // F1
    const extensionEnd = realF2;   // F2

    for (let i = 0; i <= steps; i++) {
      const x = (i / steps) * stroke;
      const progress = i / steps;
      
      // 模拟一点非线性 (气体的多变过程)
      const curvature = 0.2; // 弯曲程度
      const factor = progress + curvature * progress * (1 - progress);
      
      // 伸展力 (下曲线)
      const extForce = extensionStart + (extensionEnd - extensionStart) * factor;
      
      // 压缩力 (上曲线)
      const compForce = compressionStart + (compressionEnd - compressionStart) * factor;

      points.push({
        displacement: Number(x.toFixed(1)),
        extension: Number(extForce.toFixed(1)),
        compression: Number(compForce.toFixed(1)),
      });
    }

    return {
      data: points,
      keyPoints: {
        F1: { x: 0, y: extensionStart, label: `F1: ${extensionStart.toFixed(1)}` },
        F2: { x: stroke, y: extensionEnd, label: `F2: ${extensionEnd.toFixed(1)}` },
        F3: { x: 0, y: compressionStart, label: `F3: ${compressionStart.toFixed(1)}` },
        F4: { x: stroke, y: compressionEnd, label: `F4: ${compressionEnd.toFixed(1)}` },
        Fa: { x: stroke * 0.1, y: extensionStart + (extensionEnd - extensionStart) * 0.1, label: `Fa: ${(extensionStart + (extensionEnd - extensionStart) * 0.15).toFixed(1)}` }, // 模拟中间点
        Fb: { x: stroke * 0.9, y: extensionEnd - (extensionEnd - extensionStart) * 0.1, label: `Fb: ${(extensionEnd * 0.95).toFixed(1)}` }
      }
    };
  }, [stroke, f1, forceRatio, frictionFactor]);

  return (
    <div className={`w-full p-4 bg-white rounded-lg shadow-sm border border-gray-100 ${className}`}>
      {title && (
        <h3 className="text-center text-xl font-serif mb-6 text-gray-800">
          {title}
        </h3>
      )}
      
      <div className="h-[400px] w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 80, left: 20, bottom: 40 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={true} horizontal={true} />
            <XAxis 
              dataKey="displacement" 
              type="number" 
              domain={[0, stroke * 1.2]} //稍微多一点空间
              unit="mm"
              tick={{ fontSize: 12 }}
              label={{ value: '行程 (mm)', position: 'bottom', offset: 0 }}
            />
            <YAxis 
              domain={[0, 'auto']} 
              unit="N"
              tick={{ fontSize: 12 }}
              label={{ value: '力 (N)', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip 
              formatter={(value: any, name: any) => [`${value} N`, '']}
              labelFormatter={(label) => `位移: ${label} mm`}
              contentStyle={{ borderRadius: '8px', border: '1px solid #ddd' }}
            />
            
            {/* 压缩曲线 (上) */}
            <Line 
              type="monotone" 
              dataKey="compression" 
              stroke="#e91e63" 
              strokeWidth={3} 
              dot={false} 
              name="压缩 (Compression)"
              animationDuration={1500}
            />
            
            {/* 伸展曲线 (下) */}
            <Line 
              type="monotone" 
              dataKey="extension" 
              stroke="#e91e63" 
              strokeWidth={3} 
              dot={false} 
              name="伸展 (Extension)"
              animationDuration={1500}
            />

            {/* 关键点标注 */}
            {/* F1 */}
            <ReferenceDot 
              x={keyPoints.F1.x} 
              y={keyPoints.F1.y} 
              r={5} 
              fill="#ff0000" 
              stroke="none"
              label={{ value: keyPoints.F1.label, position: 'right', offset: 10, fill: '#333', fontSize: 14, fontWeight: 'bold' }}
            />
            
            {/* F2 */}
            <ReferenceDot 
              x={keyPoints.F2.x} 
              y={keyPoints.F2.y} 
              r={5} 
              fill="#ff0000" 
              stroke="none"
              label={{ value: keyPoints.F2.label, position: 'right', offset: 10, fill: '#333', fontSize: 14, fontWeight: 'bold' }}
            />

            {/* F3 */}
            <ReferenceDot 
              x={keyPoints.F3.x} 
              y={keyPoints.F3.y} 
              r={5} 
              fill="#ff0000" 
              stroke="none"
              label={{ value: keyPoints.F3.label, position: 'top', offset: 10, fill: '#333', fontSize: 14, fontWeight: 'bold' }}
            />

            {/* F4 */}
            <ReferenceDot 
              x={keyPoints.F4.x} 
              y={keyPoints.F4.y} 
              r={5} 
              fill="#ff0000" 
              stroke="none"
              label={{ value: keyPoints.F4.label, position: 'top', offset: 10, fill: '#333', fontSize: 14, fontWeight: 'bold' }}
            />
            
            {/* 垂直连接线 (模拟图中的F1-F3, F2-F4连接线) */}
            <ReferenceLine segment={[{ x: 0, y: keyPoints.F1.y }, { x: 0, y: keyPoints.F3.y }]} stroke="red" strokeWidth={2} />
            <ReferenceLine segment={[{ x: stroke, y: keyPoints.F2.y }, { x: stroke, y: keyPoints.F4.y }]} stroke="red" strokeWidth={2} />

          </LineChart>
        </ResponsiveContainer>

        {/* 底部尺寸标注模拟 */}
        <div className="absolute bottom-0 left-[60px] right-[80px] h-[30px] flex items-center justify-between text-xs text-red-600 pointer-events-none">
             {/* 这里很难精确对齐，暂时省略复杂的尺寸线，只用文字说明 */}
             {/* 实际项目中可以用SVG overlay来实现精确的尺寸标注 */}
        </div>
      </div>
      
      <div className="mt-4 text-center text-sm text-gray-500">
        <p>X轴: 位移 (mm) - Y轴: 力 (N)</p>
      </div>
    </div>
  );
};

export default GasSpringForceCurve;
