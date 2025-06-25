import styles from "./Hero.module.scss";
import superheroLogo from "../../assets/superheroes-nobg.png";

export const Hero = () => {
    return (
        <>
        <section className={styles.hero}>
            <img src={superheroLogo} alt="Superhero API" />
            <span className={styles.hero_middle}></span>
        </section>
        </>
    )
}