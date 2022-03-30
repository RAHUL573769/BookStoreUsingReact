import React, {  useEffect, useState } from 'react';
import bookData from '../../fakeData/bookData';
import Cart from '../Cart/Cart';
import Single from '../Singleproduct/Single';
import './Product.css'
const Product = () => {
 
    const [books, setBook] = useState(bookData);

    const [cart, setCart] = useState([0]);

    

 
  


    const handleButton = (books) => {
        const newCart = [...cart, books];
        setCart(newCart);
      
 }
    const removeItems = () => {
        const newCart = [];
        setCart(newCart);
    }
    
    return (
        <div className='shop'>
            <div className="book-container">
              
                    {
                        books.map((book) => (
                            <Single key={book.id} book={book}  handleButton={handleButton}></Single>
                        ))
                   }
                
            </div>
            <div className="cart-container">
                <Cart key={ cart.id}cart={cart} removeItems={removeItems}></Cart>
            </div>
        </div>
    );
};

export default Product;