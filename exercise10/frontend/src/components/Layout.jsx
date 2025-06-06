import { Container } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className='d-flex' style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Container fluid className='p-4'>
          {children}
        </Container>
      </div>
    </>
  );
}
