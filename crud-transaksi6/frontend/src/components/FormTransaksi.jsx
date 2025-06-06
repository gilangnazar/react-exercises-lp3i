import { useState, useEffect } from 'react';
import {fetchListBarang} from '../apiService.js'

export default function FormTransaksi({handleInputChange, handleFormSubmit, edit, form}){
  const [barang, setBarang] = useState([])

  async function getListBarang() {
    try {
      const res = await fetchListBarang()
      setBarang(res)
    } catch (error) {
      console.log('error getting listbarang', error);
    }
  }

  useEffect(() => {
    getListBarang()
  }, [])

    return(
        <>
            {/* <h1>Tambah Barang</h1> */}
            <h1>{edit ? "Edit Data Transaksi" : "Tambah Transaksi"}</h1>
            <form className='form' onSubmit={handleFormSubmit}>
              <div>
                <label htmlFor="NoTransaksi" className='form-label'>No Transaksi</label>
                <input type="text"
                      name='NoTransaksi'
                      className='form-control'
                      value={form.NoTransaksi}
                      onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="TanggalTransaksi" className='form-label'>Tanggal Transaksi</label>
                <input type="date"
                      name='TanggalTransaksi'
                      className='form-control'
                      value={form.TanggalTransaksi}
                      onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="KodeBarang" className='form-label'>Nama Barang</label>
                <select 
                name="KodeBarang" 
                className='form-control'
                onChange={handleInputChange}>
                  <option value="">-- Pilih Barang --</option>
                  {barang.map((item, key) => (
                    <option value={item.KodeBarang} key={key}>{item.NamaBarang}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="Quantity" className='form-label'>Quantity</label>
                  <input type="number"
                        name='Quantity'
                        className='form-control'
                        value={form.Quantity}
                        onChange={handleInputChange}
                  />
              </div>
              <div>
                <label htmlFor="Total" className='form-label'>Total</label>
                  <input type="text"
                        name='Total'
                        className='form-control'
                        value={form.Total}
                        onChange={handleInputChange}
                        disabled
                  />
              </div>
              <button className='btn btn-primary mt-1' type='submit'>{edit ? "Edit data" : "Submit Data"}</button>
            </form>
        </>
    )
}