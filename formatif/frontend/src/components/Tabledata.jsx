import DataTable from 'react-data-table-component'

export default function Tabledata(props) {
    const cols = [
        {
            name: 'NIM',
            selector: row=>row.NIM,
            sortable: true
        },
        {
            name: 'Nama',
            selector: row=>row.Nama,
            sortable: true
        },
        {
            name: 'TanggalLahir',
            selector: row=>row.TanggalLahir,
            sortable: true
        },
        {
            name: 'Status Pernikahan',
            selector: row=>row.StatusPernikahan,
            sortable: true
        },
        {
            name: 'Agama',
            selector: row=>row.Agama,
            sortable: true
        },
        {
            name: 'Alamat',
            selector: row=>row.Alamat,
            sortable: true
        },
        {
            name: 'Kode Jurusan',
            selector: row=>row.KodeJurusan,
            sortable: true
        },
        {
            name: 'Biaya Kuliah',
            selector: row=>row.BiayaKuliah,
            sortable: true
        },
        {
            name: 'Action',
            cell: row => (
                <div className="">
                    <button className="btn btn-warning m-1" >Edit</button>
                    <button className="btn btn-danger m-1" >Delete</button>
                </div>
            )
        }

    ]

    return (
        <>
            <h1 className="m-2">List Barang</h1>
            
            <DataTable
                columns={cols}
                data={props.mahasiswa}
                pagination
                highlightOnHover
                striped
                dense
            />
        </>
    )
}