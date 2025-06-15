import { useNavigate } from "react-router";
import { Navbar } from "../components/Navbar/Navbar";
import { NavButton } from "../components/NavButton/NavButton";
import { useState } from "react";
import { BrowseAll } from "../components/BrowseAll/BrowseAll";
import { SearchAll } from "../components/SearchAll/SearchAll";

export const BrowsePage = () => {
  const navigate = useNavigate();

  const [browseMode, setBrowseMode] = useState("browseAll");

  return (
    <>
      <Navbar>
        {
          <div>
            <NavButton handleClick={() => navigate("/")} innerText={"Home"} />
            {browseMode == "browseAll" ? (
              <NavButton
                handleClick={() => setBrowseMode("searchAll")}
                innerText={"Search by Name"}
              />
            ) : (
              <NavButton
                handleClick={() => setBrowseMode("browseAll")}
                innerText={"Browse All"}
              />
            )}
            <NavButton
              handleClick={() => navigate("/favourites")}
              innerText={"See All Your Favourites"}
            />
          </div>
        }
      </Navbar>
      {browseMode == "browseAll" ? <BrowseAll /> : <SearchAll />}
    </>
  );
};
