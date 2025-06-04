import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddEmployee = () => {
const [employee, setEmployee] = useState({ firstName: "", lastName: "", email: "" });
const navigate = useNavigate();

const handleChange = (e) => {
setEmployee({ ...employee, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
e.preventDefault();
axios.post("http://localhost:9090/employees", employee)
.then(() => navigate("/employees"))
.catch(error => console.error("Error adding employee:", error));
};

return (
<div className="container">
<h2>Add Employee</h2>
<form onSubmit={handleSubmit}>
<input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
<input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
<input type="email" name="email" placeholder="Email" onChange={handleChange} required />
<button type="submit">Save</button>
<button type="button" onClick={() => navigate("/employees")}>Cancel</button>
</form>
</div>
);
};

export default AddEmployee;

