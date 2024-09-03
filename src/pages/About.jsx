import '../styles/about.css';

const About = () => {
    return (
        <div class="about-container">
            <section class="content">
                <h2 class="title">About</h2>
                <div class="divider"></div>
                <p class="description">
                    I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
                </p>
                <p class="description">My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
                <h3 class="subtitle">What I Do!</h3>
                <div class="grid-container">
                    <div class="card">
                        <div class="card-header">
                            <img aria-hidden="true" alt="ui-ux-design" src="https://openui.fly.dev/openui/24x24.svg?text=🎨" class="card-icon" />
                            <h4 class="card-title">Ui/Ux Design</h4>
                        </div>
                        <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam euismod tincidunt volutpat.</p>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <img aria-hidden="true" alt="app-development" src="https://openui.fly.dev/openui/24x24.svg?text=📱" class="card-icon" />
                            <h4 class="card-title">App Development</h4>
                        </div>
                        <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam euismod tincidunt volutpat.</p>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <img aria-hidden="true" alt="photography" src="https://openui.fly.dev/openui/24x24.svg?text=📷" class="card-icon" />
                            <h4 class="card-title">Photography</h4>
                        </div>
                        <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam euismod tincidunt volutpat.</p>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <img aria-hidden="true" alt="web-development" src="https://openui.fly.dev/openui/24x24.svg?text=💻" class="card-icon" />
                            <h4 class="card-title">Web Development</h4>
                        </div>
                        <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam euismod tincidunt volutpat.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;