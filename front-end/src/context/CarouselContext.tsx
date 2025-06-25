import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface CarouselContext {
  date: string;
  today: string;
  setToday: (date: string) => void;
}

const CarouselContext = createContext<CarouselContext | undefined>(undefined);

interface CarouselContextProviderProps {
  children: ReactNode;
}

export const CarouselContextProvider = ({
  children,
}: CarouselContextProviderProps) => {
  const [date, setDate] = useState<string>("");
  const [today, setToday] = useState<string>("");

  useEffect(() => {
    setDate(new Date().toISOString());
    setToday(new Date().toISOString());
    localStorage.setItem("savedDate", today);
  }, [today]);

  return (
    <CarouselContext.Provider value={{ date, today, setToday }}>
      {children}
    </CarouselContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCarousel = (): CarouselContext => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("Something went wrong beep boop");
  }
  return context;
};
