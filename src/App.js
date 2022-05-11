import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<Events />} />
      </Routes>
    </>
  );
}

export default App;
