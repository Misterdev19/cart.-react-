import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import { useCart } from '../../hooks/userCart';

import { FaShoppingCart } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { FaPrescriptionBottle } from "react-icons/fa";
import'../Cart/Cart.css';

function  CartItem ({title  ,price , thumbnail , quantity , addToCart , romeveToCart})  {
                  
  return  (

   <ListGroup.Item
   as="li"
   className="d-flex justify-content-between align-items-start"
     >
       <div className="col-md-3">
           <Image src={thumbnail}  thumbnail    style={{width:'100%'}}/>
       </div>
       <div className="ms-2 me-auto">
       <div className="fw-bold">{title}</div>
       <p>$ {price}</p>
       </div>
       <div className="">
           <Badge bg="primary" pill>
           {quantity}
           </Badge>
       </div>
       <div className="ms-1 ">
           <button className='btn btn-success' onClick={addToCart} ><FaPlusCircle/></button>
       </div>
       <div className="ms-1 ">
           <button className='btn btn-danger'><FaPrescriptionBottle onClick={romeveToCart} ></FaPrescriptionBottle></button>
       </div>
    </ListGroup.Item>

  )
}

 
export  function Cart() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {cart , addToCart  , clearCart , romeveToCart } =useCart();
   
  const  ListCartExit = (cart)=>{

        return  cart.length  == 0  ?  true : false; 
  } 

  return (
    <>
      <button className="btn-shine  btnCartModal"  onClick={handleShow}>
             <FaShoppingCart/>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup as="ol" numbered>
              { 
                
                  
                  cart.map( product   => { 
                      
                    return(  
                       <CartItem 
                          key={product.id}  
                          addToCart={()=> addToCart(product)}
                          romeveToCart={()=>romeveToCart(product)}
                          {...product}
                      />
                      
                     )
                       
                  })
                
              }
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {

            ListCartExit(cart) ? '' : <Button variant="danger" onClick={clearCart}>
            Eliminar lista
            </Button>
          }

        </Modal.Footer>
      </Modal>
    </>
  );
}

