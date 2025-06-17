import { useMutation } from "@tanstack/react-query";
import { useModal } from "../../context/ModalContext";
import { createSuperheroFavourite, type SuperheroFavourite } from "../../services/favourites-services";
import styles from "./SuperheroModal.module.scss";

export const SuperheroModal = () => {
  const { setModalOpen, modalHero, setModalHero } = useModal();

  const mutation = useMutation({
    mutationFn: createSuperheroFavourite,
    onSuccess: (res) => {
      console.log(res);
    },
    onError: (err) => {
      console.log(err);
    },
  });
  
  const addToFavourites = (selectedHero: SuperheroFavourite) => {
    mutation.mutate(selectedHero);
    console.log(selectedHero)
  }

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
          <button onClick={() => addToFavourites(modalHero)}>Add to favourites</button>
        </section>
      </div>
    );
  }
};
