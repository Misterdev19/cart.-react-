import { createContext  , useState } from "react";


export const CartContext  =  createContext();


export function CartProvider({children}){

    const [cart , setCart] = useState([]);
    

    const addToCart = product  => {
         //check  if the product is already  in the cart
         const productInCartIndex =  cart.findIndex(item =>  item.id  ===  product.id);
         if(productInCartIndex >=  0){
            const  newCart  = structuredClone(cart);
            newCart[productInCartIndex].quantity +=1
            setCart(newCart);
         }else{
             //si no esta en el carrro
            setCart(prevState => ([
                 ...prevState,
                 {
                    ...product,
                    quantity : 1
                 }
            ]));

         }    
        
    }

    const romeveToCart  = (product) =>{

        const productInCartIndex =  cart.findIndex(item =>  item.id  ===  product.id);

        if(productInCartIndex >=  0  &&  product.quantity > 1 ){
           const  newCart  = structuredClone(cart);
           newCart[productInCartIndex].quantity -=1
           setCart(newCart);
        }
    }    
    
    const  removeFroCart  = product =>{
          setCart(prevState  => prevState.filter(item => item.id !==  product.id));
    }

    const  clearCart = ()=>{
          setCart([]);
    }

    return (
        <CartContext.Provider 
         value={{
             cart,
            addToCart,
            removeFroCart,
            clearCart,
            romeveToCart
                }}>
                {children}
        </CartContext.Provider>

    );

}