import { Routes, Route } from 'react-router'
import './App.css';
import About from './components/About'
import Projects from './components/Projects'
import Navbar from './components/Navbar';
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<About />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='projects' element={<Projects />}></Route>
        <Route path='contact' element={<Contact />}></Route>
     </Routes>
    </>   
  );
}

export default App;
