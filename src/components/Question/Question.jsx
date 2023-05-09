import React, { useState } from 'react';
import './Question.css'
import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
const Question = ({ question, questionNo, options, correctAnswer, goToNextQuestion, goToPreviousQuestion, totalQuestion }) => {
    const [selectedAnswer, setSelectedAnswer] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        if (selectedAnswer === correctAnswer) {
            alert("Correct");
        }
        else {
            alert("Wrong")
        }
    }
    return (
        <div className='question-body'>
            <h2>Quiz {questionNo + 1}: </h2><h3>{question}</h3>
            <div>
                <form onSubmit={handleSubmit}>
                    <span className='all-options'>
                        {options.map((option, id) => <h4 className={`single-option ${selectedAnswer === option ? 'selected-option' : ""}`}>
                            <input
                                type='radio'
                                id={id}
                                name="answer"
                                value={option}
                                // checked={selectedAnswer === option}
                                // onChange={(event) => setSelectedAnswer(event.target.value)}
                                onClick={(event) => setSelectedAnswer(event.target.value)}
                            // className='radio-button'
                            />
                            <span className='flex'><div className={`${selectedAnswer === option ? 'option-no-clicked' : "option-no"}`}>{String.fromCharCode(id + 65)}</div><div>{option}</div></span>
                            {/* <button className='single-option' onClick={(event) => setSelectedAnswer(event.target.value)}>
                                    {option}
                                </button> */}
                        </h4>)}
                        {correctAnswer}
                    </span>
                    <div className='prev-next'>
                        <span className={`submit ${questionNo === 0 ? 'd-none' : ""}`} onClick={goToPreviousQuestion}>Previous</span>
                        <span className={`submit ${questionNo === totalQuestion - 1 ? 'd-none' : ""}`} onClick={goToNextQuestion}>Next</span>
                        <button type="submit" className={`submit ${questionNo === totalQuestion - 1 ? '' : "d-none"}`} disabled={!selectedAnswer}>Submit</button>
                    </div>


                </form>
            </div>
        </div >
    );
};

export default Question;