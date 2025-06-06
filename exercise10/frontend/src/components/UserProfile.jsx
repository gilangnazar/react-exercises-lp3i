import { Card } from "react-bootstrap";

export default function Profile() {
  return (
    <>
      <h3>Profil Pengguna</h3>
      <Card style={{ width: "400px" }}>
        <Card.Body>
          <Card.Title>Nama: Gilang</Card.Title>
          <Card.Text>Email: gilang@mail.com</Card.Text>
          <Card.Text>Peran: Admin</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
