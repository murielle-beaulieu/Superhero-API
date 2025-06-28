import styles from "./HeroBanner.module.scss";
import superheroLogo from "../../assets/superheroes-nobg.png";
import { NavButton } from "../NavButton/NavButton";
import { useNavigate } from "react-router";

export const HeroBanner = () => {

  const navigate = useNavigate();

  return (
    <>
      <section className={styles.hero}>
        <img src={superheroLogo} alt="Superhero API" />
        <span className={styles.hero_middle}></span>
      </section>
        <span className={styles.navigation}>
          <NavButton
              handleClick={() => navigate("/favourites")}
              innerText={"See All Your Favourites"}
            />
          <NavButton
              handleClick={() => navigate("/all")}
              innerText={"Browse All SuperHeroes"}
            />
        </span>
    </>
  );
};
