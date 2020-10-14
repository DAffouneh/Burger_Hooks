import React from 'react';
const orderSammry =(props)=>
{

    let ingredientsSammary= Object.keys(props.ingredients).map(igKey => {
        return (
            <li key={igKey}>
                <span>{igKey}</span>{' : '}
              {props.ingredients[igKey]}
               
            </li>
        );
    })
return (
    <div>
        <h3>Your Order</h3>
        <p>A Delicious Burger With Following Ingredients: </p>
               {ingredientsSammary}        
        <p>Total price: <strong> 5.5 $</strong></p>
        <p>Continue To Checkout?</p>



    </div>
);
    
};
export default orderSammry;