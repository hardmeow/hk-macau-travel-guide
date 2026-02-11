import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo & Title */}
        <div className="flex items-center gap-3">
          <div className="text-2xl">✈️</div>
          <div className="hidden sm:block">
            <h1 className="font-display text-xl font-bold text-primary">
              港澳行程
            </h1>
            <p className="text-xs text-muted-foreground">2026 年 2 月</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#itinerary"
            className="text-sm font-medium text-foreground hover:text-primary transition"
          >
            行程时间轴
          </a>
          <a
            href="#metro"
            className="text-sm font-medium text-foreground hover:text-primary transition"
          >
            地铁指南
          </a>
          <a
            href="#transport"
            className="text-sm font-medium text-foreground hover:text-primary transition"
          >
            去澳门
          </a>
          <a
            href="#locations"
            className="text-sm font-medium text-foreground hover:text-primary transition"
          >
            地点推荐
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-card border-t border-border py-4 px-4 space-y-3">
          <a
            href="#itinerary"
            className="block text-sm font-medium text-foreground hover:text-primary transition py-2"
            onClick={() => setIsOpen(false)}
          >
            行程时间轴
          </a>
          <a
            href="#metro"
            className="block text-sm font-medium text-foreground hover:text-primary transition py-2"
            onClick={() => setIsOpen(false)}
          >
            地铁指南
          </a>
          <a
            href="#transport"
            className="block text-sm font-medium text-foreground hover:text-primary transition py-2"
            onClick={() => setIsOpen(false)}
          >
            去澳门
          </a>
          <a
            href="#locations"
            className="block text-sm font-medium text-foreground hover:text-primary transition py-2"
            onClick={() => setIsOpen(false)}
          >
            地点推荐
          </a>
        </nav>
      )}
    </header>
  );
}
