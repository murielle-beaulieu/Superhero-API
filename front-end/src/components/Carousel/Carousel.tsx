import { useState } from "react";
import { SuperHeroCard } from "../SuperheroCard/SuperheroCard";
import styles from "./Carousel.module.scss";
import type { Superhero } from "../../services/superheroes-services";

interface CarouselProps {
  carouselHeroesSlice: Superhero[];
}

export const Carousel = ({ carouselHeroesSlice }: CarouselProps) => {
  
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const back = () => {
    if (currentIndex > 0) {
      setCurrentIndex(() => currentIndex - 1);
    }
  };

  const forward = () => {
    if (currentIndex < carouselHeroesSlice.length - 3) {
      setCurrentIndex(() => currentIndex + 1);
    }
  };

  return (
    <section className={styles.carousel}>
      <button onClick={() => back()}>{"<"}</button>
      {carouselHeroesSlice.slice(currentIndex, currentIndex + 3).map((hero) => <SuperHeroCard superhero={hero} />)}
      <button onClick={() => forward()}>{">"}</button>
      {/* {carouselHeroesSlice.map((hero) => (
        <SuperHeroCard superhero={hero} />
      ))} */}
    </section>
  );
};
