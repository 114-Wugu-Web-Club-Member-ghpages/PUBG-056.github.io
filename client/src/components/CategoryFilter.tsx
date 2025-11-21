import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CategoryFilterProps {
  categories: { name: string; count: number }[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <Button
        variant={activeCategory === "全部" ? "default" : "outline"}
        size="sm"
        onClick={() => onCategoryChange("全部")}
        data-testid="button-category-all"
        className="gap-2"
      >
        全部
        <Badge variant="secondary" className="ml-1 text-xs">
          {categories.reduce((sum, cat) => sum + cat.count, 0)}
        </Badge>
      </Button>
      {categories.map((category) => (
        <Button
          key={category.name}
          variant={activeCategory === category.name ? "default" : "outline"}
          size="sm"
          onClick={() => onCategoryChange(category.name)}
          data-testid={`button-category-${category.name}`}
          className="gap-2"
        >
          {category.name}
          <Badge variant="secondary" className="ml-1 text-xs">
            {category.count}
          </Badge>
        </Button>
      ))}
    </div>
  );
}
