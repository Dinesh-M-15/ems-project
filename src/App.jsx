
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee";
import UpdateEmployee from "./components/UpdateEmployee";
import ViewEmployee from "./components/ViewEmployee";

const App = () => {
return (
<Router >
<Routes>
<Route path="/" element={<Login />} />
<Route path="/employees" element={<EmployeeList />} />
<Route path="/add" element={<AddEmployee />} />
<Route path="/update/:id" element={<UpdateEmployee />} />
<Route path="/view/:id" element={<ViewEmployee />} />
</Routes>
</Router>

);
};

export default App;


