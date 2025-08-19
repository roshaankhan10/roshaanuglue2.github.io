import { Button } from "@/components/ui/button";
import { ArrowDown, BookOpen, Database, FileText, Presentation } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  onScrollToSections: () => void;
}

export const HeroSection = ({ title, subtitle, description, onScrollToSections }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-light/30 to-primary-light/20" />
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/20 rounded-full blur-2xl" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-6">
          {/* Research Icons */}
          <div className="flex justify-center space-x-6 mb-8">
            <div className="p-3 rounded-full bg-primary/10 shadow-card transition-academic hover:bg-primary/20">
              <Database className="w-6 h-6 text-primary" />
            </div>
            <div className="p-3 rounded-full bg-primary/10 shadow-card transition-academic hover:bg-primary/20">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div className="p-3 rounded-full bg-primary/10 shadow-card transition-academic hover:bg-primary/20">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <div className="p-3 rounded-full bg-primary/10 shadow-card transition-academic hover:bg-primary/20">
              <Presentation className="w-6 h-6 text-primary" />
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-academic-text">
            <span className="block">{title}</span>
            <span className="block text-primary mt-2">{subtitle}</span>
          </h1>

          {/* Description */}
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
            {description}
          </p>

          {/* CTA Button */}
          <div className="pt-8">
            <Button
              onClick={onScrollToSections}
              size="lg"
              className="bg-gradient-research text-white hover:opacity-90 transition-academic px-8 py-4 text-lg font-semibold shadow-academic border-0"
            >
              Explore Research Materials
              <ArrowDown className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};