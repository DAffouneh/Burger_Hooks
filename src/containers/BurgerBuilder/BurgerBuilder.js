//import React, { Component } from 'react';
import React, { useState } from 'react';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BurgerControls';

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

    
        const disabledInfo= {
            ...ingredients
        };
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <div>
                <Burger ingredients={ingredients} />
                <BurgerControls
                    ingredientAdded={addIngredientHandler}
                    ingredientRemoved={removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={purchasable}
                    price={totalPrice} />
            </div>
        );
    }

export default burgerBuilder;