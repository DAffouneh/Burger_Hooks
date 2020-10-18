
import React, { useState,useEffect} from 'react';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BurgerControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSammary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Aux from '../../hoc/ux/ux'
import Spinner from '../../components/UI/Spinner/Spinner'
import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const burgerBuilder=props=> { 
    const [ingredients,setIngredients]=useState(null)
    const [totalPrice,setTotalPrice]=useState(4)
    const [purchasable,setPurchasing]=useState(false)
    const [purchasing,setPurchasingT]=useState(false)
    const[loading,setLoading]=useState(false)
    const[error,setError]=useState(false)

   

    useEffect (async ()=> {
        
        await axios.get('https://react-my-burger-6ba03.firebaseio.com/ingredients.json')
        .then(response => {
            setIngredients(response.data);
                      })
                      .catch(error =>{
                          setError(true)
                      });

    },[])


   

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
  //   setLoading(true)
   // const order = {
     //   ingredients:ingredients,
      //  price:totalPrice,
      //  customer: {
       //     name: 'baker',
       //     address: {
       //         street: 'Teststreet 1',
       //         zipCode: '41351',
       //         country: 'Germany'
        //    },
        //    email: 'test@test.com'
       // },
       // deliveryMethod: 'fastest'
   // }
    // axios.post( '/orders.json', order )
   
       // .then( response => {
        //   setLoading(false)
        //   setPurchasingT(false)
        
     //   } )
      //  .catch( error => {
      //      setLoading(false)
      //     setPurchasingT(false)
      //  } );
      const queryParams = [];
      for (let i in ingredients) {
          queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(ingredients[i]));
      }
      queryParams.push('price=' + totalPrice);
      const queryString = queryParams.join('&');
      props.history.push({
          pathname: '/checkout',
          search: '?' + queryString
      });

}
let OrderSummary= null;
let burger=error ? <p>Ingredients can't be loaded!</p>:<Spinner />
if(ingredients)
{
    burger = (
        <Aux>
            <Burger ingredients={ingredients} />
            <BurgerControls
            ingredientAdded={addIngredientHandler}
            ingredientRemoved={removeIngredientHandler}
            disabled={disabledInfo}
            purchasable={purchasable}
            order={purchasingHandler}
            price={totalPrice} /></Aux>
    );
    OrderSummary= <OrderSammary 
    ingredients={ingredients}
    price={totalPrice} 
    cancel={purchaseCancelHandler}
    continue={purchaseContinueHandler}/>
}
if(loading)
{
    OrderSummary=<Spinner />
}
 
        return (
            <Aux>
                <Modal show={purchasing} modalClosed={modalremovalHandler}>  
                 {OrderSummary}
                </Modal>
               {burger}
            </Aux>
        );
    }


export default WithErrorHandler( burgerBuilder,axios);