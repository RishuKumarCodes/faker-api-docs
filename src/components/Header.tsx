import { Terminal, Github, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { useSidebar } from "@/components/ui/sidebar";

export function Header() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="sticky top-0 z-50 w-full lg:bg-transparent lg:backdrop-filter-none bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-6 flex h-14 items-center justify-between">
        <div className="mr-4 flex">
          <Button
            variant="ghost"
            size="default"
            className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            onClick={toggleSidebar}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
          <a className="mr-6 flex items-center space-x-2" href="/">
            <Terminal className="h-6 w-6 hidden sm:inline-block" />
            <span className=" font-bold ">faker-api</span>
          </a>
        </div>
        <div>
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Search can be added here later */}
          </div>
          <nav className="flex items-center space-x-1">
            <Button variant="ghost" size="default" asChild>
              <a
                href="https://github.com/amandollar/faker-api"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-10 w-h-10" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
