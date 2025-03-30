function Dropdown() {
    const biodata = [
        {nama: "Gilang Nazar", jurusan: "Manajemen Informatika"},
        {nama: "Alpin", jurusan: "Hubungan Masyarakat"},
        {nama: "Faridb", jurusan: "Bisnis Digital"}
    ]
    return(
        <>
            <label htmlFor="jurusan">Pilih Jurusan: </label>
            <select name="jurusan" id="jurusan">
                <option value="">--Jurusan--</option>
                {biodata.map((item, index) => {
                    return(
                        <option key={index} value={item.jurusan}>{item.jurusan}</option>
                    )
                })}
            </select>
        </>
    )
}

export default Dropdown;