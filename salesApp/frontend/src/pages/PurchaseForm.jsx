import React, { useEffect, useState } from 'react';
import { fetchSuppliers } from '../../api/suppliersApi';
import { fetchUsers } from '../../api/usersApi';
import { fetchProducts } from '../../api/productsApi';

// const productsList = [
//   { id: 1, name: 'Smartphone Android X1', price: 3500000 },
//   { id: 2, name: 'Laptop ProBook 14"', price: 7500000 },
//   { id: 3, name: 'Kaos Polos Lengan Pendek', price: 50000 },
//   { id: 4, name: 'Celana Jeans Slim Fit', price: 150000 },
//   { id: 5, name: 'Keripik Singkong Pedas', price: 10000 },
//   { id: 6, name: 'Air Mineral 600ml', price: 4000 },
//   { id: 7, name: 'Blender 3in1', price: 450000 },
//   { id: 8, name: 'Kompor Gas 2 Tungku', price: 650000 },
//   { id: 9, name: 'Pulpen Gel Hitam', price: 5000 },
//   { id: 10, name: 'Buku Tulis 40 Lembar', price: 4000 },
// ];

// const suppliers = [
//   { id: 1, name: 'PT Sumber Elektronik' },
//   { id: 2, name: 'Toko Pakaian Makmur' },
//   { id: 3, name: 'CV Makanan Sehat' },
//   { id: 4, name: 'UD Alat Rumah Tangga' },
//   { id: 5, name: 'ATK Stationery Center' },
// ];

// const users = [
//   { id: 1, username: 'admin_user' },
//   { id: 2, username: 'sales_john' },
//   { id: 3, username: 'purch_anna' },
//   { id: 4, username: 'inv_mike' },
//   { id: 5, username: 'cashier_sue' },
// ];

const statuses = ['draft', 'received', 'cancelled'];

function formatRupiah(number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(number);
}

export default function PurchaseForm() {
  const [supplierId, setSupplierId] = useState('');
  const [suppliers, setSuppliers] = useState([]);

  const [products, setProducts] = useState([]);

  const [users, setUsers] = useState([]);

  const [status, setStatus] = useState('received');
  const [createdBy, setCreatedBy] = useState('');
  const [items, setItems] = useState([{ productId: '', quantity: 1, unitPrice: 0 }]);

  const getSuppliers = async () => {
    try {
      let res = await fetchSuppliers();
      setSuppliers(res);
    } catch (error) {
      console.log('error getting suppliers,', error);
    }
  };

  const getUsers = async () => {
    try {
      let res = await fetchUsers();
      setUsers(res);
    } catch (error) {
      console.log('error getting suppliers,', error);
    }
  };

  const getProducts = async () => {
    try {
      let res = await fetchProducts();
      setProducts(res);
    } catch (error) {
      console.log('error getting suppliers,', error);
    }
  };

  useEffect(() => {
    getSuppliers();
    getUsers();
    getProducts();
  }, []);

  // Hitung total harga per item dan total pembelian
  const calculateItemTotal = (item) => item.quantity * item.unitPrice;
  const totalAmount = items.reduce((acc, item) => acc + calculateItemTotal(item), 0);

  // Handle perubahan produk, quantity, unit price
  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    if (field === 'productId') {
      const prod = products.find((p) => p.id === Number(value));
      updatedItems[index].productId = Number(value);
      updatedItems[index].unitPrice = prod ? prod.price : 0;
      if (!updatedItems[index].quantity) updatedItems[index].quantity = 1;
    } else if (field === 'quantity') {
      updatedItems[index].quantity = Math.max(1, Number(value));
    }
    setItems(updatedItems);
  };

  // Tambah baris item baru
  const addItem = () => {
    setItems([...items, { productId: '', quantity: 1, unitPrice: 0 }]);
  };

  // Hapus baris item
  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems.length ? updatedItems : [{ productId: '', quantity: 1, unitPrice: 0 }]);
  };

  // Submit form (contoh validasi sederhana)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!supplierId) return alert('Pilih supplier!');
    if (!createdBy) return alert('Pilih user pembuat!');
    if (items.length === 0 || items.some((i) => !i.productId)) return alert('Isi semua produk!');
    alert('Pembelian berhasil disimpan (simulasi)');
    // Kirim data ke API / backend di sini
  };

  return (
    <div className='container py-4'>
      <div className='card p-4 shadow-sm rounded-4'>
        <h3 className='mb-4 text-primary'>
          <i className='bi bi-cart4 me-2'></i>Form Pembelian
        </h3>

        <form onSubmit={handleSubmit}>
          <div className='row g-3 mb-4'>
            <div className='col-md-4'>
              <label htmlFor='supplier' className='form-label'>
                Supplier <i className='bi bi-box-seam ms-1 text-primary'></i>
              </label>
              <select
                id='supplier'
                name='supplierId'
                className='form-select'
                value={supplierId}
                onChange={(e) => setSupplierId(e.target.value)}
                required>
                <option value=''>Pilih Supplier</option>
                {suppliers.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            <div className='col-md-4'>
              <label htmlFor='status' className='form-label'>
                Status <i className='bi bi-info-circle ms-1 text-primary'></i>
              </label>
              <select
                id='status'
                name='status'
                className='form-select'
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                required>
                {statuses.map((st) => (
                  <option key={st} value={st}>
                    {st.charAt(0).toUpperCase() + st.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div className='col-md-4'>
              <label htmlFor='createdBy' className='form-label'>
                Created By <i className='bi bi-person-circle ms-1 text-primary'></i>
              </label>
              <select
                id='createdBy'
                name='createdBy'
                className='form-select'
                value={createdBy}
                onChange={(e) => setCreatedBy(e.target.value)}
                required>
                <option value=''>Pilih User</option>
                {users.map((u) => (
                  <option key={u.id} value={u.id}>
                    {u.username}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className='table-responsive mb-3'>
            <table className='table table-bordered align-middle'>
              <thead className='table-light'>
                <tr>
                  <th style={{ width: '35%' }}>
                    Produk <i className='bi bi-box ms-1 text-primary'></i>
                  </th>
                  <th style={{ width: '15%' }}>
                    Jumlah <i className='bi bi-calculator ms-1 text-primary'></i>
                  </th>
                  <th style={{ width: '20%' }}>
                    Harga Satuan (Rp) <i className='bi bi-currency-dollar ms-1 text-primary'></i>
                  </th>
                  <th style={{ width: '20%' }}>
                    Total Harga (Rp) <i className='bi bi-cash-stack ms-1 text-primary'></i>
                  </th>
                  <th style={{ width: '10%' }} className='text-center'>
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, idx) => {
                  const total = item.quantity * item.unitPrice;
                  return (
                    <tr key={idx}>
                      <td>
                        <select
                          name='productId'
                          className='form-select'
                          value={item.productId}
                          onChange={(e) => handleItemChange(idx, 'productId', e.target.value)}
                          required>
                          <option value=''>Pilih Produk</option>
                          {products.map((p) => (
                            <option key={p.id} value={p.id}>
                              {p.name}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td>
                        <input
                          type='number'
                          name='quantity'
                          className='form-control'
                          min={1}
                          value={item.quantity}
                          onChange={(e) => handleItemChange(idx, 'quantity', e.target.value)}
                          required
                        />
                      </td>
                      <td>
                        <input
                          type='number'
                          name='unitPrice'
                          className='form-control'
                          value={item.unitPrice}
                          readOnly
                        />
                      </td>
                      <td>
                        <input
                          type='text'
                          name='total'
                          className='form-control'
                          value={formatRupiah(total)}
                          readOnly
                        />
                      </td>
                      <td className='text-center'>
                        <button
                          type='button'
                          className='btn btn-danger btn-sm'
                          onClick={() => removeItem(idx)}
                          title='Hapus Item'>
                          <i className='bi bi-trash'></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan='3' className='text-end'>
                    Total Pembelian:
                  </th>
                  <th>
                    <input
                      type='text'
                      className='form-control fw-bold text-danger'
                      value={formatRupiah(totalAmount)}
                      readOnly
                    />
                  </th>
                  <th></th>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className='mb-4'>
            <button type='button' className='btn btn-success' onClick={addItem}>
              <i className='bi bi-plus-lg me-2'></i>Tambah Item
            </button>
          </div>

          <button type='submit' className='btn btn-primary w-100'>
            <i className='bi bi-save me-2'></i>Simpan Pembelian
          </button>
        </form>
      </div>
    </div>
  );
}
