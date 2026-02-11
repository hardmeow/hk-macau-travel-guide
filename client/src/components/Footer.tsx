import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";

export default function Footer() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-display text-lg font-bold mb-4">关于本指南</h3>
            <p className="text-gray-300 text-sm">
              这是一份为 2026 年 2 月 14-15 日港澳旅行精心准备的完整行程指南，包含详细的交通、餐饮和购物信息。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-bold mb-4">快速链接</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#itinerary" className="hover:text-white transition">
                  行程时间轴
                </a>
              </li>
              <li>
                <a href="#metro" className="hover:text-white transition">
                  地铁指南
                </a>
              </li>
              <li>
                <a href="#transport" className="hover:text-white transition">
                  去澳门交通
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-white transition">
                  地点推荐
                </a>
              </li>
            </ul>
          </div>

          {/* Actions */}
          <div>
            <h3 className="font-display text-lg font-bold mb-4">操作</h3>
            <Button
              onClick={handlePrint}
              className="w-full bg-white text-foreground hover:bg-gray-200 flex items-center justify-center gap-2"
            >
              <Printer size={18} />
              打印行程
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          {/* Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-1">行程天数</p>
              <p className="font-display text-2xl font-bold">2 天</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-1">主要地点</p>
              <p className="font-display text-2xl font-bold">5 个</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-1">预估费用</p>
              <p className="font-display text-2xl font-bold">HK$500+</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            <p>
              © 2026 港澳旅行指南 | 最后更新：2026 年 2 月 11 日
            </p>
            <p className="mt-2">
              💡 提示：所有信息仅供参考，请在出行前确认最新的营业时间和班次信息。
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
