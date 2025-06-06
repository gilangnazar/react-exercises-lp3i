import { useEffect, useState } from "react";
import TableTransaksi from "./TableTransaksi";
import FormTransaksi from "./FormTransaksi";
import { fetchTransaksi } from "../apiService";

export default function Transaksi() {
    const [transaksi, setTransaksi] = useState([])
    const [edit, setEdit] = useState(false)
    const [form, setForm]  = useState({
        NoTransaksi : '',
        TanggalTransaksi : '',
        KodeBarang : '',
        Quantity : '',
        Harga: 0, 
        Total : ''
    })

    async function getDataTransaksi() {
        try {
            const data = await fetchTransaksi()
            setTransaksi(data)
        } catch (error) {
            console.log("error when fetching data transaksi", error);
        }
    }

    useEffect(() => {
        getDataTransaksi()
    }, [])

    function handleInputChange(e){
        const {name, value} = e.target
        setForm({...form, [name]:value,})
    }

    async function handleFormSubmit(e) {
        e.preventDefault()
        if(edit) {
          await updateData()
        } else {
          await submitData()
        }
      }
    return(
        <>
            <div className='container mt-5 mb-5'>
                <FormTransaksi 
                    handleInputChange={handleInputChange}
                    handleFormSubmit={handleFormSubmit}
                    edit={edit}
                    form={form}
                />
                <hr />
                <TableTransaksi
                    transaksi={transaksi}
                    getDataTransaksi={getDataTransaksi}
                />
            </div>
        </>
    )
}