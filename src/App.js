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
          <Route path="/" exact component={BurgerBuilder}  />
          <Route path="/checkout" component={Checkout}  />
          </Switch>
        </Layout>
            </div>

    );
  
}

export default App;
