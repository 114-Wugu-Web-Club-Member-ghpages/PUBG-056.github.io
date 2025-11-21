import CategoryFilter from '../CategoryFilter';
import { useState } from 'react';

export default function CategoryFilterExample() {
  const [activeCategory, setActiveCategory] = useState("全部");
  
  const categories = [
    { name: "遊戲", count: 12 },
    { name: "科技", count: 8 },
    { name: "評測", count: 15 },
  ];

  return (
    <div className="p-8 bg-background">
      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={(cat) => {
          console.log('Category changed to:', cat);
          setActiveCategory(cat);
        }}
      />
    </div>
  );
}
