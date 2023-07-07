
import './Projects.css'

export default function Projects() {
    return (
        <div className="contianer projects px-2">
            <div className="content">
                <h1 className="section-heading">PROJECTS</h1>
                <div className="underline"></div>
                <p className="section-info">Here you will find some of the personal and clients projects that I created with each project containing its own case study.</p>

                <div className="project-content container">
                    <div className="project-card text-center row justify-content-center">
                        <div className="project-img col-lg-7 col-sm-12">
                            <img src="wilsonport.jpg" alt='porject' height='auto' width="100%"/>
                        </div>
                        <div className="project-info col-lg-5 col-sm-12">
                            <div className="project-name">
                                <h2>Wilsonport</h2>
                            </div>
                            <div className="project-intro col-12">
                                <p> Wilsonport is a multiservice logistics and transport company and I created their website from scratch using the frontend tools I know.</p>
                            </div>
                            <button className="btn btn-primary col-4">CASE STUDY</button>
                        </div>
                    </div>

                    <div className="project-card text-center row justify-content-center">
                        <div className="project-img col-lg-7 col-sm-12">
                            <img src="boreal-coffee-clone.jpg" alt='porject' height='auto' width='100%'/>
                        </div>
                        <div className="project-info col-lg-5 col-sm-12">
                            <div className="project-name">
                                <h2>Boreal Coffee Clone</h2>
                            </div>
                            <div className="project-intro">
                                <p> I re-created the frontend of Boreal Coffe's official web app because I got attracted to their beautiful UI. It was a great experience for me to build the entire frontend.</p>
                            </div>
                            <button className="btn btn-primary col-4">CASE STUDY</button>
                        </div>
                    </div>

                    <div className="project-card text-center row justify-content-center">
                        <div className="project-img col-lg-7 col-sm-12">
                            <img src="crown-template.jpg" alt='porject' height='auto' width="100%"/>
                        </div>
                        <div className="project-info col-lg-5 col-sm-12">
                            <div className="project-name">
                                <h2>Crown Template</h2>
                            </div>
                            <div className="project-intro">
                                <p> Crown is a web template that I created targeting the restaurant and food industry which anyone can use to present their business online.</p>
                            </div>
                            <button className="btn btn-primary col-4">CASE STUDY</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}