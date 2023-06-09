import React, { createContext, useState } from 'react';
import './Quiz.css'
import { Link } from 'react-router-dom';
export const QuizContext = createContext(undefined);
const Quiz = ({ quiz }) => {
    const [currentQuiz, setCurrentQuiz] = useState(quiz.name);
    return (
        <QuizContext.Provider value={currentQuiz}>
            <div className='quiz shadow-lg shadow-cyan-500/50'>
                <img src={`/images/${quiz.name}.png`} alt="" />
                <div className='quiz-details'>
                    <h3 className='quiz-name'>{quiz.name}</h3>
                    <p className='total-quiz'><small>{quiz.total} Quizes</small></p>
                    <Link to={`/quizes/${quiz.id}`}><button className='quiz-btn'>Start Quiz</button></Link>
                </div>
            </div>
        </QuizContext.Provider>

    );
};

export default Quiz;    