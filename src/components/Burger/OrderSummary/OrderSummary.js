import React from 'react';
import Button from '../../UI/Button/Button';
import Axu from '../../../hoc/ux/ux';
const orderSammry =(props)=>
{

    let ingredientsSammary= Object.keys(props.ingredients).map(igKey => {
        return (
            <li key={igKey}>
                <span>{igKey}</span>{' : '}
              {props.ingredients[igKey]}
               
            </li>
        );
    });
return (<Axu>
        <h3>Your Order</h3>
        <p>A Delicious Burger With Following Ingredients: </p>
               {ingredientsSammary}        
        <p>Total price: <strong>{props.price.toFixed(2)} $</strong></p>
        <p>Continue To Checkout?</p>

        <Button btnType="Danger" clicked={props.cancel}>CANCEL</Button>
        <Button btnType="Success" clicked={props.continue}>CONTINUE</Button>
    </Axu>
  
);
    
};
export default orderSammry;