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
        }

    ]

    return (
        <>
            <h1 className="m-2">List Mahasiswa</h1>
            
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