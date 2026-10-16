
"use client";

import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { WorkoutType } from "../../../type";


interface ItemsContextType {
 addToPlan: WorkoutType[],
 setAddToPlan: Dispatch<SetStateAction<WorkoutType[]>>
 addToSaved: WorkoutType[],
 setAddToSaved: Dispatch<SetStateAction<WorkoutType[]>>
}

export const ItemsContext = createContext<ItemsContextType | null>(null);

const ItemContextProvider = ({ children }: { children: ReactNode; }) => {
  const [addToPlan, setAddToPlan] = useState([]);
  const [addToSaved, setAddToSaved] = useState([]);

  const context: ItemsContextType = {
    addToPlan,
    setAddToPlan,
    addToSaved,
    setAddToSaved,
  };

  return (
    <ItemsContext.Provider value={context}>
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemContextProvider;