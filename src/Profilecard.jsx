import React from 'react';
import Image from './assets/img.jpg';
import './styles/profilecard.css';

const Profilecard = () => {
    return (
        <div className="profile-card">
            <div className="profile-card-header">
                <img className="profile-image" src={Image} alt="Profile Picture" />
            </div>
            <div className="profile-card-body">
                <h2 className="profile-name">John Doe</h2>
                <p className="profile-role">UI/UX Designer</p>
                <div className="profile-links">
                    <a href="#" className="profile-link"><img alt="facebook" src="https://openui.fly.dev/openui/24x24.svg?text=📘" /></a>
                    <a href="#" className="profile-link"><img alt="twitter" src="https://openui.fly.dev/openui/24x24.svg?text=🐦" /></a>
                    <a href="#" className="profile-link"><img alt="instagram" src="https://openui.fly.dev/openui/24x24.svg?text=📸" /></a>
                    <a href="#" className="profile-link"><img alt="linkedin" src="https://openui.fly.dev/openui/24x24.svg?text=🔗" /></a>
                </div>
            </div>
            <div className="profile-card-info">
                <div className="profile-info-item">
                    <img alt="phone" src="https://openui.fly.dev/openui/24x24.svg?text=📞" />
                    <span className="profile-info-text">+123 456 7890</span>
                </div>
                <div className="profile-info-item">
                    <img alt="email" src="https://openui.fly.dev/openui/24x24.svg?text=📧" />
                    <span className="profile-info-text">Example@Mail.Com</span>
                </div>
                <div className="profile-info-item">
                    <img alt="location" src="https://openui.fly.dev/openui/24x24.svg?text=📍" />
                    <span className="profile-info-text">Hong Kong China</span>
                </div>
                <div className="profile-info-item">
                    <img alt="birthday" src="https://openui.fly.dev/openui/24x24.svg?text=🎂" />
                    <span className="profile-info-text">May 27, 1990</span>
                </div>
            </div>
            <div className="profile-card-footer">
                <button className="profile-button">
                    <div>
                        <img src="https://openui.fly.dev/openui/24x24.svg?text=📥" />
                    </div>
                    Download CV</button>
            </div>
        </div>
    );
};

export default Profilecard;
