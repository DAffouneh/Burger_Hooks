import React, { useEffect, useState} from 'react';
import Aux from '../ux/ux';
import Modal from '../../components/UI/Modal/Modal';
const withErrorHandler =(WarppedComponent, axios)=> {
    return props =>
    {
       const [error,setError]=useState(null);
       
          const reqIntercptor= axios.interceptors.request.use(req => 
            {
                setError(null);
                return req;


            });
           const resIntercptor=axios.interceptors.response.use(res => res , err => {
            setError(err);
        });
        
        useEffect (()=> {
            return ()=>
            {
                axios.interceptors.request.eject(reqIntercptor);
                axios.interceptors.response.eject(resIntercptor);
            }
            
        },[]);
      
       const errorConfirmedHandler=()=>
        {
            setError(null);

        }
      
            return (
                <Aux>
                <Modal show={error}
                modalClosed={errorConfirmedHandler}>
                    {error ? error.message : null}
                </Modal>
                <WarppedComponent {...props}/>
            </Aux>

            );
        
    }  

}
export default withErrorHandler;