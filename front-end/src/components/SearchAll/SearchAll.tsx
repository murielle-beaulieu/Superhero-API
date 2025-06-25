import { useModal } from "../../context/ModalContext";
import { SuperheroSearchBar } from "../SuperheroSearchBar/SuperheroSearchBar";
import { ResultDisplay } from "../ResultDisplay/ResultDisplay";
import { SuperheroModal } from "../SuperheroModal/SuperheroModal";

export const SearchAll = () => {
  const { modalOpen } = useModal();

  return (
    <>
      <header>
        <h1>Search Heroes by Name</h1>
      </header>
      <SuperheroSearchBar />
      <ResultDisplay />
      {modalOpen && <SuperheroModal />}
    </>
  );
};
