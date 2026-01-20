import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function Tips() {
  return (
    <section className="container mx-auto px-4 py-16 sm:py-24">
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-0">
        <CardHeader>
          <CardTitle className="text-2xl">选型建议</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-700 leading-relaxed mb-4">
            在实际应用中，如果安装空间非常紧张，建议优先考虑弹性锁定，因为它具有更高的行程利用率（系数为 2.0，而刚性为 2.4）。同时，应根据设备安装要求选择合适的连接方式（如单耳、双耳、球接头等）。
          </p>
          <div className="bg-white p-4 rounded-lg">
            <p className="text-sm text-slate-600">
              💡 <strong>专业提示：</strong> 对于空间受限的应用，弹性锁定可以提供 20% 更高的行程利用率，同时保持出色的缓冲性能。
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
