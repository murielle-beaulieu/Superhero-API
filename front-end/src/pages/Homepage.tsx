import { useQuery } from "@tanstack/react-query";
import { fetchAllSuperheroes } from "../services/superheroes-services";
import { Navbar } from "../components/Navbar/Navbar";
import { NavButton } from "../components/NavButton/NavButton";
import { HeroBanner } from "../components/HeroBanner/HeroBanner";
import { Carousel } from "../components/Carousel/Carousel";
import { useNavigate } from "react-router";
import { useModal } from "../context/ModalContext";
import { SuperheroModal } from "../components/SuperheroModal/SuperheroModal";
import { useCarousel } from "../context/CarouselContext";
import { useEffect } from "react";

export const Homepage = () => {
  const { data, isLoading, isSuccess, isError, error } = useQuery({
    queryKey: ["superheroes"],
    queryFn: fetchAllSuperheroes,
  });

  const navigate = useNavigate();

  const { modalOpen } = useModal();
  const { savedDate, today } = useCarousel();
  let randomStartingIndex = Number(localStorage.getItem("randomIndex"));

  useEffect(() => {
    if (randomStartingIndex == null) {
      randomStartingIndex = Math.floor(Math.random() * data.length);
      localStorage.setItem("randomIndex", `${randomStartingIndex}`);
    }
    if (savedDate != today) {
      randomStartingIndex = Math.floor(Math.random() * data.length);
      localStorage.setItem("randomIndex", `${randomStartingIndex}`);
    }
  }, [data, isSuccess, today, randomStartingIndex]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  if (isSuccess) {
    const carouselHeroesSlice = data.slice(
      randomStartingIndex,
      Number(randomStartingIndex) + 5
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
        <HeroBanner />
        <Carousel carouselHeroesSlice={carouselHeroesSlice} />
        <header></header>
        {modalOpen && <SuperheroModal />}
      </>
    );
  }
};
