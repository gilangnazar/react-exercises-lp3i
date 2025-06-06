import { Link, useNavigate } from "react-router-dom";
import api from "../utils/Api";

export default function Navbar() {
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      const token = localStorage.getItem("token");
      const headers = token ? { Authorization: `Bearer: ${token}` } : {};
      await api.post("/logout", {}, { headers });
    } catch {
      localStorage.removeItem("token");
      navigate("/");
    }
}

  return (
    <nav>
      <Link to={"/"}>Form</Link> || <Link to={"/list"}>List</Link> ||
      <Link to={"/dashboard"}>Dashboard</Link> ||
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}
