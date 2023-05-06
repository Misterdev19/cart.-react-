import { useContext } from "react";
import { FiltersConetent } from "../context/filter.jsx";

export function  userFilter(){
 
  const {filter , setFilter}  =  useContext(FiltersConetent);
 
     //return  filter of products condicional categories 
  const  filterProducts = (products)=>{
       
      return products.filter( product => {
           return ( 
               product.price >  filter.nimPrecie && (
               filter.category === 'all' || 
               product.category === filter.category)
           )
      });
  }

  return { filterProducts , setFilter , filter   }

}
