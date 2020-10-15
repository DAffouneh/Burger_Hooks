import React from 'react';
import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import Axu from '../../../hoc/ux/ux';
import Backdrop from '../../UI/Backdrop/Backdrop';
const sidedrawer = (props)=> {
let attacedClass= [classes.SideDrawer , classes.Close];
if(props.open)
{
    attacedClass= [classes.SideDrawer , classes.Open];
}

return (
    <Axu>
        <Backdrop show={props.open} clicked={props.closed}></Backdrop>
        <div className={attacedClass.join(' ')}>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav>
            <NavigationItems />
        </nav>
    </div>

    </Axu>
    

);



};
export default sidedrawer;