import type { ReactNode } from "react";
import styles from "./Hero.module.scss";

interface HeroProps {
    children: ReactNode
}

export const Hero = ({children}: HeroProps) => {
    return (
        <section className={styles.hero}>
            <h1>Hero Component</h1>
            {children}
        </section>
    )
}