import React from 'react';
import '../styles/contactme.css'

function Contactme() {
    return (
        <div className="contact-container">
            <h2>Contact</h2>
            <div className="divider"></div>
            <div className="contact-info">
                <div className="phone-section">
                    <p>
                        <span className="icon"><img aria-hidden="true" alt="phone-icon" src="https://openui.fly.dev/openui/24x24.svg?text=📞" /></span>
                        <span>Phone:</span>
                    </p>
                    <p>+452 666 386</p>
                    <p>+654 764 878</p>
                </div>
                <div className="email-section">
                    <p>
                        <span className="icon"><img aria-hidden="true" alt="email-icon" src="https://openui.fly.dev/openui/24x24.svg?text=📧" /></span>
                        <span>Email:</span>
                    </p>
                    <p>someone@gmail.com</p>
                    <p><a href="mailto:xyz@abc.com">xyz@abc.com</a></p>
                </div>
            </div>
            <p className="message">
                I'm always open to discussing product <strong>design work or partnerships.</strong>
            </p>
            <form className="contact-form">
                <input type="text" placeholder="Name *" required />
                <input type="email" placeholder="Email *" required />
                <textarea placeholder="Message *" required></textarea>
                <button type="submit">Submit</button>
            </form>
            <p className="footer">Portfolio by Kruger14 </p>
            <p className="footer">Design insired from  <a href='https://bostami-bootstrap-nextjs.vercel.app/#demo'>bostami-bootstrap-nextjs</a></p>
        </div>
    )
}

export default Contactme;