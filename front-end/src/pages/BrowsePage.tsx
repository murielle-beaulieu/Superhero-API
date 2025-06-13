import { useNavigate } from "react-router";
import { Navbar } from "../components/Navbar/Navbar";
import { NavButton } from "../components/NavButton/NavButton";
import { BrowseDisplay } from "../components/BrowseDisplay/BrowseDisplay";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchAllSuperheroes } from "../services/superheroes-services";
import styles from "./BrowsePage.module.scss";

export const BrowsePage = () => {
  const { data, isSuccess } = useQuery({
    queryKey: ["superheroes"],
    queryFn: fetchAllSuperheroes,
  });

  const navigate = useNavigate();
  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(30);

  let dataTotal = 0;
  if (isSuccess) {
    dataTotal = Math.floor(data.length / 30);
  }

  const btnArr: number[] = [];
  let i = 0;
  while (dataTotal >= i) {
    btnArr.push(i);
    i++;
  }

  const pageChange = (index: number) => {
    if (index === 0) {
      setStartIndex(0);
      setEndIndex(30);
    } else {
      setStartIndex(30 * index + 1);
      setEndIndex(30 * index + 31);
    }
  };

  return (
    <>
      <Navbar>
        {
          <div>
            <NavButton handleClick={() => navigate("/")}>
              <h3>Home</h3>
            </NavButton>
            <NavButton handleClick={() => navigate("/favourites")}>
              <h3>See All Your Favourites</h3>
            </NavButton>
          </div>
        }
      </Navbar>
      <header>
        <h1>Browse All Heroes</h1>
        <NavButton handleClick={() => console.log("search fn")}>
          <h3>Search</h3>
        </NavButton>
      </header>
      <section className={styles.btn_arr}>
        {btnArr.map((x) => (
          <NavButton handleClick={() => pageChange(x)}>{x + 1}</NavButton>
        ))}
      </section>
      <BrowseDisplay dataSlice={[startIndex, endIndex]} />
    </>
  );
};
