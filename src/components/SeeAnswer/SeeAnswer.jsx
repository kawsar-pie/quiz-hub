import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SeeAnswer.css'
const SeeAnswer = ({answer}) => {
    const notify = () => toast.info(answer);
    return (
        <div onClick={notify} >
            <p className='see-answer'>See Answer</p>
            <ToastContainer />
        </div>
    );
};

export default SeeAnswer;