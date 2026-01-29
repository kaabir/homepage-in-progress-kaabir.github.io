import { Link } from "react-router-dom";
import { ArrowRight, FileText, Beaker, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const socialLinks = [
  { name: "Google Scholar", href: "#", icon: "🎓" },
  { name: "ORCID", href: "#", icon: "📗" },
  { name: "GitHub", href: "#", icon: "💻" },
  { name: "Twitter/X", href: "#", icon: "🐦" },
];

const quickLinks = [
  { name: "Publications", path: "/publications", icon: FileText, description: "View my research papers and articles" },
  { name: "Research", path: "/research", icon: Beaker, description: "Explore my ongoing projects" },
  { name: "Contact", path: "/contact", icon: Mail, description: "Get in touch with me" },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-purple-500/5">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-primary font-medium">PhD Student / Postdoctoral Researcher</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                  Hi, I'm <span className="gradient-text">Your Name</span>
                </h1>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                I'm a researcher at <strong>Your University</strong>, working on 
                cutting-edge problems in <strong>Your Research Area</strong>. My work 
                focuses on understanding and developing novel approaches to solve 
                challenging problems in the field.
              </p>

              <div className="space-y-3">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Research Interests
                </h2>
                <div className="flex flex-wrap gap-2">
                  {["Machine Learning", "Natural Language Processing", "Computer Vision", "Deep Learning"].map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild size="lg">
                  <Link to="/publications">
                    View Publications <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/cv">
                    Download CV
                  </Link>
                </Button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-primary to-purple-500 p-1">
                  <div className="w-full h-full rounded-full bg-muted flex items-center justify-center overflow-hidden">
                    {/* Replace with your actual image */}
                    <span className="text-6xl">👨‍🔬</span>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-6 md:grid-cols-3">
            {quickLinks.map((link) => (
              <Link key={link.path} to={link.path} className="group">
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50 hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <link.icon className="h-6 w-6" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold group-hover:text-primary transition-colors">
                          {link.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {link.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Profiles Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold mb-8">Find Me On</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-background rounded-lg border hover:border-primary hover:shadow-md transition-all"
              >
                <span className="text-xl">{link.icon}</span>
                <span className="font-medium">{link.name}</span>
                <ExternalLink className="h-3 w-3 text-muted-foreground" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Preview */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Latest News</h2>
            <Button asChild variant="ghost">
              <Link to="/blog">
                View all <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="hover-lift transition-all duration-300">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-2">January 2025</p>
                <h3 className="font-semibold mb-2">Paper Accepted at Top Conference</h3>
                <p className="text-sm text-muted-foreground">
                  Excited to share that our paper on neural network optimization has been accepted...
                </p>
              </CardContent>
            </Card>
            <Card className="hover-lift transition-all duration-300">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-2">December 2024</p>
                <h3 className="font-semibold mb-2">New Research Collaboration</h3>
                <p className="text-sm text-muted-foreground">
                  Starting an exciting new collaboration with researchers at MIT on...
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
