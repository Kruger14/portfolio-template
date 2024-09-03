import React from 'react';
import '../styles/resume.css';

const Resume = () => {
    return (
        <div class="resume-container">
            <h1 class="title">Resume</h1>
            <div class="divider"></div>
            <div class="grid-container">
                <div>
                    <h2 class="section-title">
                        <img aria-hidden="true" alt="education-icon"
                            src="https://openui.fly.dev/openui/24x24.svg?text=🎓" className="icon" />
                        Education
                    </h2>
                    <div class="section-content">
                        <div class="card">
                            <p class="date">2021-2023</p>
                            <p class="role">Ph.D in Horribleness</p>
                            <p class="institution">ABC University, Los Angeles, CA</p>
                        </div>
                        <div class="card">
                            <p class="date">2019 - Present</p>
                            <p class="role">Sr. Software Tester</p>
                            <p class="institution">Google Inc.</p>
                        </div>
                        <div class="card">
                            <p class="date">2021</p>
                            <p class="role">Best Developer</p>
                            <p class="institution">University Of Melbourne, NA</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 class="section-title">
                        <img aria-hidden="true" alt="experience-icon"
                            src="https://openui.fly.dev/openui/24x24.svg?text=💼" class="icon" />
                        Experience
                    </h2>
                    <div class="section-content">
                        <div class="card">
                            <p class="date">2017-2021</p>
                            <p class="role">Computer Science</p>
                            <p class="institution">Imperialize Technical Institute</p>
                        </div>
                        <div class="card">
                            <p class="date">2015-2017</p>
                            <p class="role">Cr. Web Developer</p>
                            <p class="institution">ib-themes ltd.</p>
                        </div>
                        <div class="card">
                            <p class="date">2008</p>
                            <p class="role">Best Writter</p>
                            <p class="institution">Online Typodev Solution Ltd.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="skills-section">
                <div class="skills">
                    <h2 class="skills-title">Working Skills</h2>
                    <div class="skills-content">
                        <div class="skill">
                            <p class="skill-info">
                                <span>Web Design</span>
                                <span>80%</span>
                            </p>
                            <div class="skill-bar-bg">
                                <div class="skill-bar" style={{ width: "80%" }}></div>
                            </div>
                        </div>

                        <div class="skill">
                            <p class="skill-info">
                                <span>illustrator</span>
                                <span>80%</span>
                            </p>
                            <div class="skill-bar-bg">
                                <div class="skill-bar" style={{ width: "70%" }}></div>
                            </div>
                        </div>

                        <div class="skill">
                            <p class="skill-info">
                                <span>Web Design</span>
                                <span>80%</span>
                            </p>
                            <div class="skill-bar-bg">
                                <div class="skill-bar" style={{ width: "95%" }}></div>
                            </div>
                        </div>

                        <div class="skill">
                            <p class="skill-info">
                                <span>Web Design</span>
                                <span>80%</span>
                            </p>
                            <div class="skill-bar-bg">
                                <div class="skill-bar" style={{ width: "85%" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="knowledge">
                <h2 class="knowledge-title">Knowledges</h2>
                <div class="knowledge-content">
                    <span class="knowledge-tag">Digital Design</span>
                    <span class="knowledge-tag">Marketing</span>
                    <span class="knowledge-tag">Social Media</span>
                    <span class="knowledge-tag">Print</span>
                    <span class="knowledge-tag">Time Management</span>
                    <span class="knowledge-tag">Flexibility</span>
                    <span class="knowledge-tag">Print</span>
                    <span class="knowledge-tag">Time Management</span>
                    <span class="knowledge-tag">Flexibility</span>
                    <span class="knowledge-tag">Print</span>
                </div>
            </div>
        </div>
    )
}

export default Resume