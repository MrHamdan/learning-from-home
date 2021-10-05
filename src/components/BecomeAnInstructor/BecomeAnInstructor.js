import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import './BecomeAnInstructor.css'

const BecomeAnInstructor = () => {
    return (
        <div className="custom-bg">
            {/* Come and tech part */}
            <div className="come__tech bg-image">
                <div className="text-design">
                    <h1 className="text-white">Come teach <br /> with us</h1>
                    <p className="text-white">Become an instructor and change <br /> lives — including your own</p>
                    <Button variant="warning">Join With Us</Button>
                </div>
                <div>
                    <img src="https://www.cei.se/pub/media/wysiwyg/elearn-banner.jpg" alt="" />
                </div>
            </div>

            {/* Why start with us part */}
            <h1 className="text-center my-5 text-white text-design">So many reasons to start</h1>
            <CardGroup className="container text-center">
                <Card className="mx-5">
                    <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/5bf640815417fc9e066fa851/1625764769999-U56S1CAJ64IXPF7KYJ9I/Website+Blog+Image+800x600+%2813%29.png" />
                    <Card.Body>
                        <Card.Title>Teach your way</Card.Title>
                        <Card.Text>
                            Publish the course you want, in the way you want, and always have of control your own content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="mx-5">
                    <Card.Img variant="top" src="https://www.sandyhookpromise.org/wp-content/uploads/2021/08/AMERICANED_CAPCITY_036.jpg" />
                    <Card.Body>
                        <Card.Title>Inspire learners</Card.Title>
                        <Card.Text>
                            Teach what you know and help learners explore their interests, gain new skills, and advance their careers.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="mx-5">
                    <Card.Img variant="top" src="https://www.kaspersky.com/content/en-global/images/repository/pr/world-branding-awards.jpg" />
                    <Card.Body>
                        <Card.Title>Get rewarded</Card.Title>
                        <Card.Text>
                            Expand your professional network, build your expertise, and earn money on each paid enrollment.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>

            {/* How to begin part */}
            <h1 className="text-center my-5 text-white text-design">How to begin</h1>
            <CardGroup className="container text-center">
                <Card className="mx-5">
                    <Card.Img variant="top" src="https://www.earcos.org/assets/img/2021/is-beijing.jpg" />
                    <Card.Body>
                        <Card.Title>Plan Your Curriculum</Card.Title>
                        <Card.Text>
                            You start with your passion and knowledge. Then choose a promising topic with the help of our Marketplace Insights tool. <br /> The way that you teach — what you bring to it — is up to you.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="mx-5">
                    <Card.Img variant="top" src="https://img.naidunia.com/naidunia/ndnimg/07082021/07_08_2021-zoom_video_calls_nai_dunia.jpg" />
                    <Card.Body>
                        <Card.Title>Record Your Video</Card.Title>
                        <Card.Text>
                            Use basic tools like a smartphone or a DSLR camera. Add a good microphone and you’re ready to start. <br /> If you don’t like being on camera, just capture your screen. Either way, we recommend two hours or more of video for a paid course.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="mx-5">
                    <Card.Img variant="top" src="https://www.learningrevolution.net/wp-content/uploads/2019/05/online_video_course_68461017_m-800x600.jpg" />
                    <Card.Body>
                        <Card.Title>Launch Your Course</Card.Title>
                        <Card.Text>
                            Gather your first ratings and reviews by promoting your course through social media and your professional networks. <br /> Your course will be discoverable in our marketplace where you earn revenue from each paid enrollment.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
            {/* Become An Instructor Part */}

            <div className="instructor custom-bg">
                <h2 className="text-design text-warning">Become an instructor today</h2>
                <h3 className="text-design py-3">Join one of the world’s largest online learning marketplaces.</h3>
                <Button variant="warning py-2">Join Now</Button>
            </div>
        </div>
    );
};

export default BecomeAnInstructor;