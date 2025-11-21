import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Calendar } from "lucide-react";
import { Link } from "wouter";

interface HeroSectionProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
  articleId: string;
}

export default function HeroSection({
  title,
  excerpt,
  category,
  date,
  readTime,
  imageUrl,
  articleId,
}: HeroSectionProps) {
  const categoryColors: Record<string, string> = {
    遊戲: "bg-primary text-primary-foreground",
    科技: "bg-accent text-accent-foreground",
    評測: "bg-chart-2 text-white",
  };

  return (
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden group">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      
      <div className="relative h-full flex flex-col justify-end p-8 md:p-12">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <Badge className={categoryColors[category] || "bg-primary"} data-testid={`badge-category-${category}`}>
              {category}
            </Badge>
            <Badge variant="outline" className="border-white/20 text-white bg-black/20 backdrop-blur-sm">
              精選文章
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white font-tech leading-tight" data-testid="text-hero-title">
            {title}
          </h1>
          
          <p className="text-lg text-white/90 leading-relaxed line-clamp-2" data-testid="text-hero-excerpt">
            {excerpt}
          </p>
          
          <div className="flex items-center gap-4 text-sm text-white/80">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span data-testid="text-hero-date">{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span data-testid="text-hero-readtime">{readTime}</span>
            </div>
          </div>
          
          <Link href={`/article/${articleId}`} data-testid="link-read-article">
            <Button size="lg" variant="default" className="mt-2">
              閱讀全文
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
