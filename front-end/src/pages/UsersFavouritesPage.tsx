import { useNavigate } from "react-router";
import { Navbar } from "../components/Navbar/Navbar";
import { NavButton } from "../components/NavButton/NavButton";
import { CardContainer } from "../components/CardContainer/CardContainer";
import { useQuery } from "@tanstack/react-query";
import { fetchAllSuperheroesFavourites } from "../services/favourites-services";

export const UsersFavouritesPage = () => {
  const navigate = useNavigate();

  const {
    data,
    isLoading,
    isSuccess,
    error,
  } = useQuery({
    queryKey: ["favourites"],
    queryFn: fetchAllSuperheroesFavourites,
  });

  console.log(data);
  if (isLoading) return <div>loading..</div>

  if (error) return <div>{error.message}</div>;

  if (isSuccess) {

  // const favouritesData = JSON.parse(data);

    return (
      <>
      {/* <p>y</p> */}
      {/* {console.log(favouritesData as JSON)} */}
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
        <CardContainer favouritesList={data} />
      </>
    );
  }
};
