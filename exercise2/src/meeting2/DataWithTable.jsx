function DataWithTable() {
    const biodata = [
        {nama: "Gilang Nazar", jurusan: "Manajemen Informatika"},
        {nama: "Alpin", jurusan: "Hubungan Masyarakat"},
        {nama: "Faridb", jurusan: "Bisnis Digital"}
    ]

    return(
        <>
            <table className="table">
                <thead>
                    <tr>
                        <td>No</td>
                        <td>Nama</td>
                        <td>Jurusan</td>
                    </tr>
                </thead>
                <tbody>
                    {biodata.map((item, index) => {
                        return(
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.nama}</td>
                                <td>{item.jurusan}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default DataWithTable;