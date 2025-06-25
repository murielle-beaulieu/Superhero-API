import { useModal } from "../../context/ModalContext";
import type { Superhero } from "../../services/superheroes-services";
import styles from "./SuperHeroCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons"; // Import specific icons
import { createSuperheroFavourite } from "../../services/favourites-services";
import { useMutation } from "@tanstack/react-query";

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

  const addFavouriteMutation = useMutation({
    mutationFn: createSuperheroFavourite,
    onSuccess: () => {
      console.log("yay");
    },
    onError: (err) => {
      console.log(err.message);
    },
  });

  const addToFavourites = (selectedHero: Superhero) => {
    addFavouriteMutation.mutate(selectedHero);
  };

  if (superhero) {
    return (
      <div
        className={styles.card}
        key={superhero.name}
        onClick={() => openModal(superhero)}
      >
        {/* I would want the image of the superhero as a cover and on hover the name and "click to see more" */}
        <p>{superhero.name}</p>
        <div className={styles.quickFav}>
          <div className={styles.icon}>
            <FontAwesomeIcon
              icon={faHeart}
              onClick={() => addToFavourites(superhero)}
            />
          </div>
        </div>
      </div>
    );
  }
};
