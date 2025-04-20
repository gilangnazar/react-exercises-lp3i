import { useState, useRef} from "react";

export default function DataStudent() {

    const [data, setData] = useState([
        { name: 'Gilang', birthplace: 'Bogor' },
        { name: 'Yuda', birthplace: 'Depok' },
        { name: 'Ramdan', birthplace: 'Citayem' },
    ]);

    const [name, setName] = useState('');
    const [birthplace, setBirthplace] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const ref = useRef(null);

    const addData = () => {
        if (name && birthplace ) {
            if(editIndex !== null){
                const updatedData = [...data]
                updatedData[editIndex] = {name, birthplace}
                setData(updatedData)
                setEditIndex(null)
            } else {
                setData([...data, { name, birthplace }]);
            }
            
            setName('');
            setBirthplace('');
            ref.current.value = '';
        }
    };

    const handleDelete = (index) => {
        const updatedData = data.filter((_, i) => i !== index);
        setData(updatedData);
    };

    const handleEdit = (index) => {
        // const itemToEdit = data[index];
        setEditIndex(index)
        setName(data[index].name);
        setBirthplace(data[index].birthplace);
        ref.current.focus()
    };

    return (
        <>
            <form
                className="mt-3"
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <h1>Form Input Student Data</h1>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input className="form-control" type="text" name="name" id="name" onChange={e => setName(e.target.value)} value={name}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Birthplace</label>
                    <input
                        type="text"
                        value={birthplace}
                        onChange={(e) => setBirthplace(e.target.value)}
                        className="form-control"
                        id="price"
                    />
                </div>
                <button type="submit" className="btn btn-primary" onClick={addData}>
                    {editIndex === null ? 'Submit' : 'Edit'}
                </button>
            </form>

            <hr className="mb-5 mt-5" />

            <table className="table table-striped">
                <thead>
                    <tr>
                        <td>No</td>
                        <td>Nama</td>
                        <td>Tempat Lahir</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.birthplace}</td>
                                <td>
                                    <button
                                        className="btn btn-danger m-1"
                                        onClick={() => handleDelete(index)}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        className="btn btn-warning m-1"
                                        onClick={() => handleEdit(index)}
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}