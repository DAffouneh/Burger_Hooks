import React, { Component } from 'react';
import ToolBar from './components/Navigation/ToolBar/ToolBar';
import Layout from  './hoc/Layout/Layout';
import React from 'react';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

 const App = props => {

    return (
      <div >
        <Layout/>
          <BurgerBuilder />
            <div>

    );
  
}

export default App;
