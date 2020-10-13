import React from 'react';
import burgerLogo from '../../assets/Images/burger-logo.png';
import classes from './Logo.css';
const logo = (prpos)=>
(
<div className={classes.Logo}>
<img src={burgerLogo} alt="BurgerLogo" />
</div>
);

export default logo;