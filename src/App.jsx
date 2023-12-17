
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage'
import './styles/base.css'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
      <div>
        <Header />
        <div className='content'>
          <Router>
            <Routes>
              <Route path="/" element={<MainPage />} />
            </Routes>
          </Router>
        </div>
        <Footer />
      </div>
  )
}

export default App
