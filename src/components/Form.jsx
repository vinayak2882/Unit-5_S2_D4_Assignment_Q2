import { useRef, useState } from "react";
import { ShowData } from "./ShowData";
import "./Form.css";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    address: "",
    department: "",
    salary: "",
    marital: false,
  });

  const submitData = async (e) => {
    e.preventDefault();

    const payload = {
      name: formData.name,
      age: formData.age,
      address: formData.address,
      department: formData.department,
      salary: formData.salary,
      marital: formData.marital,
    };

    fetch("http://localhost:8080/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="formContainer">
      <div className="container">
        <form onSubmit={submitData}>
          <input
            type="text"
            placeholder="Enter Your Name"
            id="username"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Enter Your Age"
            id="age"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Enter Your Address"
            id="address"
            onChange={handleChange}
          />
        
          <select id="department" onChange={handleChange}>
            <option value="Science">Science</option>
            <option value="Commerce">Commerce</option>
            <option value="Arts">Arts</option>
            <option value="Human Resource">H.R</option>
            <option value="finacical">Finacial</option>
            <option value="Testing">Testing</option>
            <option value="Engineering">Engineering</option>
            <option value="Backend">Back End</option>
            <option value="Fornt_end">Fornt End</option>
          </select>
          <input
            type="number"
            placeholder="Enter Your Salary"
            id="salary"
            onChange={handleChange}
          />
          Married:{" "}
          <input
            type="checkbox"
            id="maritalStatus"
            name=""
            onChange={handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div className="tableh">
        <ShowData />
      </div>
    </div>
  );
};
