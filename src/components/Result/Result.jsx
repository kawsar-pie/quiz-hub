import React, { useContext } from 'react';
import { AnswersContext } from '../QuizDetail/QuizDetail';
import { QuizContext } from '../Quiz/Quiz';
import './Result.css'
import { Link } from 'react-router-dom';
const Result = ({ quiz, marks }) => {
    console.log(quiz);
    return (
        <div className='result font-bold'>
            <h1 className='congo mb-5'>Congratulations!</h1>
            <h2 className='mark-detail'>You Got <span className='quiz-marks-name'>{marks} marks</span> on <span className='quiz-marks-name'>{quiz}</span> quiz.</h2>
            <Link to={`/home`} style={{textDecoration:"none"}}>
                <div className='keep-practicing'>
                    Keep practicing
                </div>
            </Link>
        </div>
    );
};

export default Result;