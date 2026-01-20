export function Features() {
  return (
    <section className="container mx-auto px-4 py-16 sm:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          为什么选择我们的选型指南？
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          5 个关键步骤，帮助您快速准确地选择最适合的气弹簧规格
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6">
        {[
          { step: 1, title: "确定锁定方式", icon: "🔒", desc: "刚性/弹性锁定" },
          { step: 2, title: "计算行程参数", icon: "📏", desc: "工作行程与长度" },
          { step: 3, title: "设计力学参数", icon: "⚙️", desc: "名义力与支撑力" },
          { step: 4, title: "验证性能指标", icon: "✓", desc: "寿命与密封性能" },
          { step: 5, title: "确定型号规格", icon: "🏷️", desc: "完整型号输出" },
        ].map((item) => (
          <div key={item.step} className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-700 font-bold text-xl mb-4 mx-auto">
              {item.step}
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
            <p className="text-sm text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
