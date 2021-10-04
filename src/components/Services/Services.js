import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./custom-data-Services.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="custom-bg">
            <div className="text-center pt-4">
                {/* Our Services Part */}
                <h1 className="text-white text-design">Explore More Service's</h1>
                <h4 className="text-white text-design">Exploring new things is fun here you can find our more services that you can buy and learn easily.You also can contact us if you need guidance.</h4>
            </div>
            <div>
                <div className="row row-cols-1 row-cols-md-4 g-5 p-5">
                    {/* Show more services */}
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

export default Services;