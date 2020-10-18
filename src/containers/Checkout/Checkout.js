import React, { useEffect, useState } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom';
import ContactData from './ContactData/ContactData';
const Checkout =(props) => {
    const [ingredients,setIngredients]=useState({});
    const [price,setPrice]=useState(0)


    useEffect (()=> {
        const query = new URLSearchParams( props.location.search );
        const ingredients = {};
        let price = 0;
        for ( let param of query.entries() ) {
            // ['salad', '1']
            if (param[0] === 'price') {
                price = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
        }
        setIngredients(ingredients);
        setPrice(price);

    },[])
  

   const checkoutCancelledHandler = () => {
       props.history.goBack();
    }

   const checkoutContinuedHandler = () => {
       props.history.replace( '/checkout/contact-data' );
    }
        return (
            <div>
                <CheckoutSummary
                    ingredients={ingredients}
                    checkoutCancelled={checkoutCancelledHandler}
                    checkoutContinued={checkoutContinuedHandler}
                     />
                     <Route path={props.match.path+'/contact-data'} component={ContactData}/>
    
            </div>
        );
    
}

export default Checkout;