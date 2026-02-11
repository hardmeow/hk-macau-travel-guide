import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { metroPaymentMethods } from "@/data/comparisonData";
import { Check, X } from "lucide-react";

export default function MetroPaymentComparison() {
  const [selectedMethod, setSelectedMethod] = useState("octopus");

  const method = metroPaymentMethods.find((m) => m.id === selectedMethod);

  return (
    <section id="metro" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            香港地铁手机操作指南
          </h2>
          <p className="text-lg text-muted-foreground">
            三种支付方式详细对比与操作步骤
          </p>
        </div>

        {/* Tabs for Payment Methods */}
        <Tabs
          value={selectedMethod}
          onValueChange={setSelectedMethod}
          className="max-w-4xl mx-auto"
        >
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {metroPaymentMethods.map((method) => (
              <TabsTrigger key={method.id} value={method.id}>
                <span className="mr-2">{method.icon}</span>
                <span className="hidden sm:inline">{method.name}</span>
                <span className="sm:hidden text-xs">{method.name.split("/")[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {metroPaymentMethods.map((method) => (
            <TabsContent key={method.id} value={method.id} className="space-y-6">
              {/* Method Overview */}
              <Card className="p-6 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">便利性</p>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-6 rounded-full ${
                            i < method.convenience
                              ? "bg-primary"
                              : "bg-muted"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">覆盖范围</p>
                    <p className="font-semibold text-foreground">
                      {method.coverage}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">结算方式</p>
                    <p className="font-semibold text-foreground">
                      {method.settlement}
                    </p>
                  </div>
                </div>
              </Card>

              {/* Operation Steps */}
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  📱 操作步骤
                </h3>
                <div className="space-y-3">
                  {method.steps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                        {index + 1}
                      </div>
                      <p className="text-foreground pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pros and Cons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <Check className="text-green-600" size={20} />
                    优点
                  </h3>
                  <ul className="space-y-2">
                    {method.pros.map((pro, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-foreground text-sm"
                      >
                        <span className="text-green-600 font-bold">✓</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <X className="text-red-600" size={20} />
                    缺点
                  </h3>
                  <ul className="space-y-2">
                    {method.cons.map((con, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-foreground text-sm"
                      >
                        <span className="text-red-600 font-bold">✕</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Recommended Scenario */}
              <Card className={`p-4 ${
                method.recommended
                  ? "bg-green-50 border-green-200"
                  : "bg-blue-50 border-blue-200"
              }`}>
                <p className="text-sm font-semibold text-foreground mb-1">
                  💡 适合场景
                </p>
                <p className="text-foreground">{method.scenario}</p>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
