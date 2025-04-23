import DataTable from 'react-data-table-component'

export default function Tabledata({barang, editData, deleteData}) {
    console.log(barang);
    
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
                    <button className="btn btn-warning m-1" onClick={() => editData(row)}>Edit</button>
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