import type { ReactNode } from "react";
import styles from "./Navbar.module.scss";

interface NavbarProps {
  children: ReactNode;
}

export const Navbar = ({ children }: NavbarProps) => {
  return (
    <nav className={styles.nav}>
      <span className={styles.nav_title}>
      <h2>SuperHero API</h2>
      </span>
      <span>{children}</span>
    </nav>
  );
};
