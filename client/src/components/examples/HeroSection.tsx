import HeroSection from '../HeroSection';
import heroImage from '@assets/generated_images/Cyberpunk_hero_background_image_821933e7.png';

export default function HeroSectionExample() {
  return (
    <div className="p-8 bg-background">
      <HeroSection
        title="次世代遊戲引擎革命：虛幻引擎 5.5 深度解析"
        excerpt="探索最新的遊戲開發技術，了解 Nanite 虛擬幾何體和 Lumen 全域光照如何改變遊戲畫面的未來"
        category="遊戲"
        date="2025-01-15"
        readTime="8 分鐘閱讀"
        imageUrl={heroImage}
        articleId="1"
      />
    </div>
  );
}
