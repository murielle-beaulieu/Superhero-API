import { useQuery } from "@tanstack/react-query";
import { NavButton } from "../NavButton/NavButton";
import styles from "./BrowseAll.module.scss";
import { fetchAllSuperheroes } from "../../services/superheroes-services";
import { useState } from "react";
import { useModal } from "../../context/ModalContext";
import { BrowseDisplay } from "../BrowseDisplay/BrowseDisplay";
import { SuperheroModal } from "../SuperheroModal/SuperheroModal";

export const BrowseAll = () => {
  const { data, isSuccess } = useQuery({
    queryKey: ["superheroes"],
    queryFn: fetchAllSuperheroes,
  });

  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(30);

  const { modalOpen } = useModal();

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
      <header>
        <h1>Browse All Heroes</h1>
      </header>
      <section className={styles.btn_arr}>
        {btnArr.map((x) => (
          <NavButton handleClick={() => pageChange(x)} innerText={`${x + 1}`} />
        ))}
      </section>
      <BrowseDisplay dataSlice={[startIndex, endIndex]} />
      {modalOpen && <SuperheroModal />}
    </>
  );
};
