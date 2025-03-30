function Content() {
    const biodata = [
        {nama: "Gilang Nazar", jurusan: "Manajemen Informatika"},
        {nama: "Alpin", jurusan: "Hubungan Masyarakat"},
        {nama: "Faridb", jurusan: "Bisnis Digital"}
    ]

    const tampilan = {
    backgroundColor: "grey",
        padding: '10px',
        borderRadius: '10px',
        margin: '10px 0',
        color: 'white'
    }

    return(
        <>
        {biodata.map((item, index) => {
            return(
                <div style={tampilan} key={index}>
                    Nama Lengkap : {item.nama} <br />
                    Jurusan : {item.jurusan}
                </div>
            )
        })}
        </>
    )
}

export default Content;