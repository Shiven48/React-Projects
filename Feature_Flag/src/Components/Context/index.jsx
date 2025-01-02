import { createContext, useEffect, useState } from "react";
import FeatureFlagServiceCall from "../data.js";

export const featureFlagsGlobalContext = createContext(null)

export default function FeatureFlagGlobalContext({children}){

    const[loading, setLoading] = useState(false)
    const[enabledFlags, setEnabledFlags] = useState({})

    useEffect(() => {
        fetchFeatureFlags();
    },[])

    const fetchFeatureFlags = async() => {
        try{
            setLoading(true)
            const response =await FeatureFlagServiceCall();
            setEnabledFlags(response);
            setLoading(false)
        } catch(error){
            console.log(error)
            setLoading(false)
            throw new Error(error);
        }
    }

  return(
  <featureFlagsGlobalContext.Provider value={{loading, enabledFlags}}>
    {children}
  </featureFlagsGlobalContext.Provider>
  );
} 