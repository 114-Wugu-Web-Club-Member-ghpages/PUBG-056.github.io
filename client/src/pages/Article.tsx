import { useRoute } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, Calendar, Share2, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import heroImage from '@assets/generated_images/Cyberpunk_hero_background_image_821933e7.png';

export default function Article() {
  const [, params] = useRoute("/article/:id");
  const articleId = params?.id;

  const article = {
    id: articleId || "1",
    title: "次世代遊戲引擎革命：虛幻引擎 5.5 深度解析",
    category: "遊戲",
    date: "2025-01-15",
    readTime: "8 分鐘",
    imageUrl: heroImage,
    content: `
虛幻引擎 5.5 代表著遊戲開發技術的重大突破，它引入了革命性的 Nanite 虛擬幾何體系統和 Lumen 全域光照技術。

## Nanite 技術深度解析

Nanite 是一個革命性的虛擬化幾何體系統，能夠即時渲染數十億個多邊形。這意味著開發者可以直接使用影視級別的高精度 3D 模型，而不需要擔心性能問題。

### 主要優勢

1. **無限細節**：不再需要手動創建 LOD（細節層次）模型
2. **即時渲染**：數十億多邊形的場景也能流暢運行
3. **提升效率**：大幅減少美術資源製作時間

## Lumen 全域光照

Lumen 提供完全動態的全域光照解決方案，無需烘焙光照貼圖。這讓場景中的光照能夠即時響應變化，創造更加真實的視覺效果。

### 技術特點

- 即時反射和間接光照
- 支援大型開放世界場景
- 無需預計算，開發流程更靈活

## 實際應用案例

許多 3A 級遊戲已經開始採用虛幻引擎 5.5，包括：

- **遊戲 A**：展現了 Nanite 在開放世界中的強大性能
- **遊戲 B**：利用 Lumen 創造震撼的光影效果
- **遊戲 C**：結合兩項技術達到前所未有的畫面品質

## 總結

虛幻引擎 5.5 不僅是技術的進步，更是遊戲開發範式的轉變。它讓獨立開發者也能創作出 3A 級別的視覺效果，降低了高品質遊戲開發的門檻。

對於玩家來說，這意味著未來我們將能體驗到更加逼真、更具沉浸感的遊戲世界。
    `,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <article className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <Link href="/" data-testid="link-back">
              <Button variant="ghost" className="gap-2 mb-4">
                <ArrowLeft className="h-4 w-4" />
                返回首頁
              </Button>
            </Link>

            <div className="relative w-full aspect-[21/9] rounded-lg overflow-hidden">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover"
                data-testid="img-article-hero"
              />
            </div>

            <div className="space-y-4">
              <Badge data-testid="badge-article-category">{article.category}</Badge>
              
              <h1 className="text-4xl font-bold font-tech leading-tight" data-testid="text-article-title">
                {article.title}
              </h1>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span data-testid="text-article-date">{article.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span data-testid="text-article-readtime">{article.readTime}</span>
                </div>
                <Button variant="ghost" size="sm" className="gap-2" data-testid="button-share">
                  <Share2 className="h-4 w-4" />
                  分享
                </Button>
              </div>
            </div>

            <Card className="p-8">
              <div 
                className="prose prose-slate dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content.split('\n').map(line => {
                  if (line.startsWith('## ')) {
                    return `<h2 class="text-2xl font-bold mt-8 mb-4">${line.slice(3)}</h2>`;
                  } else if (line.startsWith('### ')) {
                    return `<h3 class="text-xl font-semibold mt-6 mb-3">${line.slice(4)}</h3>`;
                  } else if (line.startsWith('- ')) {
                    return `<li class="ml-4">${line.slice(2)}</li>`;
                  } else if (line.trim() === '') {
                    return '<br />';
                  } else {
                    return `<p class="leading-relaxed mb-4">${line}</p>`;
                  }
                }).join('') }}
                data-testid="content-article"
              />
            </Card>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
