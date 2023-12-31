import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/Login'
import About from './pages/About'
import Products from './pages/Products'
import ProductsList from './pages/ProductsList'
import SingleProduct from './pages/SingleProduct'
import NavBar from './Components/navBar'
function App() {
  return (
    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />}>
          <Route index element={<ProductsList />} />
          < Route path=':id' element={<SingleProduct />} />
        </Route>
      </Routes>

    </BrowserRouter >
  )

}

export default App
