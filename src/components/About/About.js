import React from 'react';
import './About.css'

const About = () => {
    return (
        // Company Detail
        <div className="custom-bg">
            <div className="top__section">
                <h3 className="text-white text-design">We share <span className="text-warning">knowledge</span> with <br /> the world <i className="fas fa-globe-americas"></i></h3>
                <img className="image-size2" src="https://www.swipeguide.com/hubfs/Knowledge_sharing.png" alt="" />
            </div>
            {/* Middle Section */}
            <div className="middle__section">
                <h2 className="text-warning text-design py-5">Changing learning for the better</h2>
                <h4 className="text-design">Whether you want to learn or to share what you know, you’ve come to the right place. As a <br /> global destination for online learning, we connect people through knowledge.</h4>
            </div>
            {/* Bottom Section */}
            <div className="bottom__section">
                <div className="bottom__section__item rounded shadow body-color">
                    <h3>Work with us</h3>
                    <p>At e-Learning, we’re all learners and instructors. We live out our values every day to create a culture that is diverse, inclusive, and committed to helping employees thrive.</p>
                </div>
                <div className="bottom__section__item rounded shadow highlighted__item">
                    <h3>See our research</h3>
                    <p>We’re committed to changing the future of learning for the better. Dig into our original research to learn about the forces that are shaping the modern workplace.</p>
                </div>
                <div className="bottom__section__item rounded shadow body-color">
                    <h3>Read our blog</h3>
                    <p>Want to know what we’ve been up to lately? Check out the Udemy blog to get the scoop on the latest news, ideas and projects, and more.</p>
                </div>
            </div>
            <h1 className="text-center py-5 text-white text-design">About Us</h1>
            <div className="about-container container">
                <div className="bg-color">
                    <h2 className="text-design">Learning From Home Stablished Since 1960</h2>
                    <h5>
                        On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.

                        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.

                        On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their</h5>
                </div>
                <div>
                    {/* Office Image */}
                    <img className="img-width" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="" />
                </div>
            </div>
            <div className="about-container container py-5">
                <div>
                    {/* Our Youtube Video */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/-wuatNbmxlo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="text-gap bg-color">
                    {/* More Company detail */}
                    <h2 className="text-design">Learning From Home</h2>
                    <h5>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.

                        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</h5>
                </div>
            </div>
        </div>
    );
};

export default About;