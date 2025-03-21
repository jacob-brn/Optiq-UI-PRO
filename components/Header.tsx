import Link from "next/link";
import { Button } from "./ui/button";
import { AlignLeft, ChevronRight, Home, Info, Mail, Star } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-transparent [&_svg]:size-5"
        >
          <AlignLeft />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="text-left">
          <SheetTitle className="text-xl font-bold flex flex-row gap-x-2">
            Optiq UI Pro
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-8 pl-4">
          <Link href="/" className="flex items-center gap-2 text-lg">
            <Home className="size-5 text-muted-foreground" />
            Home
          </Link>
          <Link href="/about" className="flex items-center gap-2 text-lg">
            <Star className="size-5 text-muted-foreground" />
            Templates
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

const Header = () => {
  return (
    <header className="fixed top-0 z-[20] w-full border-b border-transparent bg-transparent shadow-sm backdrop-blur-md">
      <div className="px-4 md:px-8 flex h-16 max-w-7xl items-center mx-auto container">
        <div className="mr-6 hidden md:flex">
          <Link href={"/"} className="text-xl font-bold flex flex-row gap-x-2">
            Optiq UI Pro
          </Link>
        </div>
        <nav className="items-center space-x-6 mr-6 text-sm font-medium hidden md:flex">
          <Link
            href={"/templates"}
            className="transition-colors hover:text-foreground/80 text-foreground/60 hidden sm:flex space-x-1"
          >
            Templates
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2 sm:gap-2 md:justify-end">
          <Link href={"/login"}>
            <Button
              variant={"outline"}
              size={"default"}
              className="text-sm font-medium px-4 group gap-x-0.5 hidden md:flex"
            >
              Get Started
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-300" />
            </Button>
          </Link>
        </div>

        <div className="w-full flex md:hidden">
          <MobileNav />
          <div className="flex flex-1 items-center justify-end gap-2 md:justify-end">
            <Link href={"/login"}>
              <Button
                variant={"outline"}
                size={"default"}
                className="text-sm font-medium px-4 flex group gap-x-0.5"
              >
                Get Started
                <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
