import React, { createContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './QuizDetail.css';
import Question from '../Question/Question';
import Result from '../Result/Result';
export const AnswersContext = createContext([]);
const QuizDetail = () => {
    const data = useLoaderData().data;
    let marks = 0;
    const questions = data.questions;
    // console.log(questions);
    const [submit, setSubmit] = useState(false);
    const [questionNo, setQuestionNo] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const goToNextQuestion = () => {
        if (questionNo < questions.length - 1) setQuestionNo(questionNo + 1);
    }
    const goToPreviousQuestion = () => {
        if (questionNo > 0) setQuestionNo(questionNo - 1);
    }
    for (let i = 0; i < questions.length; i += 1) {
        if (questions[i].correctAnswer === selectedAnswers[questions[i].id]) marks += 1;
    }
    // console.log(marks);
    return (
        <AnswersContext.Provider value={[submit, setSubmit, marks, selectedAnswers, setSelectedAnswers]}>
            {
                submit ? <Result marks={marks} quiz={data.name}></Result> :
                    <div className='quiz-detail'>
                        <h1>{data.name} Quiz Questions</h1>
                        <div className='questions-container'>
                            {
                                <Question
                                    question={questions[questionNo].question}
                                    options={questions[questionNo].options}
                                    correctAnswer={questions[questionNo].correctAnswer}
                                    questionNo={questionNo}
                                    goToNextQuestion={goToNextQuestion}
                                    goToPreviousQuestion={goToPreviousQuestion}
                                    totalQuestion={questions.length}
                                    questionId={questions[questionNo].id}></Question>
                            }
                        </div>
                    </div>
            }

        </AnswersContext.Provider>

    );
};

export default QuizDetail;