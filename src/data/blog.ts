export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  tags: string[];
  readTime: number;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    slug: "paper-accepted-neurips-2024",
    title: "Paper Accepted at NeurIPS 2024!",
    excerpt: "Excited to share that our paper on efficient transformer architectures has been accepted at NeurIPS 2024.",
    content: `I'm thrilled to announce that our paper "Efficient Transformer Architectures for Long Document Processing" has been accepted at NeurIPS 2024!

This paper represents over a year of research into making transformer models more efficient for processing long documents. Our key contributions include:

1. **A novel attention mechanism** that reduces computational complexity from O(n²) to O(n log n)
2. **A memory-efficient implementation** that allows processing documents up to 100x longer than standard transformers
3. **Extensive experiments** on multiple benchmarks showing state-of-the-art results

I want to thank my amazing collaborators and advisors who made this work possible. Special thanks to the anonymous reviewers for their constructive feedback.

Looking forward to presenting this work in Vancouver!`,
    date: "2024-09-15",
    category: "Publications",
    tags: ["NeurIPS", "Transformers", "Research"],
    readTime: 3,
    featured: true,
  },
  {
    id: "post-2",
    slug: "research-internship-google",
    title: "Starting Research Internship at Google",
    excerpt: "I'll be joining Google Research this summer to work on large language models for scientific discovery.",
    content: `I'm excited to announce that I'll be joining Google Research as a research intern this summer!

I'll be working with the Language Understanding team on developing large language models that can assist researchers in scientific discovery. This includes:

- Analyzing scientific literature at scale
- Identifying patterns and connections across publications
- Generating hypotheses for new research directions

This opportunity aligns perfectly with my research interests in NLP and AI for science. I can't wait to learn from the amazing researchers at Google and contribute to this important work.

Stay tuned for updates on my experience!`,
    date: "2024-04-01",
    category: "News",
    tags: ["Internship", "Google", "LLMs"],
    readTime: 2,
  },
  {
    id: "post-3",
    slug: "tips-phd-applications",
    title: "Tips for PhD Applications in CS",
    excerpt: "Sharing my experience and advice for prospective PhD students applying to computer science programs.",
    content: `As I approach the end of my PhD journey, I wanted to share some advice for prospective students applying to PhD programs in computer science.

## Start Early

The application process is time-consuming. I recommend starting at least 6 months before deadlines. This gives you time to:
- Research potential advisors and programs
- Prepare for the GRE (if required)
- Request letters of recommendation
- Write and refine your statement of purpose

## Research Experience Matters

Having research experience is crucial for competitive PhD applications. If you're an undergraduate, seek out research opportunities with professors at your institution. Consider summer research programs like REUs.

## The Statement of Purpose

Your SOP should tell a story about your research journey. Include:
- What sparked your interest in research
- Your research experience and contributions
- Why you want to pursue a PhD
- Specific faculty you want to work with and why

## Reaching Out to Faculty

It's acceptable (and often encouraged) to email faculty before applying. Keep emails brief, show genuine interest in their work, and explain how your interests align.

Good luck with your applications!`,
    date: "2023-11-15",
    category: "Advice",
    tags: ["PhD", "Applications", "Advice"],
    readTime: 5,
  },
  {
    id: "post-4",
    slug: "new-collaboration-mit",
    title: "New Research Collaboration with MIT",
    excerpt: "Announcing a new collaboration with MIT researchers on AI for climate science.",
    content: `I'm thrilled to announce a new research collaboration with Professor Jane Doe at MIT!

We'll be working together on applying machine learning to improve climate models and weather prediction systems. This project combines my expertise in efficient deep learning with the climate science domain knowledge of the MIT team.

The collaboration is funded by a grant from the National Science Foundation and will run for the next two years.

More details coming soon!`,
    date: "2024-12-01",
    category: "News",
    tags: ["Collaboration", "MIT", "Climate AI"],
    readTime: 2,
  },
];
