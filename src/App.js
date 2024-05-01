import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Introduction from './components/Introduction';
import Home from './components/Home';
import Page from './screens/Page';

function App() {
  return (
    <div
      className="App"
      style={{
        maxWidth: '1500px',
        margin: '0 auto',
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Page />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/intro" element={<Introduction />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// Add a min height to all pages
