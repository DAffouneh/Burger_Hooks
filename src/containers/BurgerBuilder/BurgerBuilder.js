import React, { useState } from 'react';
import Burger from '../../components/Burger/Burger';

 const BurgerBuilder = props => {
   
    const [ingredients]=useState({salad:0,bacon:0,cheese:0,meat:0});
   
   
        return (
            <div>
                 <Burger ingredients={ingredients} /> 
                
            </div>

        );
    
}

export default BurgerBuilder;
