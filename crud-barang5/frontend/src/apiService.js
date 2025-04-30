import axios from "axios";

const API_URL = 'http://localhost:3000'

// GET /Barang
  // fetching/getting data from database 
  export const fetchBarang = async () => {
    try {
      const res = await axios.get(`${API_URL}/barang`)
      return res.data
    } catch (error) {
      console.log('Error Fetching/Getting barang: ', error)
      throw error
    }
  }