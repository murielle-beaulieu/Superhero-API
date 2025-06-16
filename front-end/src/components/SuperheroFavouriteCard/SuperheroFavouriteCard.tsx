import { useMutation } from "@tanstack/react-query";
import { updateSuperheroFavourite, type SuperheroFavourite } from "../../services/favourites-services";
import styles from "./SuperHeroFavouriteCard.module.scss";

interface SuperHeroFavouriteCardProps {
  favourite: SuperheroFavourite;
}

export const SuperHeroFavouriteCard = ({
  favourite,
}: SuperHeroFavouriteCardProps) => {
  console.log(favourite);

const mutation = useMutation({
  mutationFn: updateSuperheroFavourite,
    onSuccess: (res) => {
      console.log(res);
    },
    onError: (err) => {
      console.log(err);
    },
})

  const updateFavourites = (selectedHero: SuperheroFavourite) => {
    console.log(selectedHero.powerstats)
    mutation.mutate({ id: `${selectedHero.id}`, powerstats: {intelligence: 1,
    "strength": 1,
    "speed": 700,
    "durability": 700,
    "power": 700,
    "combat": 700}})
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

      <button onClick={() => updateFavourites(favourite)}>Update</button>
    </div>
  );
};
