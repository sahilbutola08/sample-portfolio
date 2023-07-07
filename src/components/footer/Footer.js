// import { icon } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <div className="container d-flex flex-column footer">
            
            <div className="row social">
                <div className="socia-heading">
                    <h2>Social</h2>
                </div>
                <div className="social-icon">
                    <i class="fa-brands fa-linkedin-in"></i>
                </div>
                <div className="social-icon">
                    <i class="fa-brands fa-github"></i>
                </div>
                <div className="social-icon">
                    <i class="fa-brands fa-twitter"></i>
                </div>
                <div className="social-icon">
                    <i class="fa-brands fa-dev"></i>
                </div>
                <div className="social-icon">
                    <i class="fa-brands fa-youtube"></i>
                </div>
            </div>

            <div className="row about-me">
                <h3 className="col-12">RAM MAHESHWARI</h3>
                <p className="col-12">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.</p>
            </div>

            <div className="row copyright-section">
                <p className="col-12">copyright 2023. Made by <span>Ram Maheshwari</span></p>
            </div>
        </div>
    )
}