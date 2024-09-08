import '../styles/about.css';

const About = () => {
    return (
        <div className="about-container">
            <section className="content">
                <h2 className="title">About</h2>
                <div className="divider"></div>
                <p className="description">
                    I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
                </p>
                <p className="description">My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
                <h3 className="subtitle">What I Do!</h3>
                <div className="grid-container">
                    <div className="card">
                        <div className="card-header">
                            <img aria-hidden="true" alt="ui-ux-design" src="https://openui.fly.dev/openui/24x24.svg?text=🎨" className="card-icon" />
                            <h4 className="card-title">Ui/Ux Design</h4>
                        </div>
                        <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam euismod tincidunt volutpat.</p>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <img aria-hidden="true" alt="app-development" src="https://openui.fly.dev/openui/24x24.svg?text=📱" className="card-icon" />
                            <h4 className="card-title">App Development</h4>
                        </div>
                        <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam euismod tincidunt volutpat.</p>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <img aria-hidden="true" alt="photography" src="https://openui.fly.dev/openui/24x24.svg?text=📷" className="card-icon" />
                            <h4 className="card-title">Photography</h4>
                        </div>
                        <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam euismod tincidunt volutpat.</p>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <img aria-hidden="true" alt="web-development" src="https://openui.fly.dev/openui/24x24.svg?text=💻" className="card-icon" />
                            <h4 className="card-title">Web Development</h4>
                        </div>
                        <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam euismod tincidunt volutpat.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;