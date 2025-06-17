import type { SuperheroAppearance, SuperheroBiography, SuperheroConnections, SuperheroImages, SuperheroPowerstats, SuperheroWork } from "./superheroes-services";

export interface SuperheroFavourite {
  id: number;
  name: string;
  slug: string;
  powerstats: SuperheroPowerstats
  images: SuperheroImages;
  appearance: SuperheroAppearance;
  biography: SuperheroBiography;
  word: SuperheroWork;
  connections: SuperheroConnections;
}

export const fetchAllSuperheroesFavourites = async () => {
  const response = await fetch("http://localhost:8080/sh_favourites");
  console.log(response);
  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  return (await response.json());
};

export const createSuperheroFavourite = async (data: SuperheroFavourite) => {
  const response = await fetch("http://localhost:8080/sh_favourites", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    }
  })
    if (!response.ok) {
    throw new Error("Failed to create a superhero favourite");
  }
  return (await response.json()) as SuperheroFavourite;
}

export const updateSuperheroFavourite = async( hero: { id: string, powerstats: SuperheroPowerstats}) => {
  console.log(hero.powerstats)
  console.log("http://localhost:8080/sh_favourites/" + hero.id);
  const response = await fetch("http://localhost:8080/sh_favourites/" + hero.id, {
    method: "PUT",
    body: JSON.stringify({ powerstats: hero.powerstats }),
    headers: {
      "Content-Type": "application/json",
    }
  })
    if (!response.ok) {
    throw new Error("Failed to update a superhero favourite");
  }
  return (await response.json()) as SuperheroFavourite;
}