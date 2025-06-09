import { useQuery } from "@tanstack/react-query";
import { fetchAllSuperheroes } from "../services/superheroes-services";
// import { fetchAllSuperheroesFavourites } from "../services/favourites-services";
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

  console.log(data);


  if (status === "pending") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <Navbar>
        {
          <NavButton handleClick={() => navigate("/favourites")}>
            <h3>See All Your Favourites</h3>
          </NavButton>
        }
      </Navbar>
      <Hero>
        <h1>Hello Superheroes</h1>
      </Hero>
      <Carousel />
      {/* <ul>
        {data.map((hero) => (
            <li key={hero.id}>{hero.name}</li>
        ))}
      </ul> */}
      <button onClick={()=>navigate("")}></button>
    </>
  );

  return;
};
