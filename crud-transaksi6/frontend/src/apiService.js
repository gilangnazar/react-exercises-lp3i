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

  export const fetchListBarang = async () => {
    try {
      const res = await axios.get(`${API_URL}/listbarang`)
      return res.data
    } catch (error) {
      console.log('Error Fetching/Getting listbarang: ', error)
      throw error
    }
  }

  export const fetchTransaksi = async () => {
    try {
      const res = await axios.get(`${API_URL}/transaksi`)
      return res.data
    } catch (error) {
      console.log('Error Fetching/Getting transaksi: ', error)
      throw error
    }
  }

  export const deleteTransaksi = async (NoTransaksi) => {
    try {
      const res = await axios.delete(`${API_URL}/transaksi/${NoTransaksi}`)
      return res.data
    } catch (error) {
      console.log('Error deleting transaksi: ', error)
      throw error
    }
  }
