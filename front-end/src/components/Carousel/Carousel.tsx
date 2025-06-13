import { useState } from "react";
import { SuperHeroCard } from "../SuperheroCard/SuperheroCard";
import styles from "./Carousel.module.scss";

const info = [
  <SuperHeroCard data={{"id":1,"name":"jeb"}} />,
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
