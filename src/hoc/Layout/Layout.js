import React, { useState } from 'react';
import ToolBar from '../../components/Navigation/ToolBar/ToolBar';
import classes from './Layout.css';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
const layout = (props)=>
{
   const [siderDrawer,setSiderDrawer]=useState(false);



   const drawerToggleClickedHandler =()=>
   {
    setSiderDrawer(!siderDrawer)
   }

   const sideDrawerClosedHandler =()=>
   {
       setSiderDrawer(false)
   }




    return (
        <div> 
        <ToolBar drawerToggleClicked={drawerToggleClickedHandler}></ToolBar>
        <SideDrawer 
        open={siderDrawer}
        closed= {sideDrawerClosedHandler}
        />
        <main className={classes.Content}>
            {props.children}
        </main>

        </div>
    );


    };
export default layout ;