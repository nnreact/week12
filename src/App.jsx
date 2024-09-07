import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import HomeLayout from "./components/HomeLayout"
import Product from "./components/Product"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>

        <Route path="/products/:productId" element={<Product />} />

        <Route path="*" element={<h1>404 - Page Not Found</h1>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
