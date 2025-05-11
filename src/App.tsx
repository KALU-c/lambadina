import { Route, Routes, useLocation } from 'react-router'
import Home from './components/Home'
import Details from './components/Details'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import { useLayoutEffect, useState } from 'react'
import RestrictedDevices from './components/RestrictedDevices'
import Profile from './components/Profile'
import { useAuth } from './hooks/useAuth'
import { ProtectedRoute } from './ProtectedRoute'

function App() {
  const { isAuthenticated } = useAuth();
  const [isMobile, setIsMobile] = useState(true);
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/mentors/:mentorId' element={<Details />} />
      <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
        <Route path='/profile' element={<Profile />} />
      </Route>
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default App
