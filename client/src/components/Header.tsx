import { Search, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { Link } from "wouter";

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle('dark', newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-3 py-2 cursor-pointer">
              <div className="text-2xl font-tech font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                李泓德
              </div>
              <div className="h-6 w-px bg-border" />
              <div className="text-sm text-muted-foreground">LI HONGDE</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" data-testid="link-nav-all">
              <Button variant="ghost" size="sm" className="text-sm">
                全部文章
              </Button>
            </Link>
            <Link href="/category/gaming" data-testid="link-nav-gaming">
              <Button variant="ghost" size="sm" className="text-sm">
                遊戲
              </Button>
            </Link>
            <Link href="/category/tech" data-testid="link-nav-tech">
              <Button variant="ghost" size="sm" className="text-sm">
                科技
              </Button>
            </Link>
            <Link href="/category/review" data-testid="link-nav-review">
              <Button variant="ghost" size="sm" className="text-sm">
                評測
              </Button>
            </Link>
            <Link href="/about" data-testid="link-nav-about">
              <Button variant="ghost" size="sm" className="text-sm">
                關於我
              </Button>
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              data-testid="button-search"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isSearchOpen && (
          <div className="py-4 border-t">
            <Input
              type="search"
              placeholder="搜尋文章..."
              className="max-w-md"
              data-testid="input-search"
              onChange={(e) => console.log('Search:', e.target.value)}
            />
          </div>
        )}
      </div>
    </header>
  );
}
