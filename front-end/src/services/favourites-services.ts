export interface SuperheroFavourite {
  superhero_name: string;
  superhero_img: string;
  powerstats: string;
  deleted: boolean;
}

export const fetchAllSuperheroesFavourites = async () => {
  const response = await fetch("http://localhost:8080/sh_favourites");
  console.log(response);
  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  return (await response.json());
};
