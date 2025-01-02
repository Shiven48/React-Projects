import { createContext } from "react";

export const featureFlagsGlobalContext = createContext(null)

export default function FeatureFlagGlobalContext({children}){
  return(
  <featureFlagsGlobalContext.Provider value={{}}>
    {children}
  </featureFlagsGlobalContext.Provider>
  );
} 