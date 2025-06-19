import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  deleteSuperheroFavourite,
  updateSuperheroFavourite,
  type SuperheroFavourite,
} from "../../services/favourites-services";
import styles from "./SuperHeroFavouriteCard.module.scss";
import { UpdateForm } from "../UpdateForm/UpdateForm";
import type { UpdateData } from "../UpdateForm/update-schema";

interface SuperHeroFavouriteCardProps {
  favourite: SuperheroFavourite;
}

export const SuperHeroFavouriteCard = ({
  favourite,
}: SuperHeroFavouriteCardProps) => {
  const queryClient = useQueryClient();
  const updateMutation = useMutation({
    mutationFn: updateSuperheroFavourite,
    onSuccess: (res) => {
      console.log(res);
      queryClient.invalidateQueries({ queryKey: ["favourites"] });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteSuperheroFavourite,
    onSuccess: (res) => {
      console.log(res);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const handleUpdate = (data: UpdateData) => {
    console.log(data)
    updateMutation.mutate({ id: `${favourite.id}`, powerstats: data });
  };

  const deleteFavourite = (id: number) => {
    console.log("delete this favourite: " + id);
    deleteMutation.mutate(id)
  };

  return (
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
      <h3>Deleted? : {favourite.deleted? <p>Yes</p> : <p>No</p>}</h3>
      <UpdateForm onSubmit={handleUpdate} currentPowerstats={favourite.powerstats} />
      <button onClick={() => deleteFavourite(favourite.id)}>Delete from Favourite</button>
    </div>
  );
};
