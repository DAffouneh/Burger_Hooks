import React, { useState } from 'react';
import useHttpErrorHandler from '../../hooks/httpeErrorHandler';
import Modal from '../../components/UI/Modal/Modal';
const withErrorHandler =(warppedComopnent,axios)=>
{
    return props=> {
        const [error,clearError]=useHttpErrorHandler(axios);
    }
return (
    <div>
        <Modal> 

        </Modal>
    </div>
);
};

export default withErrorHandler;