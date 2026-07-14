import axios from "axios";
import React, { useState } from "react";
import NavBar from "./NavBar";

const AddData = () => {
  const [input, changeInput] = useState({
    VolunteerID: "",
    FullName: "",
    Email: "",
    Phone: "",
    DateOfBirth: "",
    Gender: "",
    Address: "",
    BloodGroup: "",
    Department: "",
    YearOfStudy: "",
    CampName: "",
    HoursCompleted: "",
    UnitNumber: "",
  });

  const inputHandler = (event) => {
    changeInput({ ...input, [event.target.name]: event.target.value });
  };

  const readValue = () => {
    axios
      .post("http://localhost:3000/add-data", input)
      .then((response) => {
        alert(response.data.status);

        changeInput({
          VolunteerID: "",
          FullName: "",
          Email: "",
          Phone: "",
          DateOfBirth: "",
          Gender: "",
          Address: "",
          BloodGroup: "",
          Department: "",
          YearOfStudy: "",
          CampName: "",
          HoursCompleted: "",
          UnitNumber: "",
        });
      })
      .catch((error) => {
        console.log(error);
        alert("Error while adding volunteer");
      });
  };

  return (
    <div>
      <NavBar />

      <div className="container mt-4">
        <h3 className="text-center mb-4">Add Volunteer</h3>

        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Volunteer ID</label>
            <input
              type="text"
              className="form-control"
              name="VolunteerID"
              value={input.VolunteerID}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="FullName"
              value={input.FullName}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="Email"
              value={input.Email}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Phone</label>
            <input
              type="text"
              className="form-control"
              name="Phone"
              value={input.Phone}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Date of Birth</label>
            <input
              type="date"
              className="form-control"
              name="DateOfBirth"
              value={input.DateOfBirth}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Gender</label>
            <input
              type="text"
              className="form-control"
              name="Gender"
              value={input.Gender}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              name="Address"
              value={input.Address}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Blood Group</label>
            <input
              type="text"
              className="form-control"
              name="BloodGroup"
              value={input.BloodGroup}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Department</label>
            <input
              type="text"
              className="form-control"
              name="Department"
              value={input.Department}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Year of Study</label>
            <input
              type="text"
              className="form-control"
              name="YearOfStudy"
              value={input.YearOfStudy}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Camp Name</label>
            <input
              type="text"
              className="form-control"
              name="CampName"
              value={input.CampName}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Hours Completed</label>
            <input
              type="text"
              className="form-control"
              name="HoursCompleted"
              value={input.HoursCompleted}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Unit Number</label>
            <input
              type="text"
              className="form-control"
              name="UnitNumber"
              value={input.UnitNumber}
              onChange={inputHandler}
            />
          </div>

          <div className="col-12 text-center mt-3">
            <button className="btn btn-primary" onClick={readValue}>
              Add Volunteer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddData;