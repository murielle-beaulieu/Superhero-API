import { useEffect, useState } from "react";
import {
  fetchAllSuperheroes,
  type Superhero,
} from "../../services/superheroes-services";
import { useQuery } from "@tanstack/react-query";
import { useSearch } from "../../context/SearchContext";

export const SuperheroSearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const { data, isSuccess } = useQuery({
    queryKey: ["superheroes"],
    queryFn: fetchAllSuperheroes,
  });

  const { setSearchResult } = useSearch();

  useEffect(() => {
    if (isSuccess && data) {
      setSearchResult(data);
    }
  }, [data, isSuccess, setSearchResult]);

  useEffect(() => {
    const filtered = data.filter((hero: Superhero) =>
      hero.name.toLowerCase().includes(inputValue.toLowerCase().trim())
    );
    setSearchResult(filtered);
  }, [data, inputValue, setSearchResult]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  if (isSuccess) {
    return (
      <>
        <form>
          <label>
            Input Value:
            <input type="text" value={inputValue} onChange={handleChange} />
          </label>
          <p>Input Value: {inputValue}</p>
        </form>
      </>
    );
  }
};
