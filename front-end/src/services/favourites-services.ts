import axios from "axios";
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
  deleted: boolean;
}

export const fetchAllSuperheroesFavourites = () => {
  return axios.get("http://localhost:8080/sh_favourites/active")
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error('Error fetching data:', error);
    });

};

export const createSuperheroFavourite = (hero: SuperheroFavourite) => {
  return axios.post("http://localhost:8080/sh_favourites", hero)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error); // Handle errors
    });
}

export const updateSuperheroFavourite = (hero: { id: string, powerstats: SuperheroPowerstats }) => {
  return axios.put("http://localhost:8080/sh_favourites/" + hero.id, { powerstats: hero.powerstats })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error); // Handle errors
    });
}

export const deleteSuperheroFavourite = async (favouriteId: number) => {
  return axios.delete("http://localhost:8080/sh_favourites/" + favouriteId)
    .then(response => {
      console.log("Resource deleted: " + response.data);
    })
    .catch(error => {
      console.error("Error deleting resource:", error);
    });
}