
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Memetest from './memetest'

function App() {

  return (
    <Routes>
      <Route path='/memetest' element={<Memetest />}></Route>
    </Routes>
  )
}

export default App
