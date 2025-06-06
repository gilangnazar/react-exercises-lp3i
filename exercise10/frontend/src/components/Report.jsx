import { Table } from "react-bootstrap";

export default function Report() {
  const data = [
    { id: 1, produk: "produk A", jumlah: 120, total: 2000000 },
    { id: 1, produk: "produk B", jumlah: 80, total: 150000 },
    { id: 1, produk: "produk C", jumlah: 50, total: 800000 },
  ];

  return (
    <div className="p-4 w-100 mt-20">
      <h3>Laporan Penjualan</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Produk</th>
            <th>Jumlah Terjual</th>
            <th>Total Pendapatan</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.produk}</td>
              <td>{item.jumlah}</td>
              <td>Rp {item.total.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
