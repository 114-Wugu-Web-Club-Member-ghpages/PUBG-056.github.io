import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface SearchResult {
  id: string;
  title: string;
  category: string;
  excerpt: string;
}

interface SearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SearchModal({ open, onOpenChange }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const mockResults: SearchResult[] = [
    {
      id: "1",
      title: "次世代遊戲引擎革命：虛幻引擎 5.5 深度解析",
      category: "遊戲",
      excerpt: "探索最新的遊戲開發技術..."
    },
    {
      id: "2",
      title: "AI 晶片大戰：NVIDIA vs AMD 2025 最新對決",
      category: "科技",
      excerpt: "分析兩大GPU巨頭的最新產品..."
    },
  ];

  const filteredResults = searchQuery
    ? mockResults.filter(
        (result) =>
          result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          result.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl" data-testid="modal-search">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            搜尋文章
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="輸入關鍵字搜尋..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-testid="input-search-modal"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
                onClick={() => setSearchQuery("")}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          <div className="space-y-2 max-h-96 overflow-y-auto">
            {searchQuery && filteredResults.length === 0 && (
              <p className="text-center text-muted-foreground py-8">
                找不到相關文章
              </p>
            )}
            {filteredResults.map((result) => (
              <div
                key={result.id}
                className="p-4 rounded-md hover-elevate active-elevate-2 cursor-pointer border"
                onClick={() => {
                  console.log('Navigate to article:', result.id);
                  onOpenChange(false);
                }}
                data-testid={`search-result-${result.id}`}
              >
                <div className="flex items-start gap-3">
                  <Badge className="mt-1">{result.category}</Badge>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold mb-1">{result.title}</h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {result.excerpt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
