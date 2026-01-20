import { FileDown, Mail, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function Contact() {
  return (
    <section className="container mx-auto px-4 py-16 sm:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">需要帮助？</h2>
        <p className="text-lg text-slate-600">
          我们的技术团队随时准备为您提供支持
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <Phone className="h-8 w-8 text-blue-600 mb-2" />
            <CardTitle>电话支持</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 mb-2">工作日 9:00 - 18:00</p>
            <p className="text-lg font-semibold text-blue-600">
              +86 (0) XXX-XXXX-XXXX
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Mail className="h-8 w-8 text-blue-600 mb-2" />
            <CardTitle>邮件咨询</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 mb-2">24 小时内回复</p>
            <p className="text-lg font-semibold text-blue-600">
              support@dkg-springs.com
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <FileDown className="h-8 w-8 text-blue-600 mb-2" />
            <CardTitle>资源下载</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 mb-2">获取完整技术文档</p>
            <Button variant="outline" className="w-full">
              下载 PDF 指南
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
