
import './Home.css'

export default function Home() {
    return (
        <div className="container home d-flex flex-column">
            <h1>HEY, I'M RAM MAHESHWARI</h1>
            <p> A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.</p>
            <button className="btn btn-primary btn-lg">PROJECTS</button>

            <div className="floating-socials">
                <div className='social-icons'>
                    <div className='icon'>
                        <i className='fa-brands fa-linkedin'></i>
                    </div>
                    <div className='icon'>
                        <i className='fa-brands fa-twitter'></i>
                    </div>
                    <div className='icon'>
                        <i className='fa-brands fa-youtube'></i>
                    </div>
                    <div className='icon'>
                        <i className='fa-brands fa-github'></i>
                    </div>
                    <div className='icon'>
                        <i className='fa-brands fa-dev'></i>
                    </div>
                </div>
            </div>
        </div>
    )
}