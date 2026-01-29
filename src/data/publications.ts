export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: "journal" | "conference" | "preprint" | "thesis";
  abstract?: string;
  doi?: string;
  arxiv?: string;
  pdf?: string;
  code?: string;
  citations?: number;
  featured?: boolean;
}

export const publications: Publication[] = [
  {
    id: "pub-1",
    title: "A Novel Approach to Deep Learning for Natural Language Understanding",
    authors: ["Your Name", "Co-Author One", "Co-Author Two"],
    venue: "Neural Information Processing Systems (NeurIPS)",
    year: 2024,
    type: "conference",
    abstract: "We present a novel approach to deep learning that significantly improves performance on natural language understanding tasks...",
    doi: "10.1234/example.2024.001",
    arxiv: "2401.00001",
    code: "https://github.com/yourname/project",
    citations: 25,
    featured: true,
  },
  {
    id: "pub-2",
    title: "Efficient Transformer Architectures for Long Document Processing",
    authors: ["Your Name", "Another Author"],
    venue: "International Conference on Machine Learning (ICML)",
    year: 2024,
    type: "conference",
    abstract: "This paper introduces efficient transformer architectures that can process documents of unlimited length...",
    doi: "10.1234/example.2024.002",
    arxiv: "2403.00002",
    citations: 18,
    featured: true,
  },
  {
    id: "pub-3",
    title: "Understanding Attention Mechanisms in Vision Transformers",
    authors: ["Co-Author One", "Your Name", "Co-Author Three"],
    venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence",
    year: 2023,
    type: "journal",
    abstract: "We provide a comprehensive analysis of attention mechanisms in vision transformers...",
    doi: "10.1109/tpami.2023.001",
    citations: 42,
  },
  {
    id: "pub-4",
    title: "Self-Supervised Learning for Low-Resource Languages",
    authors: ["Your Name", "Collaborator A", "Collaborator B", "Collaborator C"],
    venue: "Association for Computational Linguistics (ACL)",
    year: 2023,
    type: "conference",
    abstract: "We propose a self-supervised learning framework specifically designed for low-resource languages...",
    doi: "10.18653/v1/2023.acl-long.001",
    arxiv: "2305.00003",
    code: "https://github.com/yourname/low-resource-ssl",
    citations: 31,
  },
  {
    id: "pub-5",
    title: "Multimodal Foundation Models: A Survey",
    authors: ["Your Name", "Survey Author"],
    venue: "arXiv preprint",
    year: 2024,
    type: "preprint",
    abstract: "This survey provides a comprehensive overview of multimodal foundation models...",
    arxiv: "2406.00004",
    citations: 8,
  },
  {
    id: "pub-6",
    title: "Robust Optimization for Neural Network Training",
    authors: ["Your Name"],
    venue: "University of Your University, PhD Thesis",
    year: 2022,
    type: "thesis",
    abstract: "This thesis presents novel optimization techniques for training deep neural networks...",
    pdf: "/thesis.pdf",
  },
];
