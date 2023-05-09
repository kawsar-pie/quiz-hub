import React, { useContext, useState } from 'react';
import './Question.css'
import { AnswersContext } from '../QuizDetail/QuizDetail';
import { Link } from 'react-router-dom';
import { QuizContext } from '../Quiz/Quiz';
const Question = ({ question, questionId, questionNo, options, correctAnswer, goToNextQuestion, goToPreviousQuestion, totalQuestion }) => {
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [marks, selectedAnswers, setSelectedAnswers] = useContext(AnswersContext);
    const quiz = useContext(QuizContext);
    function handleSubmit(event) {
        event.preventDefault();
        alert(`You Got ${marks} marks`);
        console.log(selectedAnswers);
        // if (selectedAnswer === correctAnswer) {
        //     alert(`You Got ${marks} marks`);
        // }
        // else {
        //     alert("Wrong")
        // }
    }
    const handleSelectedAnswers = (questionId, option) => {
        setSelectedAnswers((prevSelectedAnswers) => ({
            ...prevSelectedAnswers,
            [questionId]: option,
        }));
    }
    return (
        <div className='question-body'>
            <h2>Quiz {questionNo + 1}: </h2><h3>{question}</h3>
            <div>
                <form onSubmit={handleSubmit}>
                    <span className='all-options'>
                        {options.map((option, id) => <h4 className={`${selectedAnswer === option ? 'single-option selected-option' : "single-option"}`}>
                            <div className='option-field'>
                                <div className={`${selectedAnswer === option ? 'option-no-clicked' : "option-no"}`}>{String.fromCharCode(id + 65)}</div>
                                <p className='text' onClick={(event) => setSelectedAnswer(event.target.innerText)}>{option}</p>
                            </div>
                        </h4>)}
                        {correctAnswer}
                        {selectedAnswer}
                    </span>
                    <div className='prev-next'>
                        <span className={`${questionNo === 0 ? 'submit d-none' : "submit"}`} onClick={goToPreviousQuestion}>Previous</span>
                        <span className={`${questionNo === totalQuestion - 1 ? 'submit d-none' : "submit"}`} disabled={!selectedAnswer} onClick={() => { goToNextQuestion(); handleSelectedAnswers(questionId, selectedAnswer) }}>Next</span>
                        <button type="submit" onClick={() => handleSelectedAnswers(questionId, selectedAnswer)} className={`${questionNo === totalQuestion - 1 ? 'submit' : "submit d-none"}`} disabled={!selectedAnswer}><Link to={`/quizes/${quiz.id}/result`}>Submit</Link></button>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default Question;