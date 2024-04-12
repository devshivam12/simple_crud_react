import { useEffect, useState } from 'react'
import Create from './components/Create'

import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Read from './components/Read'
import Update from './components/Update'
function App() {
 

  const [createData, setCreateData] = useState({
    name: "",
    email: ""
  })

  const handleChange = (e) => {

    setCreateData({ ...createData, [e.target.name]: e.target.value })
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Create createData={createData} handleChange={handleChange}  />}
        />
        <Route path='/read' element={<Read createData={createData}/>} />
        <Route path='/update/:id' element={<Update />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
