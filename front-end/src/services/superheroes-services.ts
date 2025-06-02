export const fetchAllSuperheroes = async () => {
  const response = await fetch("https://akabab.github.io/superhero-api/api/all.json");
  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  console.log(response);
  return (await response.json());
};