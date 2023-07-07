
import './Contact.css'

export default function Contact() {
    return (
        <div className="contianer contact px-2">
            <div className="content">
                <h1 className="section-heading">CONTACT</h1>
                <div className="underline"></div>
                <p className="section-info">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible.</p>

                <div className="form px-5">
                    <form className="d-flex flex-column">
                        <label>Name</label>
                        <input placeholder="Enter Your Name" type="text"/>
                        <label>Email</label>
                        <input placeholder="Enter Your Email" type="email"/>
                        <label>Message</label>
                        <textarea placeholder='Enter Your Message'></textarea>
                        <input className="btn btn-primary btn-lg" type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        </div>
    )
}