import { Nav } from "react-bootstrap";
import { FaHome, FaChartBar, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div
      className='vh-100'
      style={{
        width: "240px",
        minHeight: "100vh",
        position: "sticky",
        top: "0",
        color: "#DFD0B8",
        backgroundColor: '#222831'
      }}>
        <Nav.Link as={NavLink} to='/dashboard' end className='m-4 nav-item' activeclassname='active'>
          <FaHome /> Dashboard
        </Nav.Link>
      <Nav.Link as={NavLink} to='/report' end className='m-4 nav-item' activeclassname='active'>
        <FaChartBar /> Laporan
      </Nav.Link>
      <Nav.Link as={NavLink} to='/profile' end className='m-4 nav-item' activeclassname='active'>
        <FaUser /> Profil
      </Nav.Link>
    </div>
  );
}
