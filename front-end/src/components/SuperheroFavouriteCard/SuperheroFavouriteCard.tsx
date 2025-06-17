import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
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
  const mutation = useMutation({
    mutationFn: updateSuperheroFavourite,
    onSuccess: (res) => {
      console.log(res);
      queryClient.invalidateQueries({ queryKey: ["favourites"] });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const handleUpdate = (data: UpdateData) => {
    mutation.mutate({ id: `${favourite.id}`, powerstats: data });
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
      <UpdateForm onSubmit={handleUpdate} />
    </div>
  );
};
