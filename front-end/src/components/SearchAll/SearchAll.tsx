import { useModal } from "../../context/ModalContext";
import { HeroSearchBar } from "../HeroSearchBar/HeroSearchBar";
import { ResultDisplay } from "../ResultDisplay/ResultDisplay";
import { SuperheroModal } from "../SuperheroModal/SuperheroModal";

export const SearchAll = () => {
  const { modalOpen } = useModal();

  return (
    <>
      <header>
        <h1>Search Heroes by Name</h1>
      </header>
      <HeroSearchBar />
      <ResultDisplay />
      {modalOpen && <SuperheroModal />}
    </>
  );
};
