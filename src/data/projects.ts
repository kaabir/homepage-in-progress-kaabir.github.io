export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  tags: string[];
  status: "active" | "completed" | "upcoming";
  collaborators?: string[];
  links?: {
    paper?: string;
    code?: string;
    demo?: string;
    website?: string;
  };
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Large Language Models for Scientific Discovery",
    description: "Developing specialized language models that can assist researchers in analyzing scientific literature and generating hypotheses.",
    longDescription: "This project aims to create AI systems that can read and understand scientific papers, identify patterns across thousands of publications, and suggest novel research directions. We're particularly focused on making these tools useful for researchers in biology and chemistry.",
    tags: ["NLP", "LLMs", "Science AI", "Knowledge Graphs"],
    status: "active",
    collaborators: ["MIT", "Stanford University", "Google Research"],
    links: {
      paper: "/publications",
      code: "https://github.com/yourname/sci-llm",
    },
  },
  {
    id: "project-2",
    title: "Efficient Vision Transformers",
    description: "Creating transformer architectures that can process high-resolution images efficiently without sacrificing accuracy.",
    longDescription: "Vision Transformers have shown remarkable results but require significant computational resources. Our research focuses on developing efficient variants that can run on edge devices while maintaining competitive performance on benchmark tasks.",
    tags: ["Computer Vision", "Transformers", "Efficiency", "Edge AI"],
    status: "active",
    collaborators: ["NVIDIA Research"],
    links: {
      paper: "https://arxiv.org/abs/2401.00001",
      code: "https://github.com/yourname/efficient-vit",
      demo: "https://demo.example.com",
    },
  },
  {
    id: "project-3",
    title: "Multilingual Speech Recognition",
    description: "Building speech recognition systems that work across 100+ languages, with special focus on low-resource languages.",
    longDescription: "Current speech recognition systems work well for major languages but struggle with less-resourced languages. This project develops techniques to leverage cross-lingual transfer learning and self-supervised methods to build inclusive speech technology.",
    tags: ["Speech Recognition", "Multilingual", "Low-Resource", "Self-Supervised"],
    status: "completed",
    collaborators: ["Meta AI", "University of Edinburgh"],
    links: {
      paper: "https://aclanthology.org/2023.acl-long.001",
      code: "https://github.com/yourname/multilingual-asr",
    },
  },
  {
    id: "project-4",
    title: "AI for Climate Science",
    description: "Applying machine learning to improve climate models and weather prediction systems.",
    tags: ["Climate", "Scientific ML", "Simulation", "Physics-Informed"],
    status: "upcoming",
    collaborators: ["NOAA", "Climate Research Institute"],
  },
];
