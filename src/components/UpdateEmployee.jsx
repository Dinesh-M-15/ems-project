

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateEmployee = () => {
const { id } = useParams();
const [employee, setEmployee] = useState({ firstName: "", lastName: "", email: "" });
const navigate = useNavigate();

useEffect(() => {
axios.get(`http://localhost:9090/employees/${id}`)
.then(response => setEmployee(response.data))
.catch(error => console.error("Error fetching employee:", error));
}, [id]);

const handleChange = (e) => {
setEmployee({ ...employee, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
e.preventDefault();
axios.put(`http://localhost:9090/employees/${id}`, employee)
.then(() => navigate("/employees"))
.catch(error => console.error("Error updating employee:", error));
};

return (
<div className="container">
<h2>Update Employee</h2>
<form onSubmit={handleSubmit}>
<input type="text" name="firstName" value={employee.firstName} onChange={handleChange} required />
<input type="text" name="lastName" value={employee.lastName} onChange={handleChange} required />
<input type="email" name="email" value={employee.email} onChange={handleChange} required />
<button type="submit">Update</button>
<button type="button" onClick={() => navigate("/employees")}>Cancel</button>
</form>
</div>
);
};

export default UpdateEmployee;



