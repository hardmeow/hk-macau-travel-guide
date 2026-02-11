import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface NavCard {
  id: string;
  icon: string;
  title: string;
  description: string;
  sectionId: string;
}

const navCards: NavCard[] = [
  {
    id: "metro",
    icon: "🚇",
    title: "地铁手机操作指南",
    description: "支付方式对比：八达通、支付宝、微信",
    sectionId: "metro",
  },
  {
    id: "transport",
    icon: "🚌",
    title: "去澳门交通方案",
    description: "金巴、渡轮、直通巴士详细对比",
    sectionId: "transport",
  },
  {
    id: "dining",
    icon: "🍽️",
    title: "餐饮推荐",
    description: "麦当劳、Jollibee、维记咖啡粉面",
    sectionId: "locations",
  },
  {
    id: "shopping",
    icon: "🛍️",
    title: "购物指南",
    description: "1010 专门店、亚厘士户外批发",
    sectionId: "locations",
  },
];

export default function QuickNavigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            快速导航
          </h2>
          <p className="text-lg text-muted-foreground">
            选择您感兴趣的内容，快速了解行程详情
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {navCards.map((card) => (
            <Card
              key={card.id}
              className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group hover:border-primary"
              onClick={() => scrollToSection(card.sectionId)}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {card.description}
              </p>
              <Button
                variant="ghost"
                className="w-full text-primary hover:bg-primary/10"
              >
                了解更多 →
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
