import Motion from '../components/motion'

function Contact() {
    return (
        <Motion>
            <div className="full-page">
                <div className='card'>
                    <div className='card-detail'>
                        <div className='sub-card-detail left'>
                            <h1>Contact</h1>
                        </div>
                        <div className='sub-card-detail right'>
                            <span>Email : pair.supitsara@gmail.com</span>
                            <span>Github : <a href="https://github.com/pair-supitsara" target='_blank'>github.com/pair-supitsara</a></span>
                            <span>Medium : <a href="https://medium.com/@supitsara.d" target='_blank'>medium.com/@supitsara.d</a></span>
                            <span>Resume : <a href="/CV_Supitsara_Deetoh.pdf" target='_blank'>CV_Supitsara_Deetoh.pdf</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </Motion>
    );
}

export default Contact;
