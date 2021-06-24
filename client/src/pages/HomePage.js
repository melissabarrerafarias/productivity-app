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
                                background-color: black;
                            }
                       `}
                    </style>
                </Helmet>
            <div className="row m-3">
                <div className="col d-flex justify-content-center hub-borders">
                    {/* <h3 className="hub-titles">Week</h3> */}
                    <img className="" src={tasksWeekImg}></img>
                </div>
                <div className="col d-flex justify-content-center hub-borders">
                    <img className="" src={taskDayImg}></img>
                </div>
            </div>

            <div className="row m-3">
                <div className="col d-flex justify-content-center hub-borders">
                    <img className="" src={healthImg}></img>
                </div>
                <div className="col d-flex justify-content-center hub-borders">
                    <img className="" src={goalImg}></img>
                </div>
            </div>

        </div>
    )
};

export default HomePage;