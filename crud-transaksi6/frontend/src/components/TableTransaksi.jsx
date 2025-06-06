import DataTable from 'react-data-table-component'
import { deleteTransaksi } from '../apiService';

export default function TableTransaksi(props) {
    async function handleDelete(NoTransaksi) {
        try {
            await deleteTransaksi(NoTransaksi)
            props.getDataTransaksi()
        } catch (error) {
            console.log('error when deleting data', error);
        }
    }

    const cols = [
        {
            name: 'No Transaksi',
            selector: row=>row.NoTransaksi,
            sortable: true
        },
        {
            name: 'Tanggal Transaksi',
            selector: row=>row.TanggalTransaksi,
            sortable: true
        },
        {
            name: 'Nama Barang',
            selector: row=>row.NamaBarang,
            sortable: true
        },
        {
            name: 'Quantity',
            selector: row => row.Quantity,
            sortable: true
        },
        {
            name: 'Total',
            selector: row => row.Total,
            sortable: true
        },
        {
            name: 'Action',
            cell: (row) => (
                <div className="">
                    <button className="btn btn-warning m-1" >Edit</button>
                    <button className="btn btn-danger m-1" onClick={() => handleDelete(row.NoTransaksi)}>Delete</button>
                </div>
            )
        }

    ]

    return (
        <>
            <h1 className="m-2">List Transaksi</h1>

            <hr />
            <DataTable
                columns={cols}
                data={props.transaksi}
                pagination
                highlightOnHover
                striped
                dense
            />
        </>
    )
}