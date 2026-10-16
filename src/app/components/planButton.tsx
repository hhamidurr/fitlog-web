"use client"

import { CalendarPlus } from "lucide-react";
import React, { useContext } from "react";
import { ItemsContext } from "./context/appContext";
import { Bounce, toast } from "react-toastify";

const PlanButton = ({ item }) => {
  const { addToPlan, setAddToPlan } = useContext(ItemsContext);

  const handleItem = () => {
    
    const alreadyAdded = addToPlan.some((items) => items.id === item.id);
    
    if (alreadyAdded) {
      toast.error(`${item.name} is allready added`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    } else {
      toast.success(`${item.name} is add successfully`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setAddToPlan((prevItems) => [...prevItems, item]);
    }
  }
  return (
    <button
      onClick={() => handleItem()}
      type="button"
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#CCFF00] px-5 py-3 cursor-pointer text-sm font-bold text-black transition hover:bg-[#B8E600]"
    >
      <CalendarPlus size={18} />
      Add to today&apos;s plan
    </button>
  );
};

export default PlanButton;
