
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Nav from './Nav'


const ViewAll = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.post("http://localhost:3000/view-data")
            .then((response) => {
                changeData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>


<Nav/>
            <div className="container mt-4">

                <h2 className="text-center mb-4">
                    <b>VIEW VOLUNTEERS</b>
                </h2>

                <table className="table table-bordered table-hover table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>Volunteer ID</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Date of Birth</th>
                            <th>Gender</th>
                            <th>Address</th>
                            <th>Blood Group</th>
                            <th>Department</th>
                            <th>Year of Study</th>
                            <th>Camp Name</th>
                            <th>Hours Completed</th>
                            <th>Unit Number</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((value, index) => (
                            <tr key={index}>
                                <td>{value.VolunteerID}</td>
                                <td>{value.FullName}</td>
                                <td>{value.Email}</td>
                                <td>{value.Phone}</td>
                                <td>{value.DateOfBirth}</td>
                                <td>{value.Gender}</td>
                                <td>{value.Address}</td>
                                <td>{value.BloodGroup}</td>
                                <td>{value.Department}</td>
                                <td>{value.YearOfStudy}</td>
                                <td>{value.CampName}</td>
                                <td>{value.HoursCompleted}</td>
                                <td>{value.UnitNumber}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>

        </div>
    )
}

export default ViewAll