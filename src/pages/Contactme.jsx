import React from 'react';
import '../styles/contactme.css'

function Contactme() {
    return (
        <div class="contact-container">
            <h2>Contact</h2>
            <div class="divider"></div>
            <div class="contact-info">
                <div class="phone-section">
                    <p>
                        <span class="icon"><img aria-hidden="true" alt="phone-icon" src="https://openui.fly.dev/openui/24x24.svg?text=📞" /></span>
                        <span>Phone:</span>
                    </p>
                    <p>+452 666 386</p>
                    <p>+654 764 878</p>
                </div>
                <div class="email-section">
                    <p>
                        <span class="icon"><img aria-hidden="true" alt="email-icon" src="https://openui.fly.dev/openui/24x24.svg?text=📧" /></span>
                        <span>Email:</span>
                    </p>
                    <p>someone@gmail.com</p>
                    <p><a href="mailto:xyz@abc.com">xyz@abc.com</a></p>
                </div>
            </div>
            <p class="message">
                I'm always open to discussing product <strong>design work or partnerships.</strong>
            </p>
            <form class="contact-form">
                <input type="text" placeholder="Name *" required />
                <input type="email" placeholder="Email *" required />
                <textarea placeholder="Message *" required></textarea>
                <button type="submit">Submit</button>
            </form>
            <p class="footer">Portfolio by Kruger14 </p>
            <p class="footer">Design insired from  <a href='https://bostami-bootstrap-nextjs.vercel.app/#demo'>bostami-bootstrap-nextjs</a></p>
        </div>
    )
}

export default Contactme;