import React, { useState } from 'react';
import Burger from '../../components/Burger/Burger';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
 const BurgerBuilder = props => {
   
    const [ingredients]=useState({salad:0,bacon:0,cheese:0,meat:0});
    
   

   
        return (
            <div>
                <Modal >
                <OrderSummary ingredients={ingredients} />
                </Modal>
                <Burger ingredients={ingredients} /> 
                
            </div>

        );
    
}

export default BurgerBuilder;
