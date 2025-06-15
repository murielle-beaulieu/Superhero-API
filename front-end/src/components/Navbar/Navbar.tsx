import type { ReactNode } from "react";
import styles from "./Navbar.module.scss";

interface NavbarProps {
  children: ReactNode;
}

export const Navbar = ({ children }: NavbarProps) => {
  return (
    <nav className={styles.nav}>
      <h2>SuperHero API</h2>
      <span>{children}</span>
    </nav>
  );
};
