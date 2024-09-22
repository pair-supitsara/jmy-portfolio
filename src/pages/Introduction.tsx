import Motion from '../components/motion'

function Introduction() {
  
  return (
    <Motion> 
      <div className="full-page">
        <div className="card">    
          {/* <h1 className="header">Hello!</h1> */}
          <div className='card-detail'>
            <div className='sub-card-detail left'>
              <h2>Supitsara Deetoh</h2>
              <h3>a full stack developer</h3>
            </div>
            <div className='sub-card-detail right'>
              <p>
                2 years+ of experience in maintenance, solving problems, unit testing, implement feature based on
                specification and updating existing software, ability to finish projects on schedule, strong passion
                for related skill in web developement
              </p>
            </div>
          </div>
        </div>
      </div>
    </Motion> 
  );
}

export default Introduction;
