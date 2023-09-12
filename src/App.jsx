import 'styles/reset.scss'
import 'styles/base.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import MainPage from 'pages/MainPage/MainPage'
import VideoPage from 'pages/Video/VideoPage'
import ContactPage from 'pages/Contact/ContactPage'
import ArticlePage from 'pages/Article/ArticlePage'
import AboutPage from 'pages/About/AboutPage'
import SingleArticlePage from 'pages/SingleArticle/SingleArticlePage'
import ScrollToTopOnNavigate from 'components/ScrollToTop'

const basename = process.env.PUBLIC_URL

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={basename}>
        <ScrollToTopOnNavigate />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="article" element={<ArticlePage />} />
          <Route path="article/:blogId" element={<SingleArticlePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="video" element={<VideoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
