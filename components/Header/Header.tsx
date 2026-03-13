"use client";

import Link from "next/link";
import css from "./Header.module.css";
import { Icon } from "../Icon/Icon";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  return (
    <>
      <header className={css.header}>
        <Link href="/" className={css.logo}>
          <Icon id="logo" className={css.logo} />
        </Link>
        <nav className={css.navigation}>
          <ul className={css.navList}>
            <li>
              <Link
                href="/"
                aria-current={pathname === "/" ? "page" : undefined}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/catalog"
                aria-current={pathname === "/catalog" ? "page" : undefined}
              >
                Catalog
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
