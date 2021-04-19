import React from 'react';
import Manik from '../images/Manik.png';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const Profile = () => {
    return (
        <>
            <div className="container-fluid main">
                <div className="row">

                    <div className="col-12 col-sm-6 text-center image-col">
                        <img className="img-fluid image" src={Manik} alt="profilepicture" />
                    </div>
                    <div className="col-12 col-sm-6">
                       <div className="v-center">
                        <p className="text"><span style={{ textDecoration: "underline" }}>Anugya Upadhyay</span></p>
                        <p className="sub-text" style={{ textAlign: "left", color:"white" }}>Aim - To secure a challenging position where i can effectively contribute to my skills as a software professional</p>
                        <div className="row">
                            <div className="col-4 col-sm-2 m-1">
                                <a href="#about" className="btn btn-outline-light">About</a>
                            </div>
                            <div className="col-3 col-sm-2 m-1">
                                <a href="#education" className="btn btn-outline-light">Skills</a>
                            </div>
                            <div className="col-5 col-sm-3 m-1">
                                <a href="#work" className="btn btn-outline-light">Projects</a>
                            </div>
                            <div className="col-3 col-sm-2 m-1">
                                <a href="#hobbies" className="btn btn-outline-light">Hobbies & Intrests</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12 col-sm-2">
                        <p className="about" id="about">About   </p>
                    </div>
                    <div className="col-12 col-sm-10">
                        <ul className="list">
                            <li>Aim - To secure a challenging position where i can effectively contribute to my skills as a software professional</li>
                            <li>Education-Currently pursuing B.tech from Sagar Institute Of Science And Technology,Bhopal </li>
                            <li>Lives In- Sehore , Madhya Pradesh</li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 col-sm-2">
                        <p className="about" id="education">Skills  </p>
                    </div>
                    <div className="col-12 col-sm-1 mt-2">
                        <ul className="skill-list">
                            <p>HTML</p>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-1 mt-2">
                        <ul className="skill-list">
                            <p>CSS</p>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-1 mt-2">
                        <ul className="skill-list">
                            <p>JS</p>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-1 mt-2">
                        <ul className="skill-list">
                            <p>React Js</p>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-1 mt-2">
                        <ul className="skill-list">
                            <p>MySQL</p>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-1 mt-2">
                        <ul className="skill-list">
                            <p>C/C++</p>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-1 mt-2">
                        <ul className="skill-list">
                            <p>PHP</p>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-1 mt-2">
                        <ul className="skill-list">
                            <p>Content Writing</p>
                        </ul>
                    </div>
                                        <div className="col-12 col-sm-1 mt-2">
                        <ul className="skill-list">
                            <p>Public Speaking</p>
                        </ul>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 col-sm-2">
                        <p className="about " id="work">Projects</p>
                    </div>
                    <div className="col-12 col-sm-10">
                        <div className="work">
                        
                            <ul>
                                <li>
                                    <strong>Project 1  WanderWheels - Online Car Rental Application</strong>
                                    <p>Description   A minor project based on online renting of cars using concepts of HTML, CSS, JS, PHP, MySQL</p>
                                    <hr className="line" />
                                </li>
                                <li>
                                    <strong>Project 2   Library Management System</strong>
                                    <p>Description  Using File Handling in python
This project is developed in Python 3 . This project provides all functionality of O�ine Library Management System of college. </p>
                                    <hr className="line" />
                                </li>
                                <li>
                                    <strong>Project 3  Railway Reservation System</strong>
                                    <p>Description  A mini project managing the railway reservation system build using File handling in C++. </p>
                                    <hr className="line" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 col-sm-2">
                        <p className="about" id="hobbies">Hobbies  </p>
                    </div>
                    <div className="col-12 col-sm-10">
                        <ul className="list">
                            <li>Athletics</li>
                            <li>Music</li>
                            <li>Travelling</li>
                        </ul>
                    </div>
                </div>
                <footer className="footer mt-5">
                    <div className="row mt-">
                        <div className="col-12 col-sm-2">
                            <p className="about">Contact  </p>
                        </div>
                        <div className="col-3 col-sm-2 mt-2">
                            <a href="https://github.com/anugya334"><span><GitHubIcon /></span></a>
                        </div>
                        <div className="col-3 col-sm-2 mt-2">
                            <a href="mailto:anugyaupadhayay@gmail.com"><span><MailIcon /></span></a>
                        </div>
                        <div className="col-3 col-sm-2 mt-2">
                            <a href="https://www.linkedin.com/in/anugya-upadhyay-986654198"><span><LinkedInIcon /></span></a>
                        </div>
                        <div className="col-3 col-sm-2 mt-2">
                            <a href="https://www.instagram.com/anugya_upadhyay/"><span><InstagramIcon /></span></a>
                        </div>
                        <div className="col-3 col-sm-2 mt-2">
                            <a href="#" className="btn btn-sm btn-outline-dark" style={{borderRadius:"50%"}}><span><ExpandLessIcon/></span></a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Profile;
