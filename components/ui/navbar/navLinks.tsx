// package
import Link from "next/link";
import { usePathname } from "next/navigation";

// ui
import NavDropdown from "@/ui/navbar/navDropdown";
import { NavLinkProps } from "@/ui/navbar/definition";

// lib
import { cn } from "@/lib/utils";

const links: NavLinkProps[] = [
  {
    id: "home",
    path: "/",
    name: "Menu",
  },
  {
    id: "shop",
    path: "/shop",
    name: "Compra",
    subLinks: [
      {
        id: "all-categories",
        path: "/shop",
        name: "Todas las categorias",
      },
      {
        id: "earphones",
        path: "/shop?category=earphones",
        name: "Laptops",
        subLinks: [
          {
            id: "Nuevas",
            path: "/shop?category=earphones&type=earbud",
            name: "Nuevas",
          },
          {
            id: "Usadas",
            path: "/shop?category=earphones&type=iem",
            name: "Usadas",
          },
        ],
      },
      {
        id: "Celulares",
        path: "/shop?category=headsets",
        name: "Celulares",
        // subLinks: [
        //   {
        //     id: "gaming-headset",
        //     path: "/shop?category=gaming-headset",
        //     name: "Gaming Headset",
        //   },
        // ],
      },
      {
        id: "Accesorios",
        path: "/shop?category=headphones",
        name: "Accesorios",
        // subLinks: [
        //   {
        //     id: "bluetooth",
        //     path: "/shop?category=headphones&type=bluetooth",
        //     name: "Bluetooth",
        //   },
        //   {
        //     id: "tws",
        //     path: "/shop?category=headphones&type=tws",
        //     name: "TWS",
        //   },
        // ],
      },{
        id: "Software",
        path: "/shop?category=headphones",
        name: "Software",
      }
      
    ],
  },
  // {
  //   id: "product",
  //   path: "/product",
  //   name: "Productos",
  // },
  {
    id: "contact-us",
    path: "/contact-us",
    name: "Contacto",
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex lg:justify-center lg:gap-10">
      {links.map((link) => (
        <li
          key={link.id}
          className={cn(
            "font-inter text-sm font-medium text-[#141718] hover:opacity-100 text-[20px] strong",
            pathname !== link.path && "opacity-80",
          )}
        >
          {link.subLinks ? (
            <NavDropdown link={link} />
          ) : (
            <Link href={link.path}>{link.name}</Link>
          )}
        </li>
      ))}
    </ul>
  );
}
