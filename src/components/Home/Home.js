import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Service from '../Service/Service';
import './Home.css'

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./custom-data-home.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="custom-bg">
            <div className="text-center pt-4 header-img">
                {/* Our Home Area Course Part */}
                <h1 className="text-white text-design-1">We help you to learn what you need</h1>
                <h4 className="text-white text-design-1">Bring training to your people, no matter where their work takes them. Build micro-learning courses in minutes.</h4>
                <Button variant="warning">Take A Tour</Button>
            </div>
            <div>
                <div className="text-center py-5">
                    <h1 className="text-white text-design-2">Here's Our Popular Courses</h1>
                    <h4 className="text-white text-design-2">Here you can find our most poular courses. There are many more courses in the course section you can explore more courses here.</h4>
                </div>
                <div className="row row-cols-1 row-cols-md-4 g-5 p-5">
                    {/* Show Courses */}
                    {
                        services.map(service => <Service
                            key={service.key}
                            service={service}
                        ></Service>)
                    }
                    <NavLink className="button-design" to="/services"><Button className="shadow-lg" variant="warning">See More</Button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Home;