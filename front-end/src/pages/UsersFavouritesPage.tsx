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
          <NavButton handleClick={() => navigate("/")}>
            <h3>Return to homepage</h3>
          </NavButton>
        }
      </Navbar>
      <header>
        <h2>Your Superheroes Favourites</h2>
        <NavButton
          handleClick={() => console.log("searching for a specific hero")}
        >
          <h3>Search</h3>
        </NavButton>
      </header>
      <CardContainer data={favouritesData}/>
    </>
  );
};
