import { useQuery } from "@tanstack/react-query";
import { fetchAllSuperheroes } from "../services/superheroes-services";
import { Navbar } from "../components/Navbar/Navbar";
import { NavButton } from "../components/NavButton/NavButton";
import { Hero } from "../components/Hero/Hero";
import { Carousel } from "../components/Carousel/Carousel";
import { useNavigate } from "react-router";

export const Homepage = () => {
  const { data, status, error } = useQuery({
    queryKey: ["superheroes"],
    queryFn: fetchAllSuperheroes,
  });

  const navigate = useNavigate();

  if (status === "pending") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }

  if (data) {
    const randomStartingIndex = Math.floor(Math.random() * data.length);
    console.log(randomStartingIndex);

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
        <Hero>
          <h1>Hello Superheroes</h1>
        </Hero>
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
      </>
    );
  }
};
