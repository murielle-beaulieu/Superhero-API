import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  deleteSuperheroFavourite,
  updateSuperheroFavourite,
  type SuperheroFavourite,
} from "../../services/favourites-services";
import styles from "./SuperHeroFavouriteCard.module.scss";
import { UpdateForm } from "../UpdateForm/UpdateForm";
import type { UpdateData } from "../UpdateForm/update-schema";
import { toast } from "react-toastify";
import { useState } from "react";

interface SuperHeroFavouriteCardProps {
  favourite: SuperheroFavourite;
}

export const SuperHeroFavouriteCard = ({
  favourite,
}: SuperHeroFavouriteCardProps) => {
  const queryClient = useQueryClient();

  const [showStats, setShowStats] = useState<boolean>(true);

  const updtateSuccessToast = () => toast("Successfully updated");
  const updateErrorToast = (errMsg: string) =>
    toast(
      "There's been an error while updating: " + errMsg + ".Please try again"
    );

  const deleteSuccessToast = () => toast("Successfully deleted hero");
  const deleteErrorToast = (errMsg: string) =>
    toast("There's been an error while deleting error: " + errMsg);

  const updateMutation = useMutation({
    mutationFn: updateSuperheroFavourite,
    onSuccess: () => {
      updtateSuccessToast();
      queryClient.invalidateQueries({ queryKey: ["favourites"] });
    },
    onError: (err) => {
      updateErrorToast(err.message);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteSuperheroFavourite,
    onSuccess: () => {
      deleteSuccessToast();
      queryClient.invalidateQueries({ queryKey: ["favourites"] });
    },
    onError: (err) => {
      deleteErrorToast(err.message);
    },
  });

  const handleUpdate = (data: UpdateData) => {
    updateMutation.mutate({ id: `${favourite.id}`, powerstats: data });
  };

  const handleDelete = (id: number) => {
    if (
      confirm("You're about to delete a favourite, do you want to go ahead?")
    ) {
      deleteMutation.mutate(id);
    }
  };

  return (
    <>
      <div className={styles.fav_card}>
        <span className={styles.name_banner}>
          <h2>{favourite.name}</h2>
        </span>
        <div className={styles.hero_profile}>
          <img src={`${favourite.images.md}`} alt={`${favourite.name}`} />
          <span>
            <p>Name : {favourite.biography.fullName}</p>
            <p>Born: {favourite.biography.placeOfBirth}</p>
            <p>Publisher: {favourite.biography.publisher}</p>
            <p>Alter Egos: {favourite.biography.alterEgos}</p>
            <p>First Appeared: {favourite.biography.firstAppearance}</p>
            {/* <p>Alignment: {favourite.biography.alignment}</p> */}
          </span>
        </div>
        {showStats ? (
          <>
            <span className={styles.stats_title}>
              <h2>Hero Powerstats</h2>
            </span>
            <div className={styles.hero_stats}>
              <span className={styles.stats_data}>
                <p>Intelligence: {favourite.powerstats.intelligence}</p>
                <p>Strength: {favourite.powerstats.strength}</p>
                <p>Speed: {favourite.powerstats.speed}</p>
              </span>
              <span className={styles.stats_data}>
                <p>Durability: {favourite.powerstats.durability}</p>
                <p>Power: {favourite.powerstats.power}</p>
                <p>Combat: {favourite.powerstats.combat}</p>
              </span>
            </div>
          </>
        ) : (
          <>
            <span className={styles.stats_title}>
              <h2>Update Hero Powerstats</h2>
            </span>
            <UpdateForm
              onSubmit={handleUpdate}
              currentPowerstats={favourite.powerstats}
            />
            <div className={styles.modal_actions}>
              <button
                onClick={() => setShowStats(true)}
                className={styles.btn_fav_card}
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(favourite.id)}
                className={styles.btn_fav_card + " " + styles.del}
              >
                Delete from Favourite
              </button>
            </div>
          </>
        )}
        {showStats ? (
          <div className={styles.modal_actions}>
            <button
              onClick={() => setShowStats(false)}
              className={styles.btn_fav_card}
            >
              Update Favourite
            </button>
            <button
              onClick={() => handleDelete(favourite.id)}
              className={styles.btn_fav_card + " " + styles.del}
            >
              Delete from Favourite
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
