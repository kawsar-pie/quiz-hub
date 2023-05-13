import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './CheckAnswer.css'
import 'react-toastify/dist/ReactToastify.css';
const CheckAnswer = ({ answer, selectedAnswer }) => {
    let notify = () => toast.success("Correct");
    if (selectedAnswer === undefined) {
        notify = () => toast.info("Please Select One!");
    }
    else if (answer !== selectedAnswer) {
        notify = () => toast.error("Wrong");
    }
    // console.log(answer, selectedAnswer);
    return (
        <div onClick={notify}>
            <p className='check-answer'>Check Answer</p>
            <ToastContainer />
        </div>
    );
};

export default CheckAnswer;