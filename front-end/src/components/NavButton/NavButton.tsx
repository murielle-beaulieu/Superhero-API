import styles from "./NavButton.module.scss";
import type { ReactNode } from "react";

interface NavButtonProps {
    children: ReactNode;
    handleClick: () => unknown;
}

export const NavButton = ({children, handleClick}: NavButtonProps) => {
    return (
        <button className={styles.nav_btn} onClick={handleClick}>{children}</button>
    )
}