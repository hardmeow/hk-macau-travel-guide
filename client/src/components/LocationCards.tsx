import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { locations } from "@/data/itineraryData";
import { MapPin, Clock, Phone } from "lucide-react";

export default function LocationCards() {
  const restaurants = locations.filter((l) => l.category === "restaurant");
  const shopping = locations.filter((l) => l.category === "shopping");

  const LocationCard = ({ location }: { location: typeof locations[0] }) => (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      {/* Placeholder Image */}
      <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-4xl">
        {location.category === "restaurant" ? "🍽️" : "🛍️"}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-lg font-bold text-foreground mb-2">
          {location.name}
        </h3>

        {/* Address */}
        <div className="flex gap-2 mb-3 text-sm">
          <MapPin size={16} className="text-primary flex-shrink-0 mt-0.5" />
          <p className="text-foreground">{location.address}</p>
        </div>

        {/* Hours */}
        <div className="flex gap-2 mb-3 text-sm">
          <Clock size={16} className="text-primary flex-shrink-0 mt-0.5" />
          <p className="text-foreground">{location.hours}</p>
        </div>

        {/* Phone */}
        <div className="flex gap-2 mb-4 text-sm">
          <Phone size={16} className="text-primary flex-shrink-0 mt-0.5" />
          <a
            href={`tel:${location.phone}`}
            className="text-primary hover:underline"
          >
            {location.phone}
          </a>
        </div>

        {/* MTR Info */}
        <div className="bg-muted p-3 rounded-lg mb-4 text-sm">
          <p className="font-semibold text-foreground mb-1">🚇 地铁信息</p>
          <p className="text-muted-foreground">
            {location.nearestMTR.station} {location.nearestMTR.exit}
          </p>
          <p className="text-muted-foreground">
            步行 {location.nearestMTR.walkingTime}
          </p>
        </div>

        {/* Recommendations */}
        <div className="mb-4 flex-1">
          <p className="font-semibold text-foreground text-sm mb-2">
            {location.category === "restaurant" ? "🍜 推荐菜品" : "🎁 推荐产品"}
          </p>
          <div className="flex flex-wrap gap-2">
            {location.recommendations.map((rec, index) => (
              <span
                key={index}
                className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
              >
                {rec}
              </span>
            ))}
          </div>
        </div>

        {/* Notes */}
        {location.notes && (
          <p className="text-xs text-muted-foreground mb-4 bg-accent/10 p-2 rounded">
            💡 {location.notes}
          </p>
        )}

        {/* Action Button */}
        <Button
          className="w-full bg-primary hover:bg-blue-800 text-white"
          onClick={() => {
            const mapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(location.name)}+${encodeURIComponent(location.address)}`;
            window.open(mapsUrl, "_blank");
          }}
        >
          📍 获取方向
        </Button>
      </div>
    </Card>
  );

  return (
    <section id="locations" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            地点推荐
          </h2>
          <p className="text-lg text-muted-foreground">
            精选餐饮与购物地点详细信息
          </p>
        </div>

        {/* Restaurants */}
        <div className="mb-16">
          <h3 className="font-display text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
            <span className="text-3xl">🍽️</span>
            餐饮推荐
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </div>

        {/* Shopping */}
        <div>
          <h3 className="font-display text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
            <span className="text-3xl">🛍️</span>
            购物指南
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shopping.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
