import Layout from  './hoc/Layout/Layout';
import React from 'react';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import {Route,Switch} from 'react-router-dom';
import Checkout from './containers/Checkout/Checkout';
 const App = props => {

    return (
      <div >
        <Layout>
          <Switch>
          <Route path="/checkout" component={Checkout}  />
          <Route path="/" exact component={BurgerBuilder}  />
          </Switch>
        </Layout>
            </div>

    );
  
}

export default App;
