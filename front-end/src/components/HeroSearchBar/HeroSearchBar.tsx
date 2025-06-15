import { useEffect, useState } from "react";
import {
  fetchAllSuperheroes,
  type Superhero,
} from "../../services/superheroes-services";
import { useQuery } from "@tanstack/react-query";
// import { ResultDisplay } from "../ResultDisplay/ResultDisplay";
import { useSearch } from "../../context/SearchContext";

export const HeroSearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  // const [includedValue, setIncludedValue] = useState([]);

  const { data, isSuccess } = useQuery({
    queryKey: ["superheroes"],
    queryFn: fetchAllSuperheroes,
  });

  const { setSearchResult} = useSearch();

  useEffect(() => {
    if (isSuccess && data) {
      setSearchResult(data);
    }
  }, [data, isSuccess]);

  useEffect(() => {
    const filtered = data.filter((hero: Superhero) =>
      hero.name.toLowerCase().includes(inputValue.toLowerCase().trim())
    );
    setSearchResult(filtered);
  }, [data, inputValue]);

  // console.log(includedValue);

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
        {/* <ResultDisplay filteredResult={includedValue} /> */}
      </>
    );
  }
};
