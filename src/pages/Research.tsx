import { ExternalLink, FileText, Code, Globe, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects, type Project } from "@/data/projects";

const statusColors: Record<Project["status"], string> = {
  active: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/30",
  completed: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30",
  upcoming: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/30",
};

const statusLabels: Record<Project["status"], string> = {
  active: "Active",
  completed: "Completed",
  upcoming: "Upcoming",
};

export default function Research() {
  const activeProjects = projects.filter((p) => p.status === "active");
  const completedProjects = projects.filter((p) => p.status === "completed");
  const upcomingProjects = projects.filter((p) => p.status === "upcoming");

  return (
    <div className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Research</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            My research focuses on developing machine learning methods that are efficient, 
            interpretable, and beneficial for society. Here are some of my current and past projects.
          </p>
        </div>

        {/* Research Areas Overview */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Research Areas</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { title: "Natural Language Processing", description: "Building systems that understand and generate human language" },
              { title: "Computer Vision", description: "Developing efficient visual recognition and understanding systems" },
              { title: "AI for Science", description: "Applying ML to accelerate scientific discovery" },
            ].map((area) => (
              <Card key={area.title} className="bg-gradient-to-br from-primary/5 to-purple-500/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{area.title}</h3>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Active Projects */}
        {activeProjects.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Current Projects</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {activeProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* Upcoming Projects */}
        {upcomingProjects.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Upcoming Projects</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {upcomingProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* Completed Projects */}
        {completedProjects.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Completed Projects</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {completedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="h-full hover-lift transition-all duration-300">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <Badge variant="outline" className={statusColors[project.status]}>
            {statusLabels[project.status]}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">
          {project.longDescription || project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {project.collaborators && project.collaborators.length > 0 && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>Collaborators: {project.collaborators.join(", ")}</span>
          </div>
        )}

        {project.links && (
          <div className="flex flex-wrap gap-2 pt-2">
            {project.links.paper && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.links.paper} target="_blank" rel="noopener noreferrer">
                  <FileText className="h-3 w-3 mr-1" /> Paper
                </a>
              </Button>
            )}
            {project.links.code && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.links.code} target="_blank" rel="noopener noreferrer">
                  <Code className="h-3 w-3 mr-1" /> Code
                </a>
              </Button>
            )}
            {project.links.demo && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3 w-3 mr-1" /> Demo
                </a>
              </Button>
            )}
            {project.links.website && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.links.website} target="_blank" rel="noopener noreferrer">
                  <Globe className="h-3 w-3 mr-1" /> Website
                </a>
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
