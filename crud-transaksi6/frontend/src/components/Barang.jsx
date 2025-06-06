import { useState, useEffect } from 'react'
import axios from 'axios'
import Tabledata from './Tabledata';
import Formdata from './Formdata';

import {fetchBarang} from '../apiService'

function Barang() {
  const [barang, setBarang] = useState([])
  const [edit, setEdit] = useState(null)
  const [form, setForm] = useState({
    NamaBarang: '',
    Harga: '',
    Quantity: '',
    KodeBarang: '',
  })

  async function fetchData() {
    try {
      const data = await fetchBarang()
      setBarang(data)
    } catch (error) {
      console.log('Error fetching/getting data: ', error)
    }
  }

  // POST /tambahbarang
  // submiting data into database
  async function submitData() {
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
      console.log("Error submitting data: ", error);
    }
  }


  // PUT /editbarang/:KodeBarang
  // update existing data into the database
  async function updateData() {    
    const {NamaBarang, Harga, Quantity, KodeBarang} = form

    if(!NamaBarang || !Harga || !Quantity || !KodeBarang){
      return
    }

    try {
      await axios.put('http://localhost:3000/editbarang', {KodeBarang, NamaBarang, Harga, Quantity})
      setForm({
        NamaBarang: '',
        Harga: '',
        Quantity: '',
        KodeBarang: '',
      })
      setEdit(null)
      fetchData()
    } catch (error) {
      console.log("Error updating data: ", error);
    }
  }

  // handles
  // handle which function is used based on the state we use
  async function handleFormSubmit(e) {
    e.preventDefault()
    if(edit) {
      await updateData()
    } else {
      await submitData()
    }
  }

  // handle when click btn edit, displaying the data into the input
  function handleButtonEdit(data){
    // console.log("Choosen data to edit: ", data)
    setEdit(data)
    setForm({
      NamaBarang: data.NamaBarang,
      Harga: data.Harga,
      Quantity: data.Quantity,
      KodeBarang: data.KodeBarang,
    })
  }

  // handle input change when we type in the input 
  function handleInputChange(e){
    const {name, value} = e.target
    setForm({...form, [name]:value,})
  }

  useEffect(() => {
    fetchData()
  }, []) 

  return (
    <>
    <div className='container mt-5 mb-5'>
      <Formdata 
        edit={edit}
        form={form}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        />

      <hr />
      <Tabledata
        barang={barang}
        edit={edit}
        fetchData={fetchData}
        handleButtonEdit={handleButtonEdit}
      />
    </div>
    </>
  )
}

export default Barang
