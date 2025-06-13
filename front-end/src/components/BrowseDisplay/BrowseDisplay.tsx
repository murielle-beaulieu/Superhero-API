import { useQuery } from "@tanstack/react-query";
import { fetchAllSuperheroes } from "../../services/superheroes-services";
import { SuperHeroCard, type dbHero } from "../SuperheroCard/SuperheroCard";
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

  console.log("the slices" + dataSlice[0] + " " + dataSlice[1]);

  let dataPerPage = [];

  if (data) {
    dataPerPage = data.slice(dataSlice[0], dataSlice[1]);
  }

  return (
    <section className={styles.browse_all}>
      {dataPerPage &&
        dataPerPage.map((hero: dbHero) => (
          <SuperHeroCard data={hero} key={hero.id} />
        ))}
    </section>
  );
};
