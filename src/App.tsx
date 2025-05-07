import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './components/Home'
import Details from './components/Details'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import { useLayoutEffect, useState } from 'react'
import RestrictedDevices from './components/RestrictedDevices'

function App() {
  const [isMobile, setIsMobile] = useState(true);

  useLayoutEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (!isMobile) {
    return <RestrictedDevices />;
  }

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
