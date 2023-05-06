import { createContext ,  useState  } from "react";

 // 1. create el contexto 
export const FiltersConetent =  createContext();

//2. create provider for of context 
export function FiltersProvider  ({children})  {

       const [filter  , setFilter] = useState({
            category:'all',
             nimPrecie:0
       });
      
      return (
            <FiltersConetent.Provider value={

                {  filter , setFilter }
            } >
                  {children}
            </FiltersConetent.Provider>
      )
     
}

