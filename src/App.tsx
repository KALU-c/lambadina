import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './components/Home'
import Details from './components/Details'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/experts/:expertName' element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
