
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageRoutes from './web_routes/PageRoutes';

import Preloader from './PreLoader/Preloader';
import { useEffect, useState } from 'react';
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.onload = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [])

  return (

    <>
      <div className='bg-comptech-950'>
        <Navbar />
        <PageRoutes />
        <Footer />
      </div>
      {loading && <Preloader />}
    </>
  )
}

export default App
