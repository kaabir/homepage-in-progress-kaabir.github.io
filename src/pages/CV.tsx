import { Download, GraduationCap, Briefcase, Award, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const education = [
  {
    degree: "Ph.D. in Computer Science",
    institution: "Your University",
    location: "City, Country",
    period: "2020 - Present",
    description: "Research focus on machine learning and natural language processing. Advisor: Prof. Example Name",
  },
  {
    degree: "M.S. in Computer Science",
    institution: "Another University",
    location: "City, Country",
    period: "2018 - 2020",
    description: "Thesis: 'Advanced Methods for Neural Network Optimization'",
  },
  {
    degree: "B.S. in Computer Science",
    institution: "Undergraduate University",
    location: "City, Country",
    period: "2014 - 2018",
    description: "Graduated with honors. Minor in Mathematics.",
  },
];

const experience = [
  {
    title: "Research Intern",
    company: "Google Research",
    location: "Mountain View, CA",
    period: "Summer 2023",
    description: "Worked on large language models and their applications to scientific discovery.",
  },
  {
    title: "Research Intern",
    company: "Meta AI",
    location: "Menlo Park, CA",
    period: "Summer 2022",
    description: "Developed efficient transformer architectures for speech recognition.",
  },
  {
    title: "Teaching Assistant",
    company: "Your University",
    location: "City, Country",
    period: "2020 - 2022",
    description: "TA for Introduction to Machine Learning and Deep Learning courses.",
  },
];

const awards = [
  { title: "Best Paper Award", venue: "Conference Name 2024", year: 2024 },
  { title: "Outstanding Graduate Student Award", venue: "Your University", year: 2023 },
  { title: "Research Fellowship", venue: "Funding Organization", year: 2022 },
  { title: "Dean's List", venue: "Undergraduate University", year: "2014-2018" },
];

const skills = {
  "Programming Languages": ["Python", "PyTorch", "TensorFlow", "JAX", "C++", "JavaScript"],
  "Machine Learning": ["Deep Learning", "NLP", "Computer Vision", "Reinforcement Learning"],
  "Tools & Platforms": ["Git", "Docker", "Linux", "AWS", "GCP", "Weights & Biases"],
  Languages: ["English (Native)", "Spanish (Intermediate)", "Mandarin (Basic)"],
};

export default function CV() {
  return (
    <div className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-4">Curriculum Vitae</h1>
            <p className="text-lg text-muted-foreground">
              A summary of my academic background, experience, and achievements.
            </p>
          </div>
          <Button size="lg" className="w-fit">
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </Button>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {education.map((edu, index) => (
                  <div key={edu.degree}>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
                      <div>
                        <h3 className="font-semibold">{edu.degree}</h3>
                        <p className="text-muted-foreground">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground">{edu.location}</p>
                      </div>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{edu.description}</p>
                    {index < education.length - 1 && <Separator className="mt-6" />}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Experience */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={`${exp.title}-${exp.company}`}>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
                      <div>
                        <h3 className="font-semibold">{exp.title}</h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.location}</p>
                      </div>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
                    {index < experience.length - 1 && <Separator className="mt-6" />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Awards */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Awards & Honors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {awards.map((award) => (
                    <li key={award.title} className="border-l-2 border-primary/30 pl-4">
                      <p className="font-medium text-sm">{award.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {award.venue}, {award.year}
                      </p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5 text-primary" />
                  Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="font-medium text-sm mb-2">{category}</h4>
                    <div className="flex flex-wrap gap-1">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
