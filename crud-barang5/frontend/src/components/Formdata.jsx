export default function Formdata({handleFormSubmit, NamaBarang, Harga, Quantity, KodeBarang, handleInputChange}){
  console.log('formdata comp render');
    return(
        <>
            <h1>Tambah Barang</h1>
            <form className='form' onSubmit={handleFormSubmit}>
              <div>
                <label htmlFor="NamaBarang" className='form-label'>Nama Barang</label>
                <input type="text"
                      name='NamaBarang'
                      className='form-control'
                      value={NamaBarang}
                      onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="Harga" className='form-label'>Harga</label>
                <input type="Number"
                      name='Harga'
                      className='form-control'
                      value={Harga}
                      onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="Quantity" className='form-label'>Quantity</label>
                <input type="Number"
                      name='Quantity'
                      className='form-control'
                      value={Quantity}
                      onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="KodeBarang" className='form-label'>Kode Barang</label>
                <input type="text"
                      name='KodeBarang'
                      className='form-control'
                      value={KodeBarang}
                      onChange={handleInputChange}
                />
              </div>
              <button className='btn btn-primary mt-1' type='submit' onClick={() => console.log('click submit')}>Submit</button>
            </form>
        </>
    )
}