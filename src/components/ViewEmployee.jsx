import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ViewEmployee = () => {
const { id } = useParams();
const [employee, setEmployee] = useState({});
const navigate = useNavigate();

useEffect(() => {
axios.get(`http://localhost:9090/employees/${id}`)
.then(response => setEmployee(response.data))
.catch(error => console.error("Error fetching employee:", error));
}, [id]);

return (

<div className="container">  
  <h2>Employee Details</h2>  
  <p><strong>First Name:</strong> {employee.firstName}</p>  
  <p><strong>Last Name:</strong> {employee.lastName}</p>  
  <p><strong>Email:</strong> {employee.email}</p>  
  <button onClick={() => navigate("/employees")}>Back</button>  
</div>

);
};

export default ViewEmployee;


