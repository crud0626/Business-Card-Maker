import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import Home from './components/home/home';
import Section from './components/section/section';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/section" element={<Section />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
