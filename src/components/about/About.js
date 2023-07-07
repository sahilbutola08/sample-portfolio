
import './About.css'

export default function About() {
    return (
        <div className="container about">
            <div className='content'>
                <h1 className="section-heading">ABOUT ME</h1>
                <div className='underline'> </div>
                <p className="section-info">Here you will more information about me, what I do, and my current skills mostly in terms of programming and technology.</p>

                <div className='about-main row'>
                    <div className='about-text col-lg-6 col-sm-12'>
                        <h3 className="intro-heading">Get to know me!</h3>
                        <div className='intro-text'>
                            <p className="intro-p">I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the sucess of the overall product. Check out some of my work in the Projects section.</p>
                            <p className="intro-p">I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other poeple of the Dev Community. Feel free to Connect or Follow me on my LinkedIn where I post useful content related to Web Development and Programming.</p>
                            <p className="intro-p">I'm open to job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
                        </div>
                        <button className="btn btn-primary">CONTACT</button>
                    </div>

                    <div className='about-skills offset-lg-1 col-lg-5 col-sm-12'>
                        <h3 className='skills-heading'>My Skills</h3>
                        <div className='skill-chips'>
                            <div className='chip'><span>HTML</span></div>
                            <div className='chip'><span>CSS</span></div>
                            <div className='chip'><span>JavaScript</span></div>
                            <div className='chip'><span>React</span></div>
                            <div className='chip'><span>SASS</span></div>   
                            <div className='chip'><span>GIT</span></div>
                            <div className='chip'><span>GitHub</span></div>  
                            <div className='chip'><span>Responsive Design</span></div> 
                            <div className='chip'><span>SEO</span></div>
                            <div className='chip'><span>Terminal</span></div>
                            <div className='chip'><span>Express Basics</span></div>
                            <div className='chip'><span>SQL Basics</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}