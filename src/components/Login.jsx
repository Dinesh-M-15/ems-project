import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import "./styles.css";

const Login = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [message, setMessage] = useState("");
const [success, setSuccess] = useState(false);
const navigate = useNavigate();

const handleLogin = (e) => {
e.preventDefault();
if (email === "dinesh@com" && password === "wayne") {
localStorage.setItem("auth", "true");
setSuccess(true);
setMessage("Login successful!");
setTimeout(() => navigate("/employees"), 1500);
} else {
setSuccess(false);
setMessage("Invalid email or password!");
}
};

return (
<div className="login-container">
<h2>Admin Login</h2>
{message && (
<Alert variant="filled" severity={success ? "success" : "error"}>
{message}
</Alert>
)}
<form onSubmit={handleLogin}>
<input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required  />
<input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required  />
<button type="submit" >Login</button>
</form>
</div>
);
};

export default Login;

