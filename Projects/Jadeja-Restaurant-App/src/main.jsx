import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './MainLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import Gallery from './pages/Gallery'
import Feedback from './pages/Feedback'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import PageNotFound from './components/pages/PageNotFound'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './scripts.js'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='feedback' element={<Feedback />} />
          <Route path='cart' element={<Cart />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
)

