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

interface SuperHeroFavouriteCardProps {
  favourite: SuperheroFavourite;
}

export const SuperHeroFavouriteCard = ({
  favourite,
}: SuperHeroFavouriteCardProps) => {
  const queryClient = useQueryClient();

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
        <div className={styles.hero_profile}>
          <img src={`${favourite.images.md}`} alt={`${favourite.name}`} />
        </div>
        <div className={styles.hero_stats}>
          <p>Combat: {favourite.powerstats.combat}</p>
          <p>Durability: {favourite.powerstats.durability}</p>
          <p>Intelligence: {favourite.powerstats.intelligence}</p>
          <p>Power: {favourite.powerstats.power}</p>
        </div>
        <h3>Deleted? : {favourite.deleted ? <p>Yes</p> : <p>No</p>}</h3>
        <UpdateForm
          onSubmit={handleUpdate}
          currentPowerstats={favourite.powerstats}
        />
        <button onClick={() => handleDelete(favourite.id)}>
          Delete from Favourite
        </button>
      </div>
    </>
  );
};
