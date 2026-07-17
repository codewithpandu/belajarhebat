import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";

export function Navbar() {
  return (
    <nav className="fixed w-full flex justify-center z-999 ">
      <NavigationMenu className="bg-my-secondary/80 backdrop-blur-2xl rounded-2xl mt-4 ">
        <NavigationMenuList className="gap-1 p-2 font-semibold">
          <NavigationMenuItem>
            <NavigationMenuLink
              className="rounded-xl"
              render={<Link href="/">Home</Link>}
            />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="rounded-xl"
              render={<Link href="/products">Produk</Link>}
            />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
