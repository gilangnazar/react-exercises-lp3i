import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [barang, setBarang] = useState([])
  const [form, setForm] = useState({
    NamaBarang: '',
    Harga: '',
    Quantity: '',
    KodeBarang: ''
})

  const handleInputChange = (e) => {
    const {name, value} = e.target
    setForm({...form, [name]: value})
  }

  const handleSubmit = async (e) => {
    // e.prefentDefault()

    try {
      axios.post('http://localhost:3000/tambahbarang', form)
      fetchData()
      setForm({
        NamaBarang: '',
        Harga: '',
        Quantity: '',
        KodeBarang: ''
      })
    } catch (error) {
      console.log('error: ', error)
    }
  }
  
  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/barang')
      console.log('api res:', res.data)
      setBarang(res.data)
    } catch (error) {
      console.log('err fetch data: ', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, []) 

  return (
    <>
    <div>
      <h1>Tambah Barang</h1>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="NamaBarang" className='form-label'>Nama Barang</label>
          <input type="text"
                name='NamaBarang'
                value={form.NamaBarang}
                required
                className='form-control'
                onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="Harga" className='form-label'>Harga</label>
          <input type="Number"
                name='Harga'
                value={form.Harga}
                required
                className='form-control'
                onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="Quantity" className='form-label'>Quantity</label>
          <input type="Number"
                name='Quantity'
                value={form.Quantity}
                required
                className='form-control'
                onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="KodeBarang" className='form-label'>Kode Barang</label>
          <input type="text"
                name='KodeBarang'
                value={form.KodeBarang}
                required
                className='form-control'
                onChange={handleInputChange}
          />
        </div>
        <button className='btn btn-primary mt-1' type='submit'>Submit</button>
      </form>
      <hr />
      <h1 className='mb-5'>Barang List</h1>
      <table className='table table-striped'>
        <thead>
          <tr>
            <td>Nama Barang</td>
            <td>Harga</td>
            <td>Qty</td>
          </tr>
        </thead>
        <tbody>
          {barang.map((item) => (
            <tr>
              <td>{item.NamaBarang}</td>
              <td>{item.Harga}</td>
              <td>{item.Quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default App
