import { Button } from "@/components/ui/button";

const heroImageUrl =
  "https://private-us-east-1.manuscdn.com/sessionFile/Tuu49NB3s5I1aKfWJk5YA1/sandbox/cgrEqPUS9gvoEKJm5y9qhW-img-1_1770801686000_na1fn_aGVyby1ob25nLWtvbmctaGFyYm9y.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVHV1NDlOQjNzNUkxYUtmV0prNVlBMS9zYW5kYm94L2NnckVxUFVTOWd2b0VLSm01eTlxaFctaW1nLTFfMTc3MDgwMTY4NjAwMF9uYTFmbl9hR1Z5Ynkxb2IyNW5MV3R2Ym1jdGFHRnlZbTl5LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=N8EaTImkjyJjlUBkm47HgS-LQKNAbYSPNNeI~PMuDscafcHb3tt70cPMhsw3gM1PjHR3~qadWl2QUI02ImiTidGgRvnwRFvZmuydtW26PHkp-YoF2omogF8tI7WkMTXfN79kbuGCruHuP51eRCEA2TxUgn0m2bOOs~TFjZgN~66gC6hqQz4NmwM03fxYCNLLQ8EkkJuzKb~C6ysviHtypmstu~rwPNqzT1IkXX8Wc0r1Zs9Usu1G~CFj6IAlHYiAHqPr4J5eaW3UE3OgaU6DzD1uRUVpBawbqadqxzHLg7WN82x7Z22MumUx9QvWL5BYUolAq70kpVlZKatCRu8~Sw__";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('${heroImageUrl}')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <div className="mb-6 animate-fade-in">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-4">
            2026 年 港澳之旅
          </h1>
          <p className="text-xl md:text-2xl font-light mb-2">
            2 月 14 日 - 2 月 15 日
          </p>
          <p className="text-lg md:text-xl text-gray-200">
            完整行程规划 | 交通指南 | 美食推荐
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Button
            size="lg"
            className="bg-primary hover:bg-blue-800 text-white font-semibold"
            onClick={() => scrollToSection("itinerary")}
          >
            查看完整行程
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/20 hover:bg-white/30 text-white border-white"
            onClick={() => scrollToSection("metro")}
          >
            地铁 & 交通指南
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold">2</p>
            <p className="text-sm text-gray-200">天行程</p>
          </div>
          <div>
            <p className="text-3xl font-bold">5</p>
            <p className="text-sm text-gray-200">个地点</p>
          </div>
          <div>
            <p className="text-3xl font-bold">∞</p>
            <p className="text-sm text-gray-200">回忆</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
