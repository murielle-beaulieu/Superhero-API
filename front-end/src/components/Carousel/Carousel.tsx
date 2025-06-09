import { useState } from "react";
import { SuperHeroCard } from "../SuperheroCard/SuperheroCard";
import styles from "./Carousel.module.scss";

const info = [
  <SuperHeroCard key={0} id={0} />,
  <SuperHeroCard key={1} id={1} />,
  <SuperHeroCard key={2} id={2} />,
  <SuperHeroCard key={3} id={3} />,
  <SuperHeroCard key={4} id={4} />,
];

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const back = () => {
    if (currentIndex > 0) {
      setCurrentIndex(() => currentIndex - 1);
    }
  };

  const forward = () => {
    if (currentIndex < info.length - 3) {
      setCurrentIndex(() => currentIndex + 1);
    }
  };

  return (
    <section className={styles.carousel}>
      <button onClick={() => back()}>{"<"}</button>
      {info.slice(currentIndex, currentIndex + 3).map((card) => card)}
      <button onClick={() => forward()}>{">"}</button>
    </section>
  );
};
