import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './QuizDetail.css';
import Question from '../Question/Question';
const QuizDetail = () => {
    const data = useLoaderData().data;
    const questions = data.questions;
    console.log(questions);
    const [questionNo, setQuestionNo] = useState(0);

    const goToNextQuestion = () => {
        setQuestionNo(questionNo+1);
    }
    return (
        <div className='quiz-detail'>
            <h1>{data.name} Quiz Questions</h1>
            <div className='questions-container'>
                {
                    // questions.map((question,q_no) => <Question key={question.id}
                    //     question={question.question}
                    //     options={question.options}
                    //     correctAnswer={question.correctAnswer}
                    //     questionNo={q_no}></Question>)
                    <Question
                        question={questions[questionNo].question}
                        options={questions[questionNo].options}
                        correctAnswer={questions[questionNo].correctAnswer}
                        questionNo={questionNo}
                        goToNextQuestion={goToNextQuestion}></Question>
                }
            </div>

        </div>
    );
};

export default QuizDetail;