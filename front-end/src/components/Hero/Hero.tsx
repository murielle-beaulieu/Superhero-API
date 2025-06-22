import styles from "./Hero.module.scss";
import superheroLogo from "../../assets/SuperheroAPI .png";

export const Hero = () => {
    return (
        <section className={styles.hero}>
            <img src={superheroLogo} alt="Superhero API" />
        </section>
    )
}