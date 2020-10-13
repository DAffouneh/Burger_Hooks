import React from 'react';
import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
const sidedrawer = (props)=> {
let attacedClass= [classes.SideDrawer , classes.Close];
if(props.open)
{
    attacedClass= [classes.SideDrawer , classes.Open];
}

return (
    <div className={attacedClass.join(' ')}>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav>
            <NavigationItems />
        </nav>
    </div>

);



};
export default sidedrawer;