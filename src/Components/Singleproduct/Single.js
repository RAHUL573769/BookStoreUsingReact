import React from 'react';
import { BiMessageSquareAdd } from 'react-icons/bi';
import './Single.css'

const Single = ({book ,handleButton}) => {



    // console.log(props);

    //Using Destructuring of Objects 

    const {  image, name, price } = book ||{};


    return (
        <div>
            <div className="card">
                <h4> Name:{ name}</h4>
                <div className="card-info">
                    <div className="card-image">
                        <img src={ image}alt="" />
                    </div>
                    <p>Price :{price}</p>
                   
                    <button onClick={()=>handleButton(book)} className='btn btn-primary'> <BiMessageSquareAdd></BiMessageSquareAdd>     Add to Cart</button>
                </div>
       </div>
        </div>
    );
};

export default Single;