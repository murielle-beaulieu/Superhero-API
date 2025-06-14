import { createContext, useContext, useState, type ReactNode } from "react";
import type { Superhero } from "../services/superheroes-services";

interface ModalContext {
    modalOpen: boolean;
    setModalOpen: (open: boolean) => void;
    modalHero: Superhero | null;
    setModalHero: (superhero: Superhero | null) => void;
}

const ModalContext = createContext< ModalContext | undefined>(undefined);

interface ModalContextProviderProps {
children: ReactNode;
}

export const ModalContextProvider = ({children}: ModalContextProviderProps) => {

    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [modalHero, setModalHero] = useState<Superhero | null>(null);

    return (
        <ModalContext.Provider value={{modalOpen, setModalOpen, modalHero, setModalHero}} >
        {children}
        </ModalContext.Provider>
    )
}

export const useModal = (): ModalContext => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("Something went wrong beep boop");
  }
  return context;
};