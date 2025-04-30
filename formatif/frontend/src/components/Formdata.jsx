import { useState, useEffect } from "react";
import { fetchJurusan } from "../apiService";
import axios from "axios";

export default function Formdata(props){
  const [jurusan, setJurusan] = useState([])
  const [form, setForm] = useState({
    NIM: '',
    Nama: '',
    TanggalLahir: '',
    StatusPernikahan: '',
    Agama: '',
    Alamat: '',
    KodeJurusan: '',
    BiayaKuliah: ''
  })
  
    async function fetchDataJurusan() {
      try {
        const data = await fetchJurusan()
        setJurusan(data)
      } catch (error) {
        console.log('Error fetching/getting data: ', error)
      }
    } 

    async function submitMahasiswa(){
      const {NIM, Nama, TanggalLahir, StatusPernikahan, Agama, Alamat, KodeJurusan, BiayaKuliah} = form

      try {
        await axios.post('http://localhost:3000/perkuliahan', {NIM, Nama, TanggalLahir, StatusPernikahan, Agama, Alamat, KodeJurusan, BiayaKuliah})
        setForm({
          NIM: '',
          Nama: '',
          TanggalLahir: '',
          StatusPernikahan: '',
          Agama: '',
          Alamat: '',
          KodeJurusan: '',
          BiayaKuliah: ''
      })
        props.fetchData()
      } catch (error) {
        console.log("Error submitting data: ", error);
      }
    }

    function handleInputChange(e) {
      const {name, value, type, checked} = e.target

      if(type === 'radio'){
        setForm({...form, [name]:value})
      } else if(type === "checkbox") {
        setForm({...form, [name]: checked ? 'menikah' : 'belum menikah'})
      } else {
        setForm({...form, [name]:value})
      }

    }

    async function handleFormSubmit(e) {
      e.preventDefault()
      await submitMahasiswa()
    }
  
    useEffect(() => {
      fetchDataJurusan()
    }, []) 

    return(
        <>
            <h1>Form Mahasiswa</h1>
            <form className="form" onSubmit={handleFormSubmit}>
              <div>
                <label className="form-label">NIM</label>
                <input type="text" name="NIM" className="form-control" onChange={handleInputChange}/>
              </div>
              <div>
                <label className="form-label">Nama</label>
                <input type="text" name="Nama" className="form-control" onChange={handleInputChange}/>
              </div>
              <div>
                <label className="form-label">Tanggal Lahir</label>
                <input type="date" name="TanggalLahir" className="form-control" onChange={handleInputChange}/>
              </div>
              <div>
                <label className="form-label">Status Pernikahan</label>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="Menikah" onChange={handleInputChange} name="StatusPernikahan"/>
                  <label className="form-check-label" htmlFor="StatusPernikahan">
                    Menikah
                  </label>
                </div>
              </div>
              <div>
                <label className="htmlForm-label">Agama</label>
                <div className="form-check">
                  <input className="form-check-input" type="radio" value="Islam" onClick={handleInputChange} name="Agama" />
                  <label className="form-check-label">
                    Islam
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" value="Protestan" onClick={handleInputChange} name="Agama" />
                  <label className="form-check-label">
                    Protestan
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" value="Hindu" onClick={handleInputChange} name="Agama" />
                  <label className="form-check-label">
                    Hindu
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" value="Budha" onClick={handleInputChange} name="Agama" />
                  <label className="form-check-label">
                    Budha
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" value="Katolik" onClick={handleInputChange} name="Agama" />
                  <label className="form-check-label">
                    Katolik
                  </label>
                </div>
              </div>
              <div>
                <label className="form-label">Alamat</label>
                <input type="text" name="Alamat" className="form-control" onChange={handleInputChange}/>
              </div>
              <div>
                <label className="form-label">Jurusan</label>
                <select name="KodeJurusan" className="form-control" onChange={handleInputChange}>
                  <option value="">--Pilih Jurusan--</option>
                  {jurusan.map((item, key) => (
                    <option value={item.KodeJurusan} key={key}>{item.Jurusan}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="form-label">Biaya Kuliah</label>
                <input type="text" name="BiayaKuliah" className="form-control" onChange={handleInputChange}/>
              </div>
              <button type="submit" className="m-1 btn btn-primary">Submit</button>
              <button type="submit" className="m-1 btn btn-warning">Clear</button>
            </form>
        </>
    )
}