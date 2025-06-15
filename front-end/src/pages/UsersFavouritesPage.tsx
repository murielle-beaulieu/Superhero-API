import { useNavigate } from "react-router";
import { Navbar } from "../components/Navbar/Navbar";
import { NavButton } from "../components/NavButton/NavButton";
import { CardContainer } from "../components/CardContainer/CardContainer";
import { useQuery } from "@tanstack/react-query";
import { fetchAllSuperheroesFavourites } from "../services/favourites-services";

export const UsersFavouritesPage = () => {
  const navigate = useNavigate();

  const { data: favouritesData } = useQuery({
    queryKey: ["favourites"],
    queryFn: fetchAllSuperheroesFavourites,
  });

  return (
    <>
      <Navbar>
        {
          <NavButton
            handleClick={() => navigate("/")}
            innerText={"Return to homepage"}
          />
        }
      </Navbar>
      <header>
        <h1>Your Superheroes Favourites</h1>
        <NavButton
          handleClick={() => console.log("searching for a specific hero")}
          innerText={"Search from your favourites heroes"}
        />
      </header>
      <CardContainer data={favouritesData} />
    </>
  );
};
