import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './components/Home'
import Details from './components/Details'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/experts/:expertName' element={<Details />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
