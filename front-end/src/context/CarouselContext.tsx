import { createContext, useContext, useState, type ReactNode } from "react";

interface CarouselContext {
  today: string;
  setToday: (date: string) => void;
  savedDate: string | null;
}

const CarouselContext = createContext<CarouselContext | undefined>(undefined);

interface CarouselContextProviderProps {
  children: ReactNode;
}

export const CarouselContextProvider = ({
  children,
}: CarouselContextProviderProps) => {
  const [today, setToday] = useState<string>(new Date().toLocaleDateString());
  const [savedDate, setSavedDate] = useState<string | null>(
    localStorage.getItem("savedDate")
  );

  if (savedDate == null) {
    setSavedDate(new Date().toLocaleDateString());
  }

  return (
    <CarouselContext.Provider
      value={{ today, setToday, savedDate }}
    >
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
