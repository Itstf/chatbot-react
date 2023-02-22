import DefaultScreen from '../src/DefaultScreen'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<DefaultScreen />} />
      </Routes>
    </Router>

  </>
  );
}

export default App;
