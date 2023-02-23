import React, { useState, useContext, createContext } from "react";

type PropsType = {
  children: React.ReactElement;
};
type contextType = {
  isLoading: boolean;
  setIsLoading: (p: boolean) => void;
};
export const LoadContext = createContext<contextType | undefined>(undefined);
export default function LoadContextProvider({ children }: PropsType) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LoadContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadContext.Provider>
  );
}
export const useLoader = () => useContext(LoadContext);
