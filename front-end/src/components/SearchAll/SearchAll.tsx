import { HeroSearchBar } from "../HeroSearchBar/HeroSearchBar";
import { ResultDisplay } from "../ResultDisplay/ResultDisplay";

export const SearchAll = () => {
  return (
    <>
      <header>
        <h1>Search Heroes by Name</h1>
      </header>
      <HeroSearchBar />
      <ResultDisplay />
    </>
  );
};
