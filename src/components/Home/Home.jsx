import React from 'react';
// import img from '';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
const Home = () => {
    const quizes = useLoaderData().data;
    // console.log(quizes)
    return (
        <div className='home'>
            {/* <h2>This is Home</h2> */}
            <img src="/images/Quiz Hub Banner.png" alt="" />
            <div className='quizes'>
                {
                    quizes.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
                }
            </div>

        </div>
    );
};

export default Home;