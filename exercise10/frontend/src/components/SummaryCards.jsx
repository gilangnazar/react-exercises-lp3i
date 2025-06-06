import { Card, Row, Col } from "react-bootstrap";
import { FaDollarSign } from "react-icons/fa";
const data = [
  { title: "Total Penjualan", value: "Rp 120 Juta" },
  { title: "Transaksi Hari ini", value: "Rp 12 Juta" },
  { title: "Pelanggan Baru", value: "18" },
  { title: "Produk Terjual", value: "820" },
];
export default function SummaryCards() {
  return (
    <Row className='m-3'>
      {data.map((item, index) => (
        <Col
          key={index}
          className='m-2 p-2 rounded '
          style={{ backgroundColor: "#393E46", color: "#DFD0B8", height: "75px" }}>
          <Card.Body className='d-flex align-items-center justify-content-start gap-3'>
            <FaDollarSign style={{ fontSize: "25px" }} />
            <div className=''>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.value}</Card.Text>
            </div>
          </Card.Body>
        </Col>
      ))}
    </Row>
  );
}
