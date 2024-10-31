import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Blog from './components/Blog/Blog';
import ScrollToTop from './components/Global/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/products" exact element={<Products />} />
      <Route path="/contact" exact element={<Contact />} />
      <Route path="/blog" exact element={<Blog />} />
      <Route path="/about" exact element={<About />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
