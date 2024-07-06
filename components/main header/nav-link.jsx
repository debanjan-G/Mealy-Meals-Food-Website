'use client'

import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLink = ({ children, href }) => {
    const currentRoute = usePathname();
    console.log(currentRoute);
    return (
        <Link href={href} className="transition duration-500 hover:text-yellow-300  hover:scale-110" style={(currentRoute.startsWith(href)) ? { color: 'yellow' } : {}}>
            {children}
        </Link>
    );
}

export default NavLink;