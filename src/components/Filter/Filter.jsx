import { useState , useId } from 'react';
import Nav from 'react-bootstrap/Nav';
import {userFilter} from  '../../hooks/userFilter.jsx'


export function Filter (){
     
     const { filter ,  setFilter } = userFilter();
   
     const  idMinPrice  =  useId();
     const  idCategory  =  useId();
    
     const handleChangeMinPrice = (event) =>{

          setFilter(prevState  =>  ({
                ...prevState,
                 nimPrecie: event.target.value
            }));
            
     }

     const handleChangeCategory = (event) =>{
          
          setFilter( prevState => ({
                 ...prevState,
                 category: event.target.value
           }));
     }


    return (
          <>     
               <Nav.Item className='' style={{marginRight:'10px'}}>
                    <label  className="form-label" htmlFor={idMinPrice}>Price</label>
                    <input 
                         type="range" 
                         min='0' 
                         max='1000' 
                         className="form-range" 
                         id={idMinPrice}
                         onChange={handleChangeMinPrice}
                         value={filter.nimPrecie}
                         />
                    <div className="text-center">
                         <span>${filter.nimPrecie}</span>
                    </div>
                </Nav.Item>  
                <Nav.Item>
                     <label htmlFor={idCategory}>Category</label>
                     <select onChange={handleChangeCategory} className='form-select' name="" id="category" defaultValue="default">
                          <option id={idCategory}>Seleccionar</option>
                          <option value="all">All</option>
                          <option value="laptops">Portatiles</option>
                          <option value="smartphones">Celulares</option>
                     </select>
                </Nav.Item>
          </>
    )
}