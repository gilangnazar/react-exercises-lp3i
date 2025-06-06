import { Container, Row, Col } from "react-bootstrap";
import SummaryCards from "../components/SummaryCards";
import SalesChart from "../components/SalesChart";
import RevenueChart from "../components/RevenueChart";

export default function Dashboard() {
  return (
    <>
      <div className='d-flex'>
        <Container fluid className='p-4'>
          <SummaryCards />
          <Row className='mt-4'>
            <Col md={6}>
              <h5>Grafik Penjualan</h5>
              <SalesChart />
            </Col>
            <Col md={6}>
              <h5>Grafik Pendapatan</h5>
              <SalesChart />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
