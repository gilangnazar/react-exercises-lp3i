import { useState, useEffect } from 'react'
import Tabledata from './components/Tabledata';
import Formdata from './components/Formdata';
import { fetchMahasiswa } from './apiService';

function App() {
  const [mahasiswa, setMahasiswa] = useState([])

  async function fetchData() {
    try {
      const data = await fetchMahasiswa()
      setMahasiswa(data)
    } catch (error) {
      console.log('Error fetching/getting data: ', error)
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
        />

      <hr />
      <Tabledata
      mahasiswa = {mahasiswa}
      />
    </div>
    </>
  )
}

export default App
