import { useState } from "react";
import { CheckCircle2, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export function Details() {
  const [activeTab, setActiveTab] = useState("rigid");

  return (
    <section className="bg-slate-100 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
          详细选型指南
        </h2>

        {/* Step 1: Locking Type */}
        <Card className="mb-8">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardTitle className="text-2xl">第一步：确定锁定方式和应用需求</CardTitle>
            <CardDescription>
              刚性锁定和弹性锁定是气弹簧的两种主要锁定方式，也是选型的关键起点
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="rigid">刚性锁定</TabsTrigger>
                <TabsTrigger value="elastic">弹性锁定</TabsTrigger>
              </TabsList>

              <TabsContent value="rigid" className="space-y-4 mt-6">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                  <h4 className="font-semibold text-slate-900 mb-2 flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2" />
                    刚性锁定特性
                  </h4>
                  <ul className="space-y-2 text-slate-700">
                    <li>• 锁定状态下，活塞杆受拉力时位移极小（通常不超过 2mm）</li>
                    <li>• 适用于需要精确定位和绝对支撑的场景</li>
                    <li>• 应用案例：医疗床、辅助仪器、精密设备</li>
                    <li>• 行程系数：2.4（相对较低的行程利用率）</li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="elastic" className="space-y-4 mt-6">
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                  <h4 className="font-semibold text-slate-900 mb-2 flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2" />
                    弹性锁定特性
                  </h4>
                  <ul className="space-y-2 text-slate-700">
                    <li>• 锁定状态下，活塞杆受力时会产生明显位移（超过 1mm）</li>
                    <li>• 具有缓冲和减振的作用</li>
                    <li>• 应用案例：办公椅、休闲床、舒适类设备</li>
                    <li>• 行程系数：2.0（更高的行程利用率）</li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Step 2: Stroke Calculation */}
        <Card className="mb-8">
          <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
            <CardTitle className="text-2xl">第二步：确定行程和安装空间</CardTitle>
            <CardDescription>
              根据安装空间和预期活动范围，使用公式确定工作行程与伸展长度的对应关系
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Rigid Locking Formulas */}
              <div className="space-y-4">
                <h4 className="font-semibold text-slate-900 text-lg">刚性锁定公式</h4>
                
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <p className="text-sm text-slate-600 mb-2">已知工作行程 S，求最小伸展长度：</p>
                  <div className="bg-white p-3 rounded font-mono text-center text-blue-700 font-semibold">
                    L<sub>min</sub> = 2.4 × S + 53
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <p className="text-sm text-slate-600 mb-2">已知伸展长度 L，求最大工作行程：</p>
                  <div className="bg-white p-3 rounded font-mono text-center text-blue-700 font-semibold">
                    S<sub>max</sub> = L / 2.4 - 22
                  </div>
                </div>
              </div>

              {/* Elastic Locking Formulas */}
              <div className="space-y-4">
                <h4 className="font-semibold text-slate-900 text-lg">弹性锁定公式</h4>
                
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <p className="text-sm text-slate-600 mb-2">已知工作行程 S，求最小伸展长度：</p>
                  <div className="bg-white p-3 rounded font-mono text-center text-green-700 font-semibold">
                    L<sub>min</sub> = 2 × S + 53
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <p className="text-sm text-slate-600 mb-2">已知伸展长度 L，求最大工作行程：</p>
                  <div className="bg-white p-3 rounded font-mono text-center text-green-700 font-semibold">
                    S<sub>max</sub> = L / 2 - 26.5
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
              <p className="text-sm text-slate-700">
                <strong>尺寸规则：</strong>气缸外径 (D) 与活塞杆直径 (d) 的比值不应小于 1.1。标准系列值为：KQ10/22、KQ10/28。如有定制需求，请联系我们。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Step 3: Force Design */}
        <Card className="mb-8">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
            <CardTitle className="text-2xl">第三步：气弹簧的力-位移曲线</CardTitle>
            <CardDescription>
              力的设计是确保气弹簧平稳承载和可靠锁定的核心
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h5 className="font-semibold text-slate-900 mb-2">名义力 (Fₙ)</h5>
                <p className="text-slate-700">指伸展或压缩时的初始力。当名义力大于 100N 时，应确定为 50N 的整数倍。</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h5 className="font-semibold text-slate-900 mb-2">支撑力 (Fₛ)</h5>
                <p className="text-slate-700">必须确保支撑力小于 1.3 × Fₙ（最大空气压力），以确保平稳提升。</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h5 className="font-semibold text-slate-900 mb-2">锁定力 (Fₗ)</h5>
                <p className="text-slate-700">刚性锁定气弹簧的压缩方向锁定力应大于：<code className="bg-white px-2 py-1 rounded text-purple-700 font-mono">Fₙ × (D/d)²</code></p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <h5 className="font-semibold text-slate-900 mb-2">开启力 (Fₒ)</h5>
                <p className="text-slate-700">解除锁定状态所需的力，通常由设备制造商根据用户需求确定。</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step 4: Performance Verification */}
        <Card className="mb-8">
          <CardHeader className="bg-gradient-to-r from-pink-50 to-rose-50">
            <CardTitle className="text-2xl">第四步：性能指标检验</CardTitle>
            <CardDescription>
              选型时需要确认产品满足以下技术要求
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Zap className="h-6 w-6 text-blue-600 mt-1" />
                </div>
                <div>
                  <h5 className="font-semibold text-slate-900 mb-1">伸展速度</h5>
                  <p className="text-slate-700">标准要求：40mm/s ~ 200mm/s</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-green-600 mt-1" />
                </div>
                <div>
                  <h5 className="font-semibold text-slate-900 mb-1">循环寿命</h5>
                  <p className="text-slate-700">DKG 气弹簧达到 50,000 次循环（当行程 ≤ 50mm 时按实际行程计算），测试后力衰减不超过 12%。</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 mt-1" />
                </div>
                <div>
                  <h5 className="font-semibold text-slate-900 mb-1">密封性能</h5>
                  <p className="text-slate-700">在任意角度承受额定力 24 小时后，行程不变。</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-purple-600 mt-1" />
                </div>
                <div>
                  <h5 className="font-semibold text-slate-900 mb-1">环境适应性</h5>
                  <p className="text-slate-700">需满足高低温要求（通常 -30℃ ~ +60℃）和防腐蚀要求（整弹簧 12h 盐雾测试，活塞杆 48h 中性盐雾测试无腐蚀和泄漏）。</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step 5: Model Output */}
        <Card>
          <CardHeader className="bg-gradient-to-r from-rose-50 to-red-50">
            <CardTitle className="text-2xl">第五步：最终选型标记（型号输出）</CardTitle>
            <CardDescription>
              最终选定的规格应按以下格式记录和采购
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="bg-slate-900 text-white p-6 rounded-lg mb-6 font-mono text-center text-lg">
              KQ 10/27 60 260 F350
            </div>

            <div className="space-y-3">
              <div className="flex gap-4">
                <span className="font-semibold text-slate-900 min-w-fit">KQ</span>
                <span className="text-slate-700">可控气弹簧代码</span>
              </div>
              <div className="flex gap-4">
                <span className="font-semibold text-slate-900 min-w-fit">KQ(D/d)</span>
                <span className="text-slate-700">活塞杆直径 / 气缸外径</span>
              </div>
              <div className="flex gap-4">
                <span className="font-semibold text-slate-900 min-w-fit">S</span>
                <span className="text-slate-700">工作行程</span>
              </div>
              <div className="flex gap-4">
                <span className="font-semibold text-slate-900 min-w-fit">L</span>
                <span className="text-slate-700">伸展长度</span>
              </div>
              <div className="flex gap-4">
                <span className="font-semibold text-slate-900 min-w-fit">Fₙ</span>
                <span className="text-slate-700">名义力值</span>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="text-slate-700">
                <strong>示例说明：</strong> KQ 10/27 60 260 F350 表示一个可控气弹簧，活塞杆直径 10mm，气缸直径 27mm，行程 60mm，总伸展长度 260mm，名义力 350N。
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
