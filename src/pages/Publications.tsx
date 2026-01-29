import { useState, useMemo } from "react";
import { ExternalLink, FileText, Code, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { publications, type Publication } from "@/data/publications";

const typeLabels: Record<Publication["type"], string> = {
  journal: "Journal",
  conference: "Conference",
  preprint: "Preprint",
  thesis: "Thesis",
};

const typeColors: Record<Publication["type"], string> = {
  journal: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  conference: "bg-green-500/10 text-green-600 dark:text-green-400",
  preprint: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  thesis: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
};

export default function Publications() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const filteredPublications = useMemo(() => {
    return publications.filter((pub) => {
      const matchesSearch =
        searchQuery === "" ||
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.authors.some((a) => a.toLowerCase().includes(searchQuery.toLowerCase())) ||
        pub.venue.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesType = selectedType === null || pub.type === selectedType;

      return matchesSearch && matchesType;
    });
  }, [searchQuery, selectedType]);

  const publicationsByYear = useMemo(() => {
    const grouped: Record<number, Publication[]> = {};
    filteredPublications.forEach((pub) => {
      if (!grouped[pub.year]) {
        grouped[pub.year] = [];
      }
      grouped[pub.year].push(pub);
    });
    return Object.entries(grouped)
      .sort(([a], [b]) => Number(b) - Number(a))
      .map(([year, pubs]) => ({ year: Number(year), publications: pubs }));
  }, [filteredPublications]);

  const types = ["conference", "journal", "preprint", "thesis"] as const;

  return (
    <div className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Publications</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A collection of my research papers, journal articles, and other academic publications.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by title, author, or venue..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedType === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedType(null)}
            >
              All
            </Button>
            {types.map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedType(type)}
              >
                {typeLabels[type]}
              </Button>
            ))}
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-12">
          {publicationsByYear.map(({ year, publications: pubs }) => (
            <div key={year}>
              <h2 className="text-2xl font-bold mb-6 sticky top-20 bg-background py-2 border-b">
                {year}
              </h2>
              <div className="space-y-4">
                {pubs.map((pub) => (
                  <PublicationCard key={pub.id} publication={pub} />
                ))}
              </div>
            </div>
          ))}

          {filteredPublications.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No publications found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function PublicationCard({ publication }: { publication: Publication }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className={publication.featured ? "border-primary/50" : ""}>
      <CardContent className="p-6">
        <div className="flex flex-wrap items-start gap-2 mb-2">
          <Badge variant="secondary" className={typeColors[publication.type]}>
            {typeLabels[publication.type]}
          </Badge>
          {publication.featured && (
            <Badge variant="default" className="bg-primary">
              Featured
            </Badge>
          )}
          {publication.citations && (
            <Badge variant="outline" className="text-muted-foreground">
              {publication.citations} citations
            </Badge>
          )}
        </div>

        <h3 className="text-lg font-semibold mb-2 leading-tight">
          {publication.title}
        </h3>

        <p className="text-sm text-muted-foreground mb-2">
          {publication.authors.map((author, i) => (
            <span key={author}>
              {author === "Your Name" ? (
                <strong className="text-foreground">{author}</strong>
              ) : (
                author
              )}
              {i < publication.authors.length - 1 && ", "}
            </span>
          ))}
        </p>

        <p className="text-sm text-muted-foreground italic mb-4">
          {publication.venue}, {publication.year}
        </p>

        {publication.abstract && expanded && (
          <p className="text-sm text-muted-foreground mb-4 border-l-2 border-primary/30 pl-4">
            {publication.abstract}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-2">
          {publication.abstract && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Hide abstract" : "Show abstract"}
            </Button>
          )}
          {publication.doi && (
            <Button variant="outline" size="sm" asChild>
              <a
                href={`https://doi.org/${publication.doi}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-3 w-3 mr-1" /> DOI
              </a>
            </Button>
          )}
          {publication.arxiv && (
            <Button variant="outline" size="sm" asChild>
              <a
                href={`https://arxiv.org/abs/${publication.arxiv}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="h-3 w-3 mr-1" /> arXiv
              </a>
            </Button>
          )}
          {publication.pdf && (
            <Button variant="outline" size="sm" asChild>
              <a href={publication.pdf} target="_blank" rel="noopener noreferrer">
                <FileText className="h-3 w-3 mr-1" /> PDF
              </a>
            </Button>
          )}
          {publication.code && (
            <Button variant="outline" size="sm" asChild>
              <a href={publication.code} target="_blank" rel="noopener noreferrer">
                <Code className="h-3 w-3 mr-1" /> Code
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
