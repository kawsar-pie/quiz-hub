import React, { useContext, useState } from 'react';
import './Question.css'
import { AnswersContext } from '../QuizDetail/QuizDetail';
import SeeAnswer from '../SeeAnswer/SeeAnswer';
import CheckAnswer from '../CheckAnswer/CheckAnswer';
import { ToastContainer } from 'react-toastify';
const Question = ({ question, questionId, questionNo, options, correctAnswer, goToNextQuestion, goToPreviousQuestion, totalQuestion }) => {
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [submit, setSubmit, marks, selectedAnswers, setSelectedAnswers] = useContext(AnswersContext);

    function handleSubmit(event) {
        event.preventDefault();
    }

    const handleSelectedAnswers = (questionId, option) => {
        setSelectedAnswers((prevSelectedAnswers) => ({
            ...prevSelectedAnswers,
            [questionId]: option,
        }));
    }


    return (
        <div className='question-body'>
            <span className='font-bold text-xl mt-6 mb-2'><h2>Quiz {questionNo + 1}: </h2><h3>{question}</h3></span>
            <div>
                <form onSubmit={handleSubmit}>
                    <span className='all-options'>
                        {options.map((option, id) => <h4 key={id}
                            onClick={(event) => { handleSelectedAnswers(questionId, option); }}
                            className={`${selectedAnswers[questionId] === option ? 'single-option selected-option' : "single-option"}`}>
                            <div className='font-bold option-field' >
                                <div className={`${selectedAnswers[questionId] === option ? 'option-no-clicked' : "option-no"}`}>{String.fromCharCode(id + 65)}</div>
                                <p className='text'>{option}</p>
                            </div>
                        </h4>)}
                    </span>
                    <div className='check-see-answer'>
                        <SeeAnswer answer={correctAnswer}></SeeAnswer>
                        <CheckAnswer answer={correctAnswer} selectedAnswer={selectedAnswers[questionId]}></CheckAnswer>
                    </div>
                    <div className='prev-next'>
                        <span className={`${questionNo === 0 ? 'submit d-none' : "submit"}`}
                            onClick={() => { goToPreviousQuestion(); }}>Previous</span>
                        {/* <SeeAnswer></SeeAnswer>
                        <CheckAnswer></CheckAnswer> */}
                        <span className={`${questionNo === totalQuestion - 1 ? 'submit d-none' : "submit"}`}
                            onClick={() => { goToNextQuestion(); }}>
                            Next</span>
                        <span className={`${questionNo === totalQuestion - 1 ? '' : "d-none"}`}>
                            <button type="submit"
                                className='submit'
                                onClick={() => { setSubmit(true); }}
                            >Submit</button>
                        </span>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div >
    );
};

export default Question;
