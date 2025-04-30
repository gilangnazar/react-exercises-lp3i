import axios from "axios";

const API_URL = 'http://localhost:3000'

    // GET /perkuliahan
    // fetching/getting data from database 
  export const fetchMahasiswa = async () => {
    try {
      const res = await axios.get(`${API_URL}/perkuliahan`)
      return res.data.data
    } catch (error) {
      console.log('Error Fetching/Getting perkuliahan: ', error)
      throw error
    }
  }

  export const fetchJurusan = async () => {
    try {
      const res = await axios.get(`${API_URL}/jurusan`)
      return res.data.data
    } catch (error) {
      console.log('Error Fetching/Getting perkuliahan: ', error)
      throw error
    }
  }