import { useState } from "react";
import { Mail, MapPin, Send, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  { name: "Google Scholar", href: "#", icon: "🎓" },
  { name: "ORCID", href: "#", icon: "📗" },
  { name: "GitHub", href: "https://github.com", icon: "💻" },
  { name: "Twitter/X", href: "https://twitter.com", icon: "🐦" },
  { name: "LinkedIn", href: "https://linkedin.com", icon: "💼" },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    // In production, replace with actual form service (Formspree, EmailJS, etc.)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            I'm always happy to discuss research collaborations, speaking opportunities, 
            or just chat about interesting problems in AI. Feel free to reach out!
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" /> Send Message
                    </>
                  )}
                </Button>
              </form>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                Note: This form is for demonstration. To make it functional, 
                integrate with a service like Formspree or EmailJS.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Direct Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:your.email@university.edu"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      your.email@university.edu
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Office</p>
                    <p className="text-muted-foreground">
                      Room 123, Computer Science Building
                      <br />
                      Your University
                      <br />
                      City, State 12345
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Academic Profiles */}
            <Card>
              <CardHeader>
                <CardTitle>Academic Profiles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg border hover:border-primary hover:bg-accent/50 transition-colors"
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-xl">{link.icon}</span>
                        <span className="font-medium">{link.name}</span>
                      </span>
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="bg-gradient-to-br from-primary/5 to-purple-500/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Office Hours</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  I hold virtual office hours for prospective students and collaborators.
                </p>
                <p className="text-sm">
                  <strong>When:</strong> Fridays, 2:00 PM - 4:00 PM (EST)
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Please email me in advance to schedule a meeting.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
