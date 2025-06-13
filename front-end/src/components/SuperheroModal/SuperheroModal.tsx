import { useModal } from "../../context/ModalContext";
import styles from "./SuperheroModal.module.scss";

export const SuperheroModal = () => {
  const { setModalOpen, modalHero, setModalHero } = useModal();

  const closeModal = () => {
    setModalOpen(false);
    setModalHero(null);
  }

  if (modalHero) {
    return (
      <div className={styles.bg}>
        <section className={styles.modal}>
            {/* The image takes a long time to load up, would need a skeleton or a loading time buffer */}
          <img src={modalHero.images.sm} alt="Superhero Img" />
          <h3>{modalHero.name}</h3>
          <p>{modalHero.slug}</p>
          <p>{modalHero.appearance.height[1]}</p>
          <button onClick={() => closeModal()}>Close</button>
        </section>
      </div>
    );
  }
};
