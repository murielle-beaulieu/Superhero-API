import { useQuery } from "@tanstack/react-query";
import { fetchAllSuperheroes, type Superhero } from "../../services/superheroes-services";
import { SuperHeroCard } from "../SuperheroCard/SuperheroCard";
import styles from "./BrowseDisplay.module.scss";
// import { useEffect, useState } from "react";

interface BrowseDisplayProps {
  dataSlice: number[];
}

export const BrowseDisplay = ({ dataSlice }: BrowseDisplayProps) => {
  const { data } = useQuery({
    queryKey: ["superheroes"],
    queryFn: fetchAllSuperheroes,
  });

  let dataPerPage = [];

  if (data) {
    dataPerPage = data.slice(dataSlice[0], dataSlice[1]);
  }

  return (
    <section className={styles.browse_all}>
      {dataPerPage &&
        dataPerPage.map((hero: Superhero) => (
          <SuperHeroCard superhero={hero} />
        ))}
    </section>
  );
};
