import React from 'react';
import '../styles/resume.css';

const Resume = () => {
    return (
        <div className="resume-container">
            <h1 className="title">Resume</h1>
            <div className="divider"></div>
            <div className="grid-container">
                <div>
                    <h2 className="section-title">
                        <img aria-hidden="true" alt="education-icon"
                            src="https://openui.fly.dev/openui/24x24.svg?text=🎓" className="icon" />
                        Education
                    </h2>
                    <div className="section-content">
                        <div className="card">
                            <p className="date">2021-2023</p>
                            <p className="role">Ph.D in Horribleness</p>
                            <p className="institution">ABC University, Los Angeles, CA</p>
                        </div>
                        <div className="card">
                            <p className="date">2019 - Present</p>
                            <p className="role">Sr. Software Tester</p>
                            <p className="institution">Google Inc.</p>
                        </div>
                        <div className="card">
                            <p className="date">2021</p>
                            <p className="role">Best Developer</p>
                            <p className="institution">University Of Melbourne, NA</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="section-title">
                        <img aria-hidden="true" alt="experience-icon"
                            src="https://openui.fly.dev/openui/24x24.svg?text=💼" className="icon" />
                        Experience
                    </h2>
                    <div className="section-content">
                        <div className="card">
                            <p className="date">2017-2021</p>
                            <p className="role">Computer Science</p>
                            <p className="institution">Imperialize Technical Institute</p>
                        </div>
                        <div className="card">
                            <p className="date">2015-2017</p>
                            <p className="role">Cr. Web Developer</p>
                            <p className="institution">ib-themes ltd.</p>
                        </div>
                        <div className="card">
                            <p className="date">2008</p>
                            <p className="role">Best Writter</p>
                            <p className="institution">Online Typodev Solution Ltd.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="skills-section">
                <div className="skills">
                    <h2 className="skills-title">Working Skills</h2>
                    <div className="skills-content">
                        <div className="skill">
                            <p className="skill-info">
                                <span>Web Design</span>
                                <span>80%</span>
                            </p>
                            <div className="skill-bar-bg">
                                <div className="skill-bar" style={{ width: "80%" }}></div>
                            </div>
                        </div>

                        <div className="skill">
                            <p className="skill-info">
                                <span>illustrator</span>
                                <span>80%</span>
                            </p>
                            <div className="skill-bar-bg">
                                <div className="skill-bar" style={{ width: "70%" }}></div>
                            </div>
                        </div>

                        <div className="skill">
                            <p className="skill-info">
                                <span>Web Design</span>
                                <span>80%</span>
                            </p>
                            <div className="skill-bar-bg">
                                <div className="skill-bar" style={{ width: "95%" }}></div>
                            </div>
                        </div>

                        <div className="skill">
                            <p className="skill-info">
                                <span>Web Design</span>
                                <span>80%</span>
                            </p>
                            <div className="skill-bar-bg">
                                <div className="skill-bar" style={{ width: "85%" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="knowledge">
                <h2 className="knowledge-title">Knowledges</h2>
                <div className="knowledge-content">
                    <span className="knowledge-tag">Digital Design</span>
                    <span className="knowledge-tag">Marketing</span>
                    <span className="knowledge-tag">Social Media</span>
                    <span className="knowledge-tag">Print</span>
                    <span className="knowledge-tag">Time Management</span>
                    <span className="knowledge-tag">Flexibility</span>
                    <span className="knowledge-tag">Print</span>
                    <span className="knowledge-tag">Time Management</span>
                    <span className="knowledge-tag">Flexibility</span>
                    <span className="knowledge-tag">Print</span>
                </div>
            </div>
        </div>
    )
}

export default Resume