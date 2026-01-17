"use client"
import { toggleTheme } from "@/redux/userPreferences/userPreferencesSlice";
import React from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { MdOutlineNightlight } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";

const ToggleTheme = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.userPreferences);

  return (
    <button
      className="text-xl"
      onClick={() => {
        dispatch(toggleTheme());
      }}
    >
      {theme == "light" ? <IoSunnyOutline /> : <MdOutlineNightlight />}
    </button>
  );
};

export default ToggleTheme;
