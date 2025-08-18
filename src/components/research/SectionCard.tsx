import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LucideIcon, Download, ExternalLink, Eye } from "lucide-react";

interface FileItem {
  name: string;
  type: string;
  size?: string;
  description?: string;
  downloadUrl?: string;
  viewUrl?: string;
}

interface SectionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  files: FileItem[];
  gradient?: string;
}

export const SectionCard = ({ title, description, icon: Icon, files, gradient = "from-primary/5 to-primary/10" }: SectionCardProps) => {
  return (
    <Card className="h-full shadow-card hover:shadow-academic transition-academic border-border/50 overflow-hidden">
      <CardHeader className={`bg-gradient-to-br ${gradient} border-b border-border/30`}>
        <div className="flex items-start space-x-4">
          <div className="p-3 rounded-xl bg-primary/10 shadow-sm">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-2xl font-bold text-academic-text mb-2">{title}</CardTitle>
            <CardDescription className="text-base text-muted-foreground leading-relaxed">
              {description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="space-y-4">
          {files.length > 0 ? (
            files.map((file, index) => (
              <div key={index} className="group p-4 rounded-lg border border-border/30 bg-accent/30 hover:bg-accent/50 transition-academic">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="font-semibold text-academic-text group-hover:text-primary transition-academic">
                        {file.name}
                      </h4>
                      <Badge variant="secondary" className="text-xs">
                        {file.type}
                      </Badge>
                      {file.size && (
                        <span className="text-sm text-muted-foreground">
                          {file.size}
                        </span>
                      )}
                    </div>
                    {file.description && (
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {file.description}
                      </p>
                    )}
                  </div>
                  
                  <div className="flex space-x-2 ml-4">
                    {file.viewUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="transition-academic hover:bg-primary hover:text-white"
                        onClick={() => window.open(file.viewUrl, '_blank')}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    )}
                    {file.downloadUrl && (
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary/90 text-white transition-academic"
                        onClick={() => window.open(file.downloadUrl, '_blank')}
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <Icon className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p>No files available yet</p>
              <p className="text-sm">Check back later for updates</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};