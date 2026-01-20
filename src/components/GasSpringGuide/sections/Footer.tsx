export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold text-white mb-4">关于我们</h4>
            <p className="text-sm">
              专业的气弹簧制造商，为全球客户提供高质量解决方案。
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">产品</h4>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  可控气弹簧
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  标准气弹簧
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  定制解决方案
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">服务</h4>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  技术支持
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  选型指南
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  常见问题
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">地区</h4>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">
                  中国
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  欧洲
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  亚太地区
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8 text-center text-sm">
          <p>
            &copy; 2024 DKG Gas Springs. 保留所有权利。|{" "}
            <a href="#" className="hover:text-white transition">
              隐私政策
            </a>{" "}
            |{" "}
            <a href="#" className="hover:text-white transition">
              使用条款
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
