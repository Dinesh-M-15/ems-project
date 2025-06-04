import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";  // Import axios
import "./styles.css";

const EmployeeList = () => {
const navigate = useNavigate();

const [employees, setEmployees] = useState([]);
const [loading, setLoading] = useState(true);  // Loading state for data fetching
const [error, setError] = useState(null);  // Error handling state

// Fetch employee data from backend API
useEffect(() => {
const fetchEmployees = async () => {
try {
const response = await axios.get("http://localhost:9090/employees"); // Assuming your backend API endpoint is '/api/employees'
setEmployees(response.data);
setLoading(false);
} catch (err) {
setError("Failed to fetch employees");
setLoading(false);
}
};

fetchEmployees();

}, []);

// Handle delete operation
const handleDelete = async (id) => {
if (window.confirm("Are you sure?")) {
try {
await axios.delete(`http://localhost:9090/employees/${id}`); // API call to delete employee
setEmployees(employees.filter(emp => emp.id !== id));  // Update local state after deletion
} catch (err) {
alert("Error deleting employee");
}
}
};

if (loading) {
return <div>Loading...</div>;
}

if (error) {
return <div>{error}</div>;
}

return (
<div className="container">
<h2>Employees List</h2>
<button className="add-btn" onClick={() => navigate("/add")}>Add Employee</button>
<table>
<thead>
<tr>
<th>First Name</th><th>Last Name</th><th>Email</th><th>Actions</th>
</tr>
</thead>
<tbody>
{employees.map(emp => (
<tr key={emp.id}>
<td>{emp.firstName}</td><td>{emp.lastName}</td><td>{emp.email}</td>
<td>
<button className="update-btn" onClick={() => navigate(`/update/${emp.id}`)}>Update</button>
<button className="delete-btn" onClick={() => handleDelete(emp.id)}>Delete</button>
<button className="view-btn" onClick={() => navigate(`/view/${emp.id}`)}>View</button>
</td>
</tr>
))}
</tbody>
</table>
</div>

);
};

export default EmployeeList;


