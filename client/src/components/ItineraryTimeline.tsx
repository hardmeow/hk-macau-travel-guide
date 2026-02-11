import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { itineraryEvents } from "@/data/itineraryData";

export default function ItineraryTimeline() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Group events by date
  const eventsByDate = {
    "2026-02-14": itineraryEvents.filter((e) => e.date === "2026-02-14"),
    "2026-02-15": itineraryEvents.filter((e) => e.date === "2026-02-15"),
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="itinerary" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            行程时间轴
          </h2>
          <p className="text-lg text-muted-foreground">
            2 月 14-15 日完整行程安排
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* February 14 */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-display font-bold">
                14
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                2 月 14 日
              </h3>
              <span className="text-sm text-muted-foreground ml-auto">
                抵达香港
              </span>
            </div>

            <div className="space-y-4 pl-6 border-l-2 border-primary">
              {eventsByDate["2026-02-14"].map((event, index) => (
                <div key={event.id} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-8 top-2 w-4 h-4 rounded-full bg-primary border-4 border-white" />

                  {/* Event Card */}
                  <Card
                    className={`p-4 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      expandedId === event.id ? "border-primary" : ""
                    }`}
                    onClick={() => toggleExpand(event.id)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl">{event.icon}</span>
                          <div>
                            <p className="font-display font-bold text-lg text-foreground">
                              {event.time}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {event.location}
                            </p>
                          </div>
                        </div>
                        <p className="text-foreground font-medium">
                          {event.activity}
                        </p>
                      </div>
                      <ChevronDown
                        size={20}
                        className={`transition-transform ${
                          expandedId === event.id ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    {/* Expanded Details */}
                    {expandedId === event.id && (
                      <div className="mt-4 pt-4 border-t border-border space-y-3">
                        <p className="text-sm text-foreground">
                          {event.details}
                        </p>

                        {event.transport && (
                          <div className="bg-muted p-3 rounded-lg space-y-2">
                            <p className="font-semibold text-sm text-foreground">
                              🚇 交通信息
                            </p>
                            <div className="text-sm text-muted-foreground space-y-1">
                              <p>
                                <span className="font-medium">方式：</span>
                                {event.transport.method}
                              </p>
                              <p>
                                <span className="font-medium">耗时：</span>
                                {event.transport.duration}
                              </p>
                              <p>
                                <span className="font-medium">费用：</span>
                                {event.transport.cost}
                              </p>
                              {event.transport.notes && (
                                <p>
                                  <span className="font-medium">备注：</span>
                                  {event.transport.notes}
                                </p>
                              )}
                            </div>
                          </div>
                        )}

                        {event.notes && (
                          <div className="bg-accent/10 p-3 rounded-lg">
                            <p className="text-sm text-foreground">
                              <span className="font-semibold">💡 提示：</span>
                              {event.notes}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* February 15 */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-display font-bold">
                15
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                2 月 15 日
              </h3>
              <span className="text-sm text-muted-foreground ml-auto">
                前往澳门
              </span>
            </div>

            <div className="space-y-4 pl-6 border-l-2 border-secondary">
              {eventsByDate["2026-02-15"].map((event) => (
                <div key={event.id} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-8 top-2 w-4 h-4 rounded-full bg-secondary border-4 border-white" />

                  {/* Event Card */}
                  <Card
                    className={`p-4 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      expandedId === event.id ? "border-secondary" : ""
                    }`}
                    onClick={() => toggleExpand(event.id)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl">{event.icon}</span>
                          <div>
                            <p className="font-display font-bold text-lg text-foreground">
                              {event.time}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {event.location}
                            </p>
                          </div>
                        </div>
                        <p className="text-foreground font-medium">
                          {event.activity}
                        </p>
                      </div>
                      <ChevronDown
                        size={20}
                        className={`transition-transform ${
                          expandedId === event.id ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    {/* Expanded Details */}
                    {expandedId === event.id && (
                      <div className="mt-4 pt-4 border-t border-border space-y-3">
                        <p className="text-sm text-foreground">
                          {event.details}
                        </p>

                        {event.transport && (
                          <div className="bg-muted p-3 rounded-lg space-y-2">
                            <p className="font-semibold text-sm text-foreground">
                              🚇 交通信息
                            </p>
                            <div className="text-sm text-muted-foreground space-y-1">
                              <p>
                                <span className="font-medium">方式：</span>
                                {event.transport.method}
                              </p>
                              <p>
                                <span className="font-medium">耗时：</span>
                                {event.transport.duration}
                              </p>
                              <p>
                                <span className="font-medium">费用：</span>
                                {event.transport.cost}
                              </p>
                              {event.transport.notes && (
                                <p>
                                  <span className="font-medium">备注：</span>
                                  {event.transport.notes}
                                </p>
                              )}
                            </div>
                          </div>
                        )}

                        {event.notes && (
                          <div className="bg-accent/10 p-3 rounded-lg">
                            <p className="text-sm text-foreground">
                              <span className="font-semibold">💡 提示：</span>
                              {event.notes}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
