import { createContext, useContext, useState, type ReactNode } from "react";
import type { Superhero } from "../services/superheroes-services";

interface SearchContext {
searchResult: Superhero[];
setSearchResult: (superhero: Superhero[]) => void;
}

const SearchContext = createContext< SearchContext | undefined>(undefined);

interface SearchContextProviderProps {
children: ReactNode;
}

export const SearchContextProvider = ({children}: SearchContextProviderProps) => {

    const [searchResult, setSearchResult] = useState<Superhero[]>([]);

    return (
        <SearchContext.Provider value={{searchResult, setSearchResult}} >
        {children}
        </SearchContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useSearch = (): SearchContext => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("Something went wrong beep boop");
  }
  return context;
};