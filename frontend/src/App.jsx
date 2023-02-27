import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './pages';
import { Navbar } from './components';

import './App.scss';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
