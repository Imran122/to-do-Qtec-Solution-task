import useContextData from "@/hooks/useContextData";
import { createContext } from "react";

export const DataContext = createContext();

const ProviderContext = ({ children }) => {
  const allContext = useContextData();

  return (
    <DataContext.Provider value={allContext}>{children}</DataContext.Provider>
  );
};

export default ProviderContext;
