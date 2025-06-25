import { useQuery } from "@tanstack/react-query";
import { fetchAllSuperheroes } from "../services/superheroes-services";
import { Navbar } from "../components/Navbar/Navbar";
import { NavButton } from "../components/NavButton/NavButton";
import { Hero } from "../components/Hero/Hero";
import { Carousel } from "../components/Carousel/Carousel";
import { useNavigate } from "react-router";
import { useModal } from "../context/ModalContext";
import { SuperheroModal } from "../components/SuperheroModal/SuperheroModal";
import { useCarousel } from "../context/CarouselContext";
import { useState } from "react";

export const Homepage = () => {
  const { data, isLoading, isSuccess, isError, error } = useQuery({
    queryKey: ["superheroes"],
    queryFn: fetchAllSuperheroes,
  });


  const navigate = useNavigate();

  const { modalOpen } = useModal();

  const [slice, setSlice] = useState<string[] | undefined>(undefined)
  const {today, date} = useCarousel();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  if (isSuccess) {

  const randomStartingIndex = Math.floor(Math.random() * data.length);

  localStorage.setItem("randIndex", `${randomStartingIndex}`);

  if (today == date) {
    // const slice1 = +localStorage.getItem("randIndex");
    // const slice2 = +slice1 + 5;
    //   setSlice([slice1, slice2])
    // console.log(slice);
    console.log(true);
  } else {
    //   localStorage.setItem("randIndex", `${Math.floor(Math.random() * data.length)}`);
    //  console.log("changed date so new index: " +localStorage.getItem("randIndex"))
    console.log(false)
  }

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
        <Hero />
        <NavButton
          handleClick={() => navigate("/all")}
          innerText={"Browse All"}
        />
        <h2>Superheroes of the day</h2>
        <Carousel carouselHeroesSlice={carouselHeroesSlice} />
        <header></header>
        {modalOpen && <SuperheroModal />}
      </>
    );
  }
};
