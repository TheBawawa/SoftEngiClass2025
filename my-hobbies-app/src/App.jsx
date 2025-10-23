import { useState } from 'react';
import Navbar from './components/navBar.jsx';
import Home from './components/home.jsx';
import Hobbies from './components/hobbies.jsx';
import About from './components/about.jsx';
import './App.css';
import './index.css';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div>
      <h1 className="text-center p-5 bg-indigo-500 text-white text-3xl font-bold">
        My Hobbies App
      </h1>
      
      <Navbar setPage={setPage} />

      <div className="p-5 text-center">
        {page === 'home' && <Home />}
        {page === 'hobbies' && <Hobbies />}
        {page === 'about' && <About />}
      </div>
    </div>
  );
};


export default App;
