import { Routes, Route } from 'react-router-dom';
import { LoadingScreen, Home, Events, EventDetails } from './pages/routes';
import { useEffect, useState } from 'react';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load for 7000 ms | 7 seconds
    setTimeout(() => setLoading(false), 7000);
  });

  return (
    <>
    { loading === false ? (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/eventdetails' element={<EventDetails />} />
      </Routes>
    )
      : (<LoadingScreen />) }
    </>
  );
}

export default App;
