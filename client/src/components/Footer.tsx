import { Github, Twitter, Mail } from "lucide-react";
import { SiDiscord, SiYoutube } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-tech font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              李泓德 TECH BLOG
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              探索遊戲世界與科技前沿，分享最新評測與深度分析。
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" data-testid="button-social-github">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="button-social-twitter">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="button-social-discord">
                <SiDiscord className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="button-social-youtube">
                <SiYoutube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">快速連結</h4>
            <nav className="flex flex-col gap-2 text-sm">
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-home">
                首頁
              </a>
              <a href="/category/gaming" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-gaming">
                遊戲
              </a>
              <a href="/category/tech" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-tech">
                科技
              </a>
              <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-about">
                關於我
              </a>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">訂閱更新</h4>
            <p className="text-sm text-muted-foreground">
              訂閱電子報，第一時間收到最新文章通知
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="你的電子郵件"
                className="flex-1"
                data-testid="input-newsletter"
              />
              <Button data-testid="button-subscribe">訂閱</Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2025 李泓德. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
