import React from 'react';
import Helmet from 'react-helmet';

import tasksWeekImg from '../images/task-list-week.svg';
import taskDayImg from '../images/task-list-everyday.svg';
import healthImg from '../images/health.svg';
import goalImg from '../images/goals.svg';

import '../homepage.css'



const HomePage = () => {
    return (
        <div class="container">
            <Helmet>
                <style>
                    {`
                            body {
                                background-color: #F2F2F2;
                            }
                       `}
                </style>
            </Helmet>
            <div className="row m-3">
                <div className="col d-flex justify-content-center hub-borders" id="week-div">
                    <img className="" src={tasksWeekImg}></img>
                    <p id="week">Week</p>
                </div>
                <div className="col d-flex justify-content-center hub-borders" id="day-div">
                    <img className="" src={taskDayImg}></img>
                    <p id="day">Everyday</p>
                </div>
            </div>

            <div className="row m-3">
                <div className="col d-flex justify-content-center hub-borders" id="health-div">
                    <img className="" src={healthImg}></img>
                    <p id="health">Health</p>
                </div>
                <div className="col d-flex justify-content-center hub-borders" id="goal-div">
                    <img className="" src={goalImg}></img>
                    <p id="goals">Goals</p>
                </div>
            </div>

        </div>
    )
};

export default HomePage;