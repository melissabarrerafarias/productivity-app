import React from 'react';
import tasksWeekImg from '../images/task-list-week.svg';
import taskDayImg from '../images/task-list-everyday.svg';
import healthImg from '../images/health.svg';
import goalImg from '../images/goals.svg';

import '../homepage.css'



const HomePage = () => {
    return (
        <div class="container">
            <div className="row">
                <div className="col-md-6">
                    <img className="" src={tasksWeekImg}></img>
                </div>
                <div className="col-md-6">
                    <img className="" src={taskDayImg}></img>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <img className="" src={healthImg}></img>
                </div>
                <div className="col-md-6">
                    <img className="" src={goalImg}></img>
                </div>
            </div>

        </div>
    )
};

export default HomePage;