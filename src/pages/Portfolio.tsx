import Motion from '../components/motion'
import Project from '../components/Project';

function Portfolio() {
    const projects = [
        { 
            name: 'ShoppingCart',
            description: [  'Developed a full-stack e-commerce application ',
                            'allowing users to browse products, add items to the cart',
                            'allowing  admin functionality for managing products and users'],
            technologies: 'React, HTML, CSS, JavaScript',
            image: '/e-commerce.gif', 
            alt: 'ShoppingCart', 
            github: 'https://github.com/pair-supitsara/ShoppingCart'
        },
        { 
            name: 'Authentication and Authorization System',
            description: ['Developed an authentication and authorization system for an API, ensuring secure user login and data protection'],
            technologies: 'Node, Express, MySQL, JWT',
            image: '/authen&authorization.gif', 
            alt: 'API', 
            github: 'https://github.com/pair-supitsara/API'
        },{ 
            name: 'D3-racingbarchart',
            description: ['study case using d3.js drawing racing bar chart'],
            technologies: 'Node, Express, React, HTML, CSS, JavaScript, D3.js',
            image: '/population-growth.gif', 
            alt: 'API', 
            github: 'https://github.com/pair-supitsara/D3-racingbarchart'
        }
    ]

    return (
        <Motion>
            <div className="full-page"> 
                <div className="card">  
                    <h1 className="header">Portfolio</h1>
                    <div className='card-detail horizontal'>
                        <div className='grids-projects'>
                        {   projects.map(({ name, description, technologies, image, alt, github }) => (
                                <Project
                                    key={name}
                                    name={name} 
                                    description={description}
                                    technologies={technologies}
                                    image={ image || "https://i.pinimg.com/originals/6a/28/87/6a2887f91a7ee71850635a82560ca7e8.jpg"}
                                    alt={alt}
                                    github={github}
                                />
                            )
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </Motion>
    );
}

export default Portfolio;
