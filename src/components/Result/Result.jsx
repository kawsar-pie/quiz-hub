import React, { useContext } from 'react';
import { AnswersContext } from '../QuizDetail/QuizDetail';
import { QuizContext } from '../Quiz/Quiz';

const Result = () => {
    const [marks, selectedAnswers, setSelectedAnswers] = useContext(AnswersContext);
    const quiz = useContext(QuizContext);
    return (
        <div>
            <h2>Wow! You Got {marks} marks on {quiz.name} quiz. Keep practicing...</h2>
        </div>
    );
};

export default Result;