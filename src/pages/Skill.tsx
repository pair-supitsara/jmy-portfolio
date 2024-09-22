import Motion from '../components/motion'

function Skill() {
    return (
        <Motion>
            <div className="full-page">
                <div className="card">   
                    <h1 className="header">Skill</h1>
                    <div className='card-detail'>
                        <div className="sub-card-detail">
                            <img src="https://skillicons.dev/icons?i=html,js,ts,cs,css,nodejs,express,mysql,bootstrap,jquery,vscode,postman,notion,react,redux,d3,unity,py,php,stackoverflow,figma,bitbucket,git,github&perline=14" />
                        </div>
                    </div>
                </div>

                <div className="card">   
                    <h1 className="header">Key skill summary</h1>
                    <div className='card-detail'>
                        <div className='sub-card-detail'>
                            <ul className='lists'>
                                <li>Develop Web Applications with HTML, JavaScript, CSS, Bootstrap</li>
                                <li>Experience in Restful API using Node.js, Express.js</li>
                                <li>Knowledge of database design, relational-database dealing with MsSQL, MySql</li>
                                <li>Understanding of web frameworks like React.js</li>
                                <li>Experience with git version control (Github, Bitbucket)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="card">   
                    <h1 className="header">Interests</h1>
                    <div className='card-detail'>
                        <div className='sub-card-detail'>
                            <ul className='lists'>
                                <li>Web Development</li>
                                <li>Respondsive Design</li>
                                <li>Game Development</li>
                                <li>Drawing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Motion>
    );
}

export default Skill;
