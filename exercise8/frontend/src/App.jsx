import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element/>
        <Route path='/dashboard' element/>
        <Route path='/form' element/>
        <Route path='/list' element/>
      </Routes>
    </Router>
  )
  
}

export default App
