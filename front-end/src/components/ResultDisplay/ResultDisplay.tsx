import { useSearch } from "../../context/SearchContext";
import { type Superhero } from "../../services/superheroes-services";
import { SuperHeroCard } from "../SuperheroCard/SuperheroCard";
import styles from "./ResultDisplay.module.scss";

export const ResultDisplay = () => {
  const { searchResult } = useSearch();

  return (
    <section className={styles.searchAll}>
      {searchResult &&
        searchResult.map((hero: Superhero) => (
          <SuperHeroCard superhero={hero} />
        ))}
    </section>
  );
};
