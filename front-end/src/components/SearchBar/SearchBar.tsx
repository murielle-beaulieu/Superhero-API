import { useEffect, useState } from "react";
import {
  fetchAllSuperheroes,
  type Superhero,
} from "../../services/superheroes-services";
import { useQuery } from "@tanstack/react-query";

export const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [includedValue, setIncludedValue] = useState([]);

  const { data, isSuccess } = useQuery({
    queryKey: ["superheroes"],
    queryFn: fetchAllSuperheroes,
  });

  useEffect(() => {
    if (isSuccess && data) {
      setIncludedValue(data);
    }
  }, [data, isSuccess]);

  useEffect(() => {
    const filtered = data.filter((hero: Superhero) =>
      hero.name.toLowerCase().includes(inputValue.toLowerCase().trim())
    );
    setIncludedValue(filtered);
  }, [data, inputValue]);

  console.log(includedValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  if (data) {
    return (
      <form>
        <label>
          Input Value:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
        <p>Input Value: {inputValue}</p>
      </form>
    );
  }
};
