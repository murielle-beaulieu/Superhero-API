import { useMutation } from "@tanstack/react-query";
import { useModal } from "../../context/ModalContext";
import { createSuperheroFavourite } from "../../services/favourites-services";
import styles from "./SuperheroModal.module.scss";
import type { Superhero } from "../../services/superheroes-services";
import { useNavigate } from "react-router";

export const SuperheroModal = () => {
  const { setModalOpen, modalHero, setModalHero } = useModal();

  const navigate = useNavigate();

  const addFavouriteMutation = useMutation({
    mutationFn: createSuperheroFavourite,
    onSuccess: () => {
      setTimeout(() => {
        navigate("/favourites");
        setModalHero(null);
      }, 1000);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const addToFavourites = (selectedHero: Superhero) => {
    addFavouriteMutation.mutate(selectedHero);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalHero(null);
  };

  if (modalHero) {
    return (
      <div className={styles.bg}>
        <section className={styles.modal}>
          {/* The image takes a long time to load up, would need to implement a skeleton or a loading time buffer */}
          <img src={modalHero.images.sm} alt="Superhero Img" />
          <h3>{modalHero.name}</h3>
          <p>{modalHero.slug}</p>
          <p>{modalHero.appearance.height[1]}</p>
          <button onClick={() => closeModal()}>Close</button>
          <button onClick={() => addToFavourites(modalHero)}>
            Add to favourites
          </button>
        </section>
      </div>
    );
  }
};
