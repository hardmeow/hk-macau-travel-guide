import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { macauTransportMethods } from "@/data/comparisonData";
import { Badge } from "@/components/ui/badge";
import { Clock, DollarSign, MapPin } from "lucide-react";

export default function MacauTransportComparison() {
  const [selectedMethod, setSelectedMethod] = useState("ferry");

  return (
    <section id="transport" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            香港 → 澳门交通方案
          </h2>
          <p className="text-lg text-muted-foreground">
            2 月 15 日中午三种交通方式详细对比
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {macauTransportMethods.map((method) => (
            <Card
              key={method.id}
              className={`p-6 cursor-pointer transition-all duration-300 ${
                selectedMethod === method.id
                  ? "border-primary shadow-lg"
                  : "hover:shadow-md"
              }`}
              onClick={() => setSelectedMethod(method.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-3xl mb-2">{method.icon}</p>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {method.name}
                  </h3>
                </div>
                {method.recommended && (
                  <Badge className="bg-primary text-white">推荐</Badge>
                )}
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-primary" />
                  <span className="text-sm text-foreground font-semibold">
                    {method.duration}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign size={16} className="text-primary" />
                  <span className="text-sm text-foreground font-semibold">
                    {method.cost}
                  </span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground line-clamp-2">
                {method.scenario}
              </p>
            </Card>
          ))}
        </div>

        {/* Detailed Comparison */}
        <Card className="p-8 max-w-4xl mx-auto">
          {macauTransportMethods.map((method) => (
            selectedMethod === method.id && (
              <div key={method.id} className="space-y-8">
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                    {method.icon} {method.name}
                  </h3>

                  {/* Key Info */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        耗时
                      </p>
                      <p className="font-display text-xl font-bold text-foreground">
                        {method.duration}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        费用
                      </p>
                      <p className="font-display text-xl font-bold text-foreground">
                        {method.cost}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        班次频率
                      </p>
                      <p className="font-display text-xl font-bold text-foreground">
                        {method.details.frequency}
                      </p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <MapPin size={18} className="text-primary" />
                        出发地点
                      </h4>
                      <p className="text-foreground bg-muted p-4 rounded-lg">
                        {method.details.departure}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <MapPin size={18} className="text-primary" />
                        抵达地点
                      </h4>
                      <p className="text-foreground bg-muted p-4 rounded-lg">
                        {method.details.arrival}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">
                        📝 备注
                      </h4>
                      <p className="text-foreground bg-accent/10 p-4 rounded-lg">
                        {method.details.notes}
                      </p>
                    </div>
                  </div>

                  {/* Pros and Cons */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div>
                      <h4 className="font-semibold text-foreground mb-4 text-green-700">
                        ✓ 优点
                      </h4>
                      <ul className="space-y-2">
                        {method.pros.map((pro, index) => (
                          <li
                            key={index}
                            className="flex gap-2 text-foreground text-sm"
                          >
                            <span className="text-green-600 font-bold flex-shrink-0">
                              ✓
                            </span>
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-4 text-red-700">
                        ✕ 缺点
                      </h4>
                      <ul className="space-y-2">
                        {method.cons.map((con, index) => (
                          <li
                            key={index}
                            className="flex gap-2 text-foreground text-sm"
                          >
                            <span className="text-red-600 font-bold flex-shrink-0">
                              ✕
                            </span>
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Recommendation */}
                  <div className={`mt-8 p-4 rounded-lg ${
                    method.recommended
                      ? "bg-green-50 border-2 border-green-200"
                      : "bg-blue-50 border-2 border-blue-200"
                  }`}>
                    <p className="font-semibold text-foreground mb-1">
                      💡 {method.recommended ? "推荐" : "适合"}场景
                    </p>
                    <p className="text-foreground">{method.scenario}</p>
                  </div>
                </div>
              </div>
            )
          ))}
        </Card>
      </div>
    </section>
  );
}
