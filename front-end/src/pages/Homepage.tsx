import { useQuery } from "@tanstack/react-query";
import { fetchAllSuperheroes } from "../services/superheroes-services";
import { Navbar } from "../components/Navbar/Navbar";
import { NavButton } from "../components/NavButton/NavButton";
import { Hero } from "../components/Hero/Hero";
import { Carousel } from "../components/Carousel/Carousel";
import { useNavigate } from "react-router";
import { useModal } from "../context/ModalContext";
import { SuperheroModal } from "../components/SuperheroModal/SuperheroModal";

export const Homepage = () => {
  const { data, isLoading, isSuccess, isError, error } = useQuery({
    queryKey: ["superheroes"],
    queryFn: fetchAllSuperheroes,
  });

  const navigate = useNavigate();

  const { modalOpen } = useModal();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  if (isSuccess) {
    
    const randomStartingIndex = Math.floor(Math.random() * data.length);

    const carouselHeroesSlice = data.slice(
      randomStartingIndex,
      randomStartingIndex + 5
    );

    return (
      <>
        <Navbar>
          {
            <NavButton
              handleClick={() => navigate("/favourites")}
              innerText={"See All Your Favourites"}
            />
          }
        </Navbar>
        <Hero/>
        <Carousel carouselHeroesSlice={carouselHeroesSlice} />
        <header>
          <NavButton
            handleClick={() => navigate("")}
            innerText={"Search Superheroes by Name"}
          />
          <NavButton
            handleClick={() => navigate("/all")}
            innerText={"Browse All"}
          />
        </header>
        {modalOpen && <SuperheroModal />}
      </>
    );
  }
};
