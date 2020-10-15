//import React, { Component } from 'react';
import React, { useState } from 'react';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BurgerControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSammary from '../../components/Burger/OrderSummary/OrderSummary';
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const burgerBuilder=props=> { 
    const [ingredients,setIngredients]=useState({ salad: 0,bacon: 0,cheese: 0, meat: 0})
    const [totalPrice,setTotalPrice]=useState(4)
    const [purchasable,setPurchasing]=useState(false)
    const [purchasing,setPurchasingT]=useState(false)

   

   const updatePurchaseState= (ingredients) =>{
        const sum = Object.keys( ingredients )
            .map( igKey => {
                return ingredients[igKey];
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );
            setPurchasing( sum > 0 )
    }
    const purchasingHandler =()=>
    {
        setPurchasingT(true);
    }
    
     const addIngredientHandler = ( type ) => {
        const oldCount = ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = totalPrice;
        const newPrice = oldPrice + priceAddition;
        setTotalPrice(newPrice)
        setIngredients(updatedIngredients)
        updatePurchaseState(updatedIngredients);
    }

   const removeIngredientHandler = ( type ) => {
        const oldCount = ingredients[type];
        if ( oldCount <= 0 ) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = totalPrice;
        const newPrice = oldPrice - priceDeduction;
        setTotalPrice(newPrice)
        setIngredients(updatedIngredients)
        updatePurchaseState(updatedIngredients);
    }

    const modalremovalHandler=()=> 
    {
        setPurchasingT(false);

    }
    
        const disabledInfo= {
            ...ingredients
        };
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
    
    }
  const  purchaseCancelHandler =()=>
{
   setPurchasingT(false);
}
    const purchaseContinueHandler =()=>
{
    alert("you continue!")

}
        return (
            <div>
                <Modal show={purchasing} modalClosed={modalremovalHandler}>
                    <OrderSammary ingredients={ingredients}
                     price={totalPrice} 
                     cancel={purchaseCancelHandler}
                     continue={purchaseContinueHandler}/>

                </Modal>
                <Burger ingredients={ingredients} />
                <BurgerControls
                    ingredientAdded={addIngredientHandler}
                    ingredientRemoved={removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={purchasable}
                    order={purchasingHandler}
                    price={totalPrice} />
            </div>
        );
    }


export default burgerBuilder;