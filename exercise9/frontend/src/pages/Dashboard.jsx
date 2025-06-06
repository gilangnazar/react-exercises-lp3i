import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import api from "../utils/Api";
import axios from "axios";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const fetchProfile = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
      return;
    }

    try {
      const res = await axios.get("http://localhost:4000/api/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data.user.username);
    } catch {
      localStorage.removeItem("token");
      navigate("/");
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <>
      <h2>Dashboard</h2>
      <p>selamat datang, {user}</p>
      <Navbar />
    </>
  );
}
