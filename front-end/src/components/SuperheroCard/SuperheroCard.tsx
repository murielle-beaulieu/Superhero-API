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


export const SuperHeroCard = ({superhero}: SuperheroCardProps) => {

  const { setModalOpen, setModalHero } = useModal();

  const openModal = (modalHero: Superhero) => {
    setModalOpen(true);
    setModalHero(modalHero);
  }

  if (superhero) {
    return (
        <div className={styles.card} key={superhero.id} onClick={() => openModal(superhero)}>
            {/* I would want the image of the superhero as a cover and on hover the name and "click to see more" */}
            <p>{superhero.name}</p>
        </div>
    )
  }
}