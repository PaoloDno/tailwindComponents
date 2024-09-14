import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import LandingPage from './pages/LandingPage'
import ComponentPage from './pages/ComponentsPage'
import TemplatePage from './pages/TemplatePage'
import ThemePage from './pages/ThemePage'
import AboutUsPage from './pages/AboutUsPage'

function App() {

  return (
    <>
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Component" element={<ComponentPage />} />
      <Route path="/Template" element={<TemplatePage />} />
      <Route path="/Theme" element={<ThemePage />} />
      <Route path="/AboutUs" element={<AboutUsPage />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
