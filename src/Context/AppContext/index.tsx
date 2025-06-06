/* eslint-disable react-refresh/only-export-components */
import type React from "react";
import { createContext, useContext, useMemo, useState } from "react";
import { cardConfig, type CardContent, type Team } from "../../constant";
import dayjs, { Dayjs } from "dayjs";

export type AppContext = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  usetname: string;
  setUsetname: React.Dispatch<React.SetStateAction<string>>;
  birthday: Dayjs | null;
  setBirthday: React.Dispatch<React.SetStateAction<Dayjs | null>>;
  team: Team | undefined;
  setTeam: React.Dispatch<React.SetStateAction<Team | undefined>>;
  selectedCard: string;
  setSelectedCard: React.Dispatch<React.SetStateAction<string>>;
  cardResult: CardContent[];
};

function shuffle<T>(array: T[]) {
  let currentIndex = array.length;
  const newArray = [...array];
  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex],
      newArray[currentIndex],
    ];
  }
  return newArray;
}

const AppContext = createContext<AppContext>({} as AppContext);
export default function AppContextProvider({ children }: { children: React.ReactNode }) {
  const [step, setStep] = useState(0);
  const [usetname, setUsetname] = useState("");
  const [birthday, setBirthday] = useState<Dayjs | null>(dayjs("2025-06-06"));
  const [team, setTeam] = useState<Team | undefined>(undefined);
  const [selectedCard, setSelectedCard] = useState<string>("");
  const cardResult = useMemo(() => {
    if (team) {
      const shuffedCard = shuffle<CardContent>(cardConfig[team] || []);
      const res = [
        ...shuffedCard,
        ...shuffedCard,
        ...shuffedCard,
        ...shuffedCard,
        ...shuffedCard,
        ...shuffedCard,
      ].slice(0, 25);
      return res;
    } else return [];
  }, [team]);

  const contextValue = useMemo(
    () => ({
      step,
      setStep,
      usetname,
      setUsetname,
      birthday,
      setBirthday,
      team,
      setTeam,
      selectedCard,
      setSelectedCard,
      cardResult,
    }),
    [step, usetname, birthday, team, selectedCard, cardResult]
  );
  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}
export const useAppContext = () => useContext(AppContext);
