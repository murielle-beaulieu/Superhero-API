import { useModal } from "../../context/ModalContext";
import type { Superhero } from "../../services/superheroes-services";
import styles from "./SuperHeroCard.module.scss";

export interface dbHero {
  name: string;
  id: number;
}

interface SuperheroCardProps {
  superhero: Superhero;
}

export const SuperHeroCard = ({ superhero }: SuperheroCardProps) => {
  const { setModalOpen, setModalHero } = useModal();

  const openModal = (modalHero: Superhero) => {
    setModalOpen(true);
    setModalHero(modalHero);
  };

  if (superhero) {
    return (
      <div
        className={styles.card}
        key={superhero.name}
        onClick={() => openModal(superhero)}
      >
        <img src={superhero.images.sm}></img>
        <span className={styles.info}>
          <h2 className={styles.see_more}>See more</h2>
          <h2>{superhero.name}</h2>
        </span>
      </div>
    );
  }
};
