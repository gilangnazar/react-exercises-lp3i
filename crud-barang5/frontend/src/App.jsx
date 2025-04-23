import { useState, useEffect } from 'react'
import axios from 'axios'
import Tabledata from './components/Tabledata';
import Formdata from './components/Formdata';

function App() {
  const [barang, setBarang] = useState([])

  const [form, setForm] = useState({
    NamaBarang: '',
    Harga: '',
    Quantity: '',
    KodeBarang: '',
  })

  const [edit, setEdit] = useState('')
  
  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/barang')
      setBarang(res.data)
    } catch (error) {
      console.log('err fetch data: ', error)
    }
  }

  function handleInputChange(e){
    const {name, value} = e.target
    setForm({...form, [name]:value,})
  }

  function editData(data){
    console.log("data to edit: ", data)
    setEdit(data)
    setForm({
      NamaBarang: data.NamaBarang,
      Harga: data.Harga,
      Quantity: data.Quantity,
      KodeBarang: data.KodeBarang,
    })
    setEdit(null)
  }

  async function updateData(e) {
    e.preventDefault()
    console.log('update data: ', edit);
    
    const {NamaBarang, Harga, Quantity, KodeBarang} = form

    if(!NamaBarang || !Harga || !Quantity || !KodeBarang){
      return
    }

    try {
      await axios.put('http://localhost:3000/editbarang', {KodeBarang, NamaBarang, Harga, Quantity})
      setEdit({
        NamaBarang: '',
        Harga: '',
        Quantity: '',
        KodeBarang: '',
      })
      fetchData()
    } catch (error) {
      console.log("error editData: ", error);
    }
  }

  async function submitData(e) {
    e.preventDefault()
    console.log('submited data: ', form);
    
    const {NamaBarang, Harga, Quantity, KodeBarang} = form

    if(!NamaBarang || !Harga || !Quantity || !KodeBarang){
      return
    }

    try {
      await axios.post('http://localhost:3000/tambahbarang', {KodeBarang, NamaBarang, Harga, Quantity})
      setForm({
        NamaBarang: '',
        Harga: '',
        Quantity: '',
        KodeBarang: '',
      })
      fetchData()
    } catch (error) {
      console.log("error submitData: ", error);
    }
  }

  async function handleFormSubmit(e) {
    e.preventDefault()
    if(edit) {
      await updateData(e)
    } else {
      await submitData(e)
    }
  }

  async function deleteData(KodeBarang) {
    try {
      await axios.delete(`http://localhost:3000/deletebarang/${KodeBarang}`)
      console.log('deleted:', KodeBarang);
      fetchData()
    } catch (error) {
      console.log('delete error', error)
    }
  }


  useEffect(() => {
    fetchData()
  }, []) 

  return (
    <>
    <div className='container mt-5 mb-5'>
      <Formdata 
        fetchData={fetchData} 
        handleInputChange={handleInputChange} 
        handleFormSubmit={handleFormSubmit} 
        NamaBarang={form.NamaBarang} 
        Harga={form.Harga} 
        Quantity={form.Quantity} 
        KodeBarang={form.KodeBarang}
        updateData={updateData}
      />

      <hr />
      <Tabledata 
        barang={barang}
        editData={editData}
        deleteData={deleteData}
      />
    </div>
    </>
  )
}

export default App
