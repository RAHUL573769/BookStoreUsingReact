import React from 'react';
import Output from '../Output/Output';

const Cart = (props) => {
 
 

    const cart = props.cart;
  
   
    return (
      
        <div className='card'>
              <h1>Name of Book:</h1>
            {cart.map((item) => (
              
              
                <Output key={item.id }item={item}></Output>
               
            ))
              
            }


            <button className='btn btn-primary ' onClick={()=>props.removeItems()} >Click To Remove Items</button>




        
          
     
        </div>
    );
};

export default Cart;