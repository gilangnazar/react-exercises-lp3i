export default function Formdata({edit, form, handleInputChange, handleFormSubmit}){

    return(
        <>
            {/* <h1>Tambah Barang</h1> */}
            <h1>{edit ? "Edit Data Barang" : "Tambah Barang"}</h1>
            <form className='form' onSubmit={handleFormSubmit}>
              <div>
                <label htmlFor="NamaBarang" className='form-label'>Nama Barang</label>
                <input type="text"
                      name='NamaBarang'
                      className='form-control'
                      value={form.NamaBarang}
                      onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="Harga" className='form-label'>Harga</label>
                <input type="Number"
                      name='Harga'
                      className='form-control'
                      value={form.Harga}
                      onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="Quantity" className='form-label'>Quantity</label>
                <input type="Number"
                      name='Quantity'
                      className='form-control'
                      value={form.Quantity}
                      onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="KodeBarang" className='form-label'>Kode Barang</label>
                {edit ? (
                  <input type="text"
                        name='KodeBarang'
                        className='form-control'
                        value={form.KodeBarang}
                        onChange={handleInputChange}
                        disabled
                  />
                ) : 
                (
                  <input type="text"
                        name='KodeBarang'
                        className='form-control'
                        value={form.KodeBarang}
                        onChange={handleInputChange}
                  />
                )}
              </div>
              <button className='btn btn-primary mt-1' type='submit'>{edit ? "Edit data" : "Submit Data"}</button>
            </form>
        </>
    )
}