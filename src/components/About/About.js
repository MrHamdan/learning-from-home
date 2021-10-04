import React from 'react';
import './About.css'

const About = () => {
    return (
        // Company Detail
        <div className="custom-bg">
            <h1 className="text-center py-5">About Us</h1>
            <div className="about-container container">
                <div className="bg-color">
                    <h3>Learning From Home Stablished Since 1960</h3>
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
                    <h3>Learning From Home</h3>
                    <h5>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.

                        A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</h5>
                </div>
            </div>
        </div>
    );
};

export default About;