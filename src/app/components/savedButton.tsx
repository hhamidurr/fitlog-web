"use client";

import { Bookmark } from "lucide-react";
import React, { useContext } from "react";
import { ItemsContext } from "./context/appContext";
import { Bounce, toast } from "react-toastify";

const SavedButton = ({ item }) => {
  const { addToSaved, setAddToSaved } = useContext(ItemsContext);

  const hanbleSavedItems = () => {
    const alreadyAdded = addToSaved.some((items) => items.id === item.id);

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
      setAddToSaved((prevItems) => [...prevItems, item]);
    }
  };
  return (
    <button
      onClick={() => hanbleSavedItems()}
      type="button"
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#353945] px-5 py-3 text-sm font-medium text-white transition hover:border-[#CCFF00] hover:text-[#CCFF00]"
    >
      <Bookmark size={18} />
      Save for later
    </button>
  );
};

export default SavedButton;
