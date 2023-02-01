/* eslint-disable react/prop-types */
import { createContext, useState, useMemo } from "react";

const OverlayContext = createContext();

function OverlayContextProvider({ children }) {
  const [open, setOpen] = useState(false);

  const value = useMemo(() => ({
    open,
    setOpen,
  }));

  return (
    <OverlayContext.Provider value={value}>{children}</OverlayContext.Provider>
  );
}

export { OverlayContext, OverlayContextProvider };
