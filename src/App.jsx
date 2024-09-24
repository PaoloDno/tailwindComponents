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
      <Route path="/tailwindComponents/" element={<LandingPage />} />
      <Route path="/tailwindComponents/Component" element={<ComponentPage />} />
      <Route path="/tailwindComponents/Template" element={<TemplatePage />} />
      <Route path="/tailwindComponents/Theme" element={<ThemePage />} />
      <Route path="/tailwindComponents/AboutUs" element={<AboutUsPage />} />
      
      </Routes>
    </Router>
      
    </>
  )
}

export default App
