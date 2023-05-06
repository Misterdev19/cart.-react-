import { useCart } from '../../hooks/userCart';
import './Products.css';
import { BsFillCartPlusFill , BsFillCartXFill} from "react-icons/bs";

export function Products ({productsList}){ 

    const {addToCart , removeFroCart  ,cart}  =  useCart();

    const checkProductCart =(product)=>{
            return  cart.some(item => item.id === product.id);
    }
       
     return (

          <div className="container pb-3">
              <div className="row">
                  {
                    productsList.slice(0, 10).map((elemnt ) => {
              
                                  const {id ,title , description ,price , thumbnail  } = elemnt;
                                  const   thumbnailImg  =  thumbnail;

                                const  existProductCart =   checkProductCart(elemnt);
    
                               return (
                                <>
                                    <div className="col-md-3 products" key={id}>
                                        <div className="card">
                                        <div className="card-img">
                                            <img src={thumbnailImg} alt="" style={{width:"223px" , height:"100px"}} />
                                        </div>
                                        <div className="card-info">
                                            <p className="text-title">{title} </p>
                                            <p className="text-body">{description}</p>
                                        </div>
                                        <div className="card-footer">
                                        <span className="text-title">$ {price}</span>
                                            <button className={existProductCart ? 'card-button-rm' :'card-button'} 
                                              
                                              onClick={ 
                                                ()=> existProductCart ? removeFroCart(elemnt) : addToCart(elemnt)}> 
                                              {
                                                 existProductCart ? 
                                                 <BsFillCartXFill></BsFillCartXFill>
                                                 :
                                                 <BsFillCartPlusFill></BsFillCartPlusFill>
                                              }
                                            </button>
                                        </div></div>
                                    </div>
                                </>
                            )
                     })
                  }
              </div>
          </div>
         
     )
}