import React from 'react';
import './Quiz.css'
import { Link } from 'react-router-dom';
const Quiz = ({ quiz }) => {
    return (
        <div className='quiz shadow-lg shadow-cyan-500/50'>
            <img src={`/images/${quiz.name}.png`} alt="" />
            <div className='quiz-details'>
                <h3 className='quiz-name'>{quiz.name}</h3>
                <p className='total-quiz'><small>{quiz.total} Quizes</small></p>
                <Link to={`/quizes/${quiz.id}`}><button className='quiz-btn'>Start Quiz</button></Link>
            </div>
        </div>
    );
};

export default Quiz;    