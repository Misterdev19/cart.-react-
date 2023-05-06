import { useState } from "react";
import { Products } from "./components/Products/Products.jsx";
import {Hearder} from './components/Header/Hearder.jsx';
import {Footer} from './components/Footer/Footer.jsx'
import { products as inicialProducts  } from "./mocks/products.json";
import {userFilter} from './hooks/userFilter.jsx';
import { CartProvider } from "./context/cart.jsx";


function App() {

    const  [products]  = useState(inicialProducts);

    const {filterProducts} = userFilter();

  return (
     <CartProvider>
       <Hearder/>
       <Products productsList={filterProducts(products)}></Products>
       <Footer/>
     </CartProvider>
    
  )
}

export default App
