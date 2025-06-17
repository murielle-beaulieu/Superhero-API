export interface SuperheroPowerstats {
  intelligence: string;
  strength: string;
  speed: string;
  durability: string;
  power: string;
  combat: string;
}

export interface SuperheroImages {
  xs: string;
  sm: string;
  md: string;
  lg: string;
}

export interface SuperheroAppearance {
  gender: string;
  race: string;
  height: string[];
  weight: string[];
  eyeColor: string;
  hairColor: string;
}

export interface SuperheroBiography {
  fullName: string;
  alterEgos: string;
  aliases: string[];
  placeOfBirth: string;
  firstAppearance: string;
  publisher: string;
  alignment: string;
}

export interface SuperheroWork {
  occupation: string;
  base: string;
}

export interface SuperheroConnections {
  groupAffiliation: string;
  relatives: string;
}

export interface Superhero {
  // id: number; 
  name: string;
  slug: string;
  powerstats: SuperheroPowerstats
  images: SuperheroImages;
  appearance: SuperheroAppearance;
  biography: SuperheroBiography;
  word: SuperheroWork;
  connections: SuperheroConnections;
}

export const fetchAllSuperheroes = async () => {
  const response = await fetch("https://akabab.github.io/superhero-api/api/all.json");
  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  console.log(response);
  return (await response.json());
};

