import { useQuery } from "@tanstack/react-query";
import { fetchAllSuperheroes } from "../services/superheroes-services";
import { fetchAllSuperheroesFavourites, type SuperheroFavourite } from "../services/favourites-services";

export const Homepage = () => {
  const { status, data, error } = useQuery({
    queryKey: ["superheroes"],
    queryFn: fetchAllSuperheroes,
  });

  const { data: favouritesData } = useQuery({
    queryKey: ["favourites"],
    queryFn: fetchAllSuperheroesFavourites,
  });
  
//   const [shFav, setShFav] = useState<SuperheroFavourite[]>([])

//   useEffect(() => {
//     setShFav(favouritesData);
//   },[favouritesData])

  if (status === "pending") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }

  //   also status === 'success', but "else" logic works, too
  return (
      <>
      <h1>Hello Superheroess</h1>
      {/* <ul>
        {data.map((hero) => (
            <li key={hero.id}>{hero.name}</li>
        ))}
      </ul> */}
      <ul>
        {favouritesData.map((fav: SuperheroFavourite) => (
            <li>{fav.superhero_name}</li>
        ))}
      </ul>
    </>
  );

  return;
};
