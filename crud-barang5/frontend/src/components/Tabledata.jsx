import DataTable from 'react-data-table-component'
import axios from "axios";
import { useState } from 'react';

export default function Tabledata({barang, fetchData, handleButtonEdit}) {    
    const [search, setSearch] = useState('')

    const filteredData = barang.filter(item => {
        item.NamaBarang.toLowerCase().includes(search.toLocaleLowerCase())
    })

    async function deleteData(KodeBarang) {
        try {
          await axios.delete(`http://localhost:3000/deletebarang/${KodeBarang}`)
          fetchData()
        } catch (error) {
          console.log('delete error', error)
        }
      }

    const cols = [
        {
            name: 'Nama Barang',
            selector: row=>row.NamaBarang,
            sortable: true
        },
        {
            name: 'Harga',
            selector: row=>row.Harga,
            sortable: true
        },
        {
            name: 'Quantity',
            selector: row=>row.Quantity,
            sortable: true
        },
        {
            name: 'Kode Barang',
            selector: row => row.KodeBarang,
            sortable: true
        },
        {
            name: 'Action',
            cell: row => (
                <div className="">
                    <button className="btn btn-warning m-1" onClick={() => handleButtonEdit(row)}>Edit</button>
                    <button className="btn btn-danger m-1" onClick={() => deleteData(row.KodeBarang)}>Delete</button>
                </div>
            )
        }

    ]

    return (
        <>
            <h1 className="m-2">List Barang</h1>
            
            <DataTable
                columns={cols}
                data={barang}
                pagination
                highlightOnHover
                striped
                dense
            />
        </>
    )
}