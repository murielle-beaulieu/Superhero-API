import { useMutation } from "@tanstack/react-query";
import { useModal } from "../../context/ModalContext";
import { createSuperheroFavourite } from "../../services/favourites-services";
import styles from "./SuperheroModal.module.scss";
import type { Superhero } from "../../services/superheroes-services";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

export const SuperheroModal = () => {
  const { setModalOpen, modalHero, setModalHero } = useModal();
  const [display, setDisplay] = useState<string>("");

  const navigate = useNavigate();

  const successToast = (heroName: string) =>
    toast("Successfuly added " + heroName + " to your favourites");
  const errorToast = (errorMsg: string) =>
    toast("There's been an error: " + errorMsg);

  const addToFavourites = (selectedHero: Superhero) => {
    addFavouriteMutation.mutate(selectedHero);
  };

  const addFavouriteMutation = useMutation({
    mutationFn: createSuperheroFavourite,
    onSuccess: () => {
      if (modalHero) {
        successToast(modalHero.name);
      }
      setTimeout(() => {
        navigate("/favourites");
        setModalHero(null);
      }, 1500);
    },
    onError: (err) => {
      errorToast(err.message);
    },
  });

  const closeModal = () => {
    setModalOpen(false);
    setModalHero(null);
  };

  if (modalHero) {
    console.log(modalHero);
    return (
      <div className={styles.bg}>
        <div>
          <ToastContainer />
        </div>
        <section className={styles.modal}>
          <span className={styles.modal_nav}>
            <h2>{modalHero.name}</h2>
            <button onClick={() => closeModal()} id={styles.close}>
              {"\u2715"}
            </button>
          </span>
          <span className={styles.modal_img}>
            <img src={modalHero.images.md} alt="Superhero Img" />
          </span>
          <div>
            <h2>Learn more about this Superhero!</h2>
            <button onClick={() => setDisplay("About")}>Show About</button>
            <button onClick={() => setDisplay("PowerStats")}>
              Show Powerstats
            </button>
            <button onClick={() => setDisplay("Appearance")}>
              Show Appearance
            </button>
            <button onClick={() => addToFavourites(modalHero)} id={styles.fav}>
              Add to favourites
            </button>
          </div>
          {display == "About" && (
            <article>
              <h2>About</h2>
              <span>
                <p>
                  {modalHero.name}, more commonly known as{" "}
                  {modalHero.biography.fullName}
                  <p>This hero's heart is {modalHero.biography.alignment}</p>
                <p>Affiliations: {modalHero.connections.groupAffiliation}</p>
                </p>
              </span>
            </article>
          )}
          {display == "PowerStats" && (
            <article>
              <h2>PowerStats:</h2>
              <span>
                <p>Intelligence: {modalHero.powerstats.intelligence}</p>
                <p>Strength: {modalHero.powerstats.strength}</p>
                <p>Speed: {modalHero.powerstats.speed}</p>
              </span>
              <span>
                <p>Durability: {modalHero.powerstats.durability}</p>
                <p>Power: {modalHero.powerstats.power}</p>
                <p>Combat: {modalHero.powerstats.combat}</p>
              </span>
            </article>
          )}
          {display == "Appearance" && (
            <article>
              <h2>Physical:</h2>
              <span>
                <p>Gender: {modalHero.appearance.gender}</p>
                <p>Race: {modalHero.appearance.race}</p>
                <p>Height: {modalHero.appearance.height[1]}</p>
              </span>
              <span>
                <p>Weight: {modalHero.appearance.weight}</p>
                <p>Eye Color: {modalHero.appearance.eyeColor}</p>
                <p>Hair Color: {modalHero.appearance.hairColor}</p>
              </span>
            </article>
          )}
        </section>
      </div>
    );
  }
};
