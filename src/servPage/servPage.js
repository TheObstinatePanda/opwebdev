import './servPage.css';

function ServPage() {
    return (
        <div className="servBody">
            <h2 class="head2" id="servHead">What can we build for you?</h2>
            <div className="servText">
                <p>Here at OP Web Development, we pride ourselves on creating high quality, custom, dynamic webpages built from the ground up. We also offer a variety of graphic design services, including logo design, branding consultation, creation of custom graphical icons, digital-illustration, and animation in-line with your brand.</p>
                <p>Our goal is to help you bring your vision to life. We will work with you to create a stunning, functional, and user-friendly website that will help you stand out from the crowd. </p>
            </div>

            <h3 className="head3" id="coreServ">Our Core Services</h3>
            <div id="servCont">
                
                <div className="servSub">
                    <h4 className="coreServ">Web Development</h4>
                    <ul className="servList">
                        <li>High quality, custom, dynamic webpages built from the ground up.</li>
                        <li>Custom Domain Acquisition made easy.</li>
                        <li>Secure Web Hosting by siteGround.</li>
                    </ul>
                </div>
                <div className="servSub">
                    <h4 className="coreServ">Graphic Design</h4>
                    <ul className="servList">
                        <li>Logo Design</li>
                        <li>Branding Consultation</li>
                        <li>Custom Graphical Icons</li>
                        <li>Digital-Illustration</li>
                        <li>Animation</li>
                    </ul>
                </div>
            </div>
        </div>
      );
}

export default ServPage;