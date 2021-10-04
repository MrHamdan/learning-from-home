import React, { useEffect, useState } from 'react';
import Teacher from '../Teacher/Teacher';
import './Teachers.css'

const Teachers = () => {
    const [teachers, setTeacher] = useState([]);

    useEffect(() => {
        fetch('./custom-data-teachers.JSON')
            .then(res => res.json())
            .then(data => setTeacher(data))
    }, [])

    return (
        <div className="custom-bg">
            <div className="text-center pt-4">
                <h1 className="text-white text-design">Teacher's Information</h1>
                <h4 className="text-white text-design">Here as you can see our highly qualified teachers accross the world. They worked really hard for this company and for your childern.</h4>
            </div>
            <div>
                <div className="row row-cols-1 row-cols-md-4 g-5 p-5">
                    {
                        teachers.map(teacher => <Teacher
                            key={teacher.key}
                            teacher={teacher}
                        ></Teacher>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Teachers;