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

  const power = {"power": 100, "speed": 42, "combat": 610, "stength": 0, "strength": 44, "durability": 75, "intelligence": 63};

const mutation = useMutation({
  mutationFn: updateSuperheroFavourite,
    onSuccess: (res) => {
      console.log(res);
    },
    onError: (err) => {
      console.log(err);
    },
})

// mutation.mutate({
//   id: 5,
//   name: 'Do the laundry',
// })

// // The query below will be updated with the response from the
// // successful mutation
// const { status, data, error } = useQuery({
//   queryKey: ['todo', { id: 5 }],
//   queryFn: fetchTodoById,
// })

  const updateFavourites = (selectedHero: SuperheroFavourite) => {
    mutation.mutate(selectedHero.powerstats, selectedHero.id)
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

      <button onClick={() => updateFavourites}>Update</button>
    </div>
  );
};
