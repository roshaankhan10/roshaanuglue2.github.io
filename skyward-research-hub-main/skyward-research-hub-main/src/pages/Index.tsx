import { useRef } from "react";
import { HeroSection } from "@/components/research/HeroSection";
import { Navigation } from "@/components/research/Navigation";
import { SectionCard } from "@/components/research/SectionCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, FileText, Image, User, Mail, MapPin, Calendar, ExternalLink } from "lucide-react";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const datasetsRef = useRef<HTMLDivElement>(null);
  const papersRef = useRef<HTMLDivElement>(null);
  const postersRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    const refs = {
      hero: heroRef,
      about: aboutRef,
      datasets: datasetsRef,
      papers: papersRef,
      posters: postersRef,
    };
    
    const targetRef = refs[sectionId as keyof typeof refs];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSections = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Sample data - replace with your actual research materials
  const datasets = [
    {
      name: "Primary Dataset Collection",
      type: "CSV",
      size: "2.3 MB",
      description: "Main dataset containing experimental results and observations from the research study.",
      downloadUrl: "#",
      viewUrl: "#"
    },
    {
      name: "Supplementary Data",
      type: "JSON",
      size: "856 KB",
      description: "Additional data supporting the primary research findings and methodology.",
      downloadUrl: "#"
    }
  ];

  const papers = [
    {
      name: "Research Paper Title",
      type: "PDF",
      size: "1.2 MB",
      description: "Comprehensive research paper detailing methodology, findings, and implications of the study.",
      downloadUrl: "#",
      viewUrl: "#"
    },
    {
      name: "Conference Abstract",
      type: "PDF",
      size: "245 KB",
      description: "Abstract submitted to international conference highlighting key research outcomes.",
      downloadUrl: "#"
    }
  ];

  const posters = [
    {
      name: "Conference Poster 2024",
      type: "PDF",
      size: "5.8 MB",
      description: "Visual presentation of research findings presented at the academic conference.",
      downloadUrl: "#",
      viewUrl: "#"
    },
    {
      name: "Research Slides",
      type: "PPTX",
      size: "12.4 MB",
      description: "Detailed presentation slides covering all aspects of the research project.",
      downloadUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation onNavigateToSection={scrollToSection} />
      
      {/* Hero Section */}
      <div ref={heroRef}>
        <HeroSection
          title="Academic Research"
          subtitle="Dashboard"
          description="Explore comprehensive research materials, datasets, and publications from our academic study. Access papers, data files, and visual presentations in an organized, user-friendly interface."
          onScrollToSections={scrollToSections}
        />
      </div>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 bg-section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-academic-text mb-6">About This Research</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              This research project explores innovative methodologies and presents comprehensive findings 
              that contribute to the academic understanding of our field. All materials are organized 
              for easy access and review by the research community.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Research Overview */}
            <Card className="shadow-card border-border/50">
              <CardHeader className="bg-gradient-to-br from-primary/5 to-primary/10">
                <CardTitle className="text-2xl font-bold text-academic-text flex items-center space-x-3">
                  <User className="w-8 h-8 text-primary" />
                  <span>Research Overview</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Calendar className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-academic-text">Duration</h4>
                      <p className="text-muted-foreground">2023 - 2024</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-academic-text">Institution</h4>
                      <p className="text-muted-foreground">Academic Research Institution</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-academic-text">Contact</h4>
                      <p className="text-muted-foreground">researcher@institution.edu</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Objectives */}
            <Card className="shadow-card border-border/50">
              <CardHeader className="bg-gradient-to-br from-accent/20 to-accent/30">
                <CardTitle className="text-2xl font-bold text-academic-text">Key Objectives</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">
                      Investigate novel approaches to address current research challenges
                    </p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">
                      Develop comprehensive datasets for future research applications
                    </p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">
                      Contribute to academic knowledge through peer-reviewed publications
                    </p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">
                      Share findings with the broader research community
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Materials Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-academic-text mb-6">Research Materials</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access all research materials including datasets, publications, and presentations
            </p>
          </div>

          <div className="space-y-16">
            {/* Datasets Section */}
            <div ref={datasetsRef}>
              <SectionCard
                title="Datasets"
                description="Comprehensive data collections from our research study. Download CSV files, JSON datasets, and supplementary materials."
                icon={Database}
                files={datasets}
                gradient="from-blue-50 to-blue-100/50"
              />
            </div>

            {/* Papers Section */}
            <div ref={papersRef}>
              <SectionCard
                title="Papers & Publications"
                description="Academic papers, conference submissions, and peer-reviewed publications resulting from this research."
                icon={FileText}
                files={papers}
                gradient="from-green-50 to-green-100/50"
              />
            </div>

            {/* Posters Section */}
            <div ref={postersRef}>
              <SectionCard
                title="Posters & Presentations"
                description="Visual presentations, conference posters, and slide decks showcasing research findings and methodology."
                icon={Image}
                files={posters}
                gradient="from-purple-50 to-purple-100/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-academic-bg border-t border-border/30 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-academic-text">Academic Research Dashboard</h3>
            <p className="text-muted-foreground">
              For questions about this research or to request additional materials, please contact the research team.
            </p>
            <div className="flex justify-center items-center space-x-4 text-sm text-muted-foreground">
              <span>© 2024 Research Project</span>
              <span>•</span>
              <span>Academic Institution</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;