import { ArrowRight, FileDown } from "lucide-react";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20 sm:py-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            气弹簧选型与计算指南
          </h1>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            专业的气弹簧解决方案 | 从基础选型到精确计算 | 确保您的应用获得最佳性能
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50 font-semibold"
            >
              立即开始选型 <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <FileDown className="mr-2 h-5 w-5" />
              下载完整指南
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
