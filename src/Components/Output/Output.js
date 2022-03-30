import React from 'react';

const Output = ({item}) => {
    

 

    const { name } = item || {};

    
    return (

        <div>

            <p> { name} </p>
         
        </div>
    );
};

export default Output;