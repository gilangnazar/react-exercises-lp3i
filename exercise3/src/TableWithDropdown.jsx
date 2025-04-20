import { useState, useRef } from 'react';

function TableWithDropdown() {
  const listProduct = [
    { productName: 'Mouse', price: '5000' },
    { productName: 'Keyboard', price: '3000' },
    { productName: 'Monitor', price: '10000' },
  ];

  const [data, setData] = useState([
    { productName: 'Mouse', price: '5000', qty: 1 },
    { productName: 'Keyboard', price: '3000', qty: 1 },
    { productName: 'Monitor', price: '10000', qty: 1 },
  ]);

  const addData = () => {
    if (productName && price && qty) {
      setData([...data, { productName, price, qty }]);
      setProductName('');
      setPrice('0');
      setQty('0');
      ref.current.value = '';
    }
  };

  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('0');
  const [qty, setQty] = useState('0');
  const ref = useRef(null);

  const totalQty = data.reduce(
    (accumulator, currentValue) =>
      Number(accumulator) + Number(currentValue.qty),
    0
  );

  const amount = data.reduce(
    (accumulator, currentValue) =>
      Number(accumulator) +
      Number(currentValue.price) * Number(currentValue.qty),
    0
  );

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  const handleEdit = (index) => {
    const itemToEdit = data[index];
    setProductName(itemToEdit.productName);
    setPrice(itemToEdit.price);
    setQty(itemToEdit.qty);
    ref.current.value = listProduct.findIndex(
      (item) => item.productName === itemToEdit.productName
    );
  };

  return (
    <>
      <form
        className="mt-3"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1>Form input product</h1>
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <select
            ref={ref}
            className="form-select"
            onChange={(e) => {
              const selectedIndex = e.target.value;
              const selectedProduct = listProduct[selectedIndex];
              setProductName(selectedProduct.productName);
              setPrice(selectedProduct.price);
            }}
          >
            <option value="">--pilih produk--</option>
            {listProduct.map((item, index) => {
              return (
                <option key={index} value={index}>
                  {item.productName}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            disabled
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            className="form-control"
            id="price"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Quantity</label>
          <input
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            type="number"
            className="form-control"
            id="qty"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Amount</label>
          <input
            value={price * qty}
            // onChange={(e) => setQty(e.target.value)}
            type="number"
            className="form-control"
            id="qty"
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={addData}>
          Submit
        </button>
      </form>

      <hr className="mb-5 mt-5" />

      <h4>total qty = {totalQty}</h4>
      <h4>grandtotal = {amount.toLocaleString('id')}</h4>
      <table className="table table-striped">
        <thead>
          <tr>
            <td>No</td>
            <td>Nama Product</td>
            <td>Harga</td>
            <td>Jumlah Barang</td>
            <td>Total</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.productName}</td>
                <td>{Number(item.price).toLocaleString('id')}</td>
                <td>{item.qty}</td>
                <td>
                  {(Number(item.price) * Number(item.qty)).toLocaleString('id')}
                </td>
                <td>
                  <button
                    className="btn btn-danger m-1"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-warning m-1"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
          <tr>
            <td colSpan={4} style={{fontWeight: 'bold'}}>GrandTotal : </td>
            <td className='grandtotalcell' style={{backgroundColor: 'lightblue', color: 'black'}}>{amount.toLocaleString('id')}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default TableWithDropdown;
