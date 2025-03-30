import { useState, useRef } from "react";

function Table() {
    const [data, setData] = useState([
        {productName: "Mouse", price: "5000", qty: 10},
        {productName: "Keyboard", price: "3000", qty: 15},
        {productName: "Monitor", price: "10000", qty: 35}
    ])

    const addData = () => {
        setData([...data, {productName, price, qty}])
        setProductName('')
        setPrice('0')
        setQty('0')
        ref.current.focus()
    }

    const [productName, setProductName] = useState('')
    const [price, setPrice] = useState('0')
    const [qty, setQty] = useState('0')
    const ref = useRef(null)

    const totalQty = data.reduce((accumulator, currentValue) => Number(accumulator) + Number(currentValue.qty), 0)
    

    return(
        <>

            <form className="mt-3" onSubmit={(e) => {e.preventDefault()}}>
                <h1>Form input product</h1>
                <div className="mb-3">
                    <label  className="form-label">Product Name</label>
                    <input value={productName} onChange={(e) => setProductName(e.target.value)} type="text" className="form-control" id="productName" aria-describedby="emailHelp" ref={ref}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" className="form-control" id="price"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Quantity</label>
                    <input value={qty} onChange={(e) => setQty(e.target.value)} type="number" className="form-control" id="qty"/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={addData}>Submit</button>
            </form>

            <hr className="mb-5 mt-5" />
            <h4>total qty = {totalQty}</h4>
            <table className="table">
                <thead>
                    <tr>
                        <td>No</td>
                        <td>Nama Product</td>
                        <td>Harga</td>
                        <td>Jumlah Barang</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return(
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.productName}</td>
                                <td>{item.price}</td>
                                <td>{item.qty}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Table;