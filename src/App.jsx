import { Routes, Route, Navigate } from 'react-router-dom'
import { LangProvider } from './i18n/LangContext.jsx'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import About from './pages/About.jsx'
import News from './pages/News.jsx'
import Contacts from './pages/Contacts.jsx'

export default function App() {
  return (
    <LangProvider>
      <Routes>
        <Route element={<Layout />}>
          {/* RU (default, prefiksiz) */}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/contacts" element={<Contacts />} />
          {/* UZ */}
          <Route path="/uz" element={<Home />} />
          <Route path="/uz/projects" element={<Projects />} />
          <Route path="/uz/about" element={<About />} />
          <Route path="/uz/news" element={<News />} />
          <Route path="/uz/contacts" element={<Contacts />} />
          {/* EN */}
          <Route path="/en" element={<Home />} />
          <Route path="/en/projects" element={<Projects />} />
          <Route path="/en/about" element={<About />} />
          <Route path="/en/news" element={<News />} />
          <Route path="/en/contacts" element={<Contacts />} />
          {/* Eski Tilda URL'lari -> yangi */}
          <Route path="/aboutus" element={<Navigate to="/about" replace />} />
          <Route path="/aboutusuz" element={<Navigate to="/uz/about" replace />} />
          <Route path="/aboutuseng" element={<Navigate to="/en/about" replace />} />
          <Route path="/projectsuz" element={<Navigate to="/uz/projects" replace />} />
          <Route path="/projectseng" element={<Navigate to="/en/projects" replace />} />
          <Route path="/contactsuz" element={<Navigate to="/uz/contacts" replace />} />
          <Route path="/contactseng" element={<Navigate to="/en/contacts" replace />} />
          <Route path="/newsuz" element={<Navigate to="/uz/news" replace />} />
          <Route path="/newseng" element={<Navigate to="/en/news" replace />} />
          <Route path="/eng" element={<Navigate to="/en" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </LangProvider>
  )
}
