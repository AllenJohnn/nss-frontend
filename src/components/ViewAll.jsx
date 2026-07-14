import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";

const ViewAll = () => {
  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios
      .post("http://localhost:3000/view-data")
      .then((response) => {
        changeData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <NavBar />

      <div className="container mt-4">
        <h3 className="text-center mb-3">View Volunteers</h3>

        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr style={{ backgroundColor: "white" }}>
                <th>Volunteer ID</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>DOB</th>
                <th>Gender</th>
                <th>Address</th>
                <th>Blood Group</th>
                <th>Department</th>
                <th>Year</th>
                <th>Camp Name</th>
                <th>Hours</th>
                <th>Unit No.</th>
              </tr>
            </thead>

            <tbody>
              {data.map((value) => (
                <tr key={value._id} style={{ backgroundColor: "white" }}>
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
    </div>
  );
};

export default ViewAll;
