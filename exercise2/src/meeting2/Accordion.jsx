const indexToWord = (index) => {
    const words = ["one", "two", "three"]
    return words[index] || index
}

function Accordion() {
    const data = [
        {title: "Gilang Nazar", description: "Manajemen Informatika"},
        {title: "Alpin", description: "Hubungan Masyarakat"},
        {title: "Faridb", description: "Bisnis Digital"}
    ]
    return(
        <>
        <div className="accordion" id="accordionExample">
            {
                data.map((item, index) => {
                    const word = indexToWord(index)
                    const headingId = `heading${word}`
                    const collapseId = `collapse${word}`
                    const target = `#${collapseId}`
                    return(
                        <div className="accordion-item" key={index}>
                            <h2 className="accordion-header" id={headingId}>
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={target} aria-expanded="true" aria-controls={collapseId}>
                                {item.title}
                            </button>
                            </h2>
                            <div id={collapseId} className="accordion-collapse collapse show" aria-labelledby={headingId} data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                {item.description}
                            </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default Accordion;