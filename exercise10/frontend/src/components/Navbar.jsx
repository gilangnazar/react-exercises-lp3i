export default function Navbar() {
  return (
    <>
      <nav className='navbar navbar-expand-lg' style={{ backgroundColor: "#222831" }}>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#' style={{ color: "#DFD0B8" }}>
            Sales App Dashboard
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'></div>
        </div>
      </nav>
    </>
  );
}
