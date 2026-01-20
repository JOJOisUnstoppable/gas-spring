import { Calculator, Mail } from "lucide-react";
import { Button } from "../ui/button";

export function CTA() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 sm:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          准备好选择您的气弹簧了吗？
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          使用我们的在线计算工具或联系我们的技术团队获取专业建议
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-blue-700 hover:bg-blue-50 font-semibold"
          >
            <Calculator className="mr-2 h-5 w-5" />
            使用计算工具
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10"
          >
            <Mail className="mr-2 h-5 w-5" />
            联系我们
          </Button>
        </div>
      </div>
    </section>
  );
}
