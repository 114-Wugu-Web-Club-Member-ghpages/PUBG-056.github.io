import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ArticleCard from "@/components/ArticleCard";
import CategoryFilter from "@/components/CategoryFilter";
import Footer from "@/components/Footer";
import heroImage from '@assets/generated_images/Cyberpunk_hero_background_image_821933e7.png';
import gamingImage from '@assets/generated_images/Gaming_tech_article_thumbnail_f3456d32.png';
import aiImage from '@assets/generated_images/AI_technology_article_thumbnail_20d4d725.png';
import vrImage from '@assets/generated_images/VR_gaming_article_thumbnail_4b69aec5.png';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("全部");

  const categories = [
    { name: "遊戲", count: 12 },
    { name: "科技", count: 8 },
    { name: "評測", count: 15 },
  ];

  const articles = [
    {
      id: "1",
      title: "次世代遊戲引擎革命：虛幻引擎 5.5 深度解析",
      excerpt: "探索最新的遊戲開發技術，了解 Nanite 虛擬幾何體和 Lumen 全域光照如何改變遊戲畫面的未來。深入剖析技術細節與實際應用案例。",
      category: "遊戲",
      date: "2025-01-15",
      readTime: "8 分鐘",
      imageUrl: heroImage,
    },
    {
      id: "2",
      title: "RGB 機械鍵盤選購指南：2025 年度最佳推薦",
      excerpt: "從軸體選擇到燈效設定，完整解析如何挑選最適合你的機械鍵盤。包含 Cherry、Gateron 等主流品牌比較，讓你的打字體驗更上一層樓。",
      category: "科技",
      date: "2025-01-10",
      readTime: "6 分鐘",
      imageUrl: gamingImage,
    },
    {
      id: "3",
      title: "AI 晶片大戰：NVIDIA vs AMD 2025 最新對決",
      excerpt: "分析兩大 GPU 巨頭的最新產品線，從遊戲性能到 AI 運算能力，看看誰能在這場科技戰爭中勝出。完整評測與效能數據一次公開。",
      category: "科技",
      date: "2025-01-08",
      readTime: "10 分鐘",
      imageUrl: aiImage,
    },
    {
      id: "4",
      title: "Meta Quest 3 完整評測：VR 遊戲新紀元",
      excerpt: "最新一代 VR 頭戴裝置深度評測，從硬體規格到遊戲體驗，告訴你是否值得入手這款革命性產品。包含最佳遊戲推薦清單。",
      category: "評測",
      date: "2025-01-05",
      readTime: "12 分鐘",
      imageUrl: vrImage,
    },
    {
      id: "5",
      title: "2025 年最期待的獨立遊戲盤點",
      excerpt: "精選 10 款即將發售的獨立遊戲，從像素風格到 3D 開放世界，看看獨立開發者如何用創意顛覆遊戲產業的既有規則。",
      category: "遊戲",
      date: "2025-01-03",
      readTime: "7 分鐘",
      imageUrl: gamingImage,
    },
    {
      id: "6",
      title: "高刷新率螢幕完全指南：144Hz vs 240Hz",
      excerpt: "深入探討高刷新率顯示器的技術原理，分析不同刷新率對遊戲與日常使用的影響。幫助你找到最適合的螢幕選擇。",
      category: "評測",
      date: "2025-01-01",
      readTime: "9 分鐘",
      imageUrl: aiImage,
    },
  ];

  const filteredArticles = activeCategory === "全部"
    ? articles
    : articles.filter((article) => article.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 space-y-12">
          <HeroSection
            title={articles[0].title}
            excerpt={articles[0].excerpt}
            category={articles[0].category}
            date={articles[0].date}
            readTime={articles[0].readTime}
            imageUrl={articles[0].imageUrl}
            articleId={articles[0].id}
          />

          <div className="space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <h2 className="text-2xl font-bold font-tech">最新文章</h2>
              <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.slice(1).map((article) => (
                <ArticleCard key={article.id} {...article} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
