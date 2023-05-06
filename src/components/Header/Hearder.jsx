import Nav from 'react-bootstrap/Nav';
import {Filter} from '../Filter/Filter.jsx'
import {Cart} from '../Cart/Cart.jsx';
import { FaShoppingCart } from "react-icons/fa";

export  function  Hearder(){
    return (
        <div className="container pb-5">
             <div className="row">
                <div className="col-12 headerTitel">
                     <h1>Mercado Cart  <FaShoppingCart size='500em'></FaShoppingCart></h1>
                </div>
                <div className="col-6">
                    <Nav className='justify-content-center'>  
                         <Filter></Filter>
                    </Nav>
                </div>
                <div className="col-6">
                    <Nav className='justify-content-center'>
                         <Nav.Item>
                              <Cart/>
                         </Nav.Item>
                    </Nav>
                </div>
             </div>
        </div>
    )
}