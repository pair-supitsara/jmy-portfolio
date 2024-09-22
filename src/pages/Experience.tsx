import Motion from '../components/motion'

function Experience() {

    return (
        <Motion>
            <div className="full-page">
                <div className="card">
                    <h1 className="header">Experience</h1>
                    <div className='card-detail horizontal'>
                        <div className='sub-card-detail'>
                            <div className='sub-header-with-date'>
                                <h3 className="sub-topic">Full-stack developer at Silkspan Co. Ltd.</h3>
                                <span className="date-range">22th Sep 2021 - 17th May 2024</span>
                            </div>

                            <ul className="lists">
                                <li>Develop web applications and RestAPI following the specification, Troubleshoot the defects</li>
                                <li>Refactored source code to enhance software maintainability and performance</li>
                                <li>Develop a program to reduce routine tasks</li>
                                <li>Technologies Stack : JavaScript, HTML, CSS, JQuery, Bootstrap, Node, Express, MS SQL</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>  

            <div className="full-page">
                <div className="card">   
                    <h1 className="header">Education</h1>
                    <div className='card-detail vertical'>
                        <div className='sub-card-detail'>
                            <div className='sub-header-with-date'>
                                <h3 className="sub-topic">Khonkaen University</h3>
                                <span>5th August 2017 - 12th May 2021</span>
                            </div>
                            <p className="sub-detail">Bachelor degree of Computer Engineering</p>
                        </div>
                        <div className='sub-card-detail'>
                            <div className='sub-header-with-date'>
                                <h3 className="sub-topic">Co-operative Education, NECTEC NSTDA</h3>
                                <p className="date-range">29th June 2020 - 14th Nov 2020</p>
                            </div>
                            <span>
                                Plublish content on Medium e.g.
                                <a className="sub-detail" target="_blank" href="https://medium.com/@supitsara.d">“Smart Farm on Blockchain”</a>
                            </span>
                        </div>
                        <div className='sub-card-detail'>
                            <div className='sub-header-with-date'>
                                <h3 className="sub-topic">Internship, NECTEC NSTDA</h3>
                                <p className="date-range">20th April 2020 - 12th May 2020</p>
                            </div>
                            <span>
                                Plublish content on Medium e.g. 
                                <a className="sub-detail" target="_blank" href="https://medium.com/@supitsara.d">“Installing Docker on Window10Home”, “Blockchain as ease”</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>  
            <div className="full-page">
                <div className="card">
                    <h1 className="header">Certificate</h1>
                    <div className='card-detail vertical'>
                        <div className='sub-card-detail'>
                            <div className='sub-header-with-date'>
                                <h3 className="sub-topic">Freecodecamp</h3>
                                <span>(27th oct 2021)</span>
                            </div>
                            <a  className="sub-detail" 
                                target="_blank" 
                                href="https://www.freecodecamp.org/certification/fccdf9952fe-3fa5-46bd-b006-8a8a213c8ffa/back-end-development-and-apis">
                                Back End Developement and APIs Certification
                            </a>
                        </div>

                        <div className='sub-card-detail'>
                            <div className='sub-header-with-date'>
                                <h3 className="sub-topic">Freecodecamp</h3>
                                <span>(5th jun 2022)</span>
                            </div>
                            <a  className="sub-detail" 
                                target="_blank" 
                                href="https://www.freecodecamp.org/certification/fccdf9952fe-3fa5-46bd-b006-8a8a213c8ffa/javascript-algorithms-and-data-structures">
                                JavaScript Algorithms and Data Structures Certification
                            </a>
                        </div>

                        <div className='sub-card-detail'>
                            <div className='sub-header-with-date'>
                                <h3 className="sub-topic">Udemy</h3>
                                <span>(16th jul 2024)</span>
                            </div>
                            <a  className="sub-detail" 
                                target="_blank" 
                                href="https://udemy-certificate.s3.amazonaws.com/image/UC-5f3617f4-0ed7-4e63-a576-1e817e4f8c69.jpg">
                                React - The Complete Guide 2024 (incl. Next.js & Redux)
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Motion>
    );
}

export default Experience;
