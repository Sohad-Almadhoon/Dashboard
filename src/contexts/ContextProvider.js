import React, { createContext, useContext, useState } from "react";
const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};
export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [themeSettings, setThemeSettings] = useState(false);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [showCart, setShowCart] = useState(false)
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  };

  const setColor = (value) => {
    setCurrentColor(value);
    localStorage.setItem("colorMode", value);
    setThemeSettings(false);
  };
  const handleClick = (clicked) => {
    setIsClicked({ ...clicked, [clicked]: true });
  };
  return (
    <StateContext.Provider
      value={{
        showCart,
        setShowCart,
        setColor,
        currentColor,
        currentMode,
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        setThemeSettings,
        themeSettings,
        setMode,
      }}>
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
