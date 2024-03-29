import React from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Axu from '../../../hoc/ux/ux';
const modal = (props)=> {
return (
<Axu>
  <Backdrop show={props.show} clicked={props.modalClosed}/>
<div
    className={classes.Modal} style={{
      transform: props.show ? 'translateY(0)':'translateY(-100vh)',
      opacity : props.show ? '1':'0'

 }}>

    {props.children}
  </div>
</Axu>
 
);



};
export default modal;