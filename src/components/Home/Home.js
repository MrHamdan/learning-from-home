import React, { useEffect, useState } from 'react';
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
            <div className="text-center pt-4">
                <h1 className="text-white text-design">Here's Our Popular Service'  s</h1>
                <h4 className="text-white text-design">Here you can find our most poular services. There are many more services in the service section you can explore more service's here.</h4>
            </div>
            <div>
                <div className="row row-cols-1 row-cols-md-4 g-5 p-5">
                    {
                        services.map(service => <Service
                            key={service.key}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;