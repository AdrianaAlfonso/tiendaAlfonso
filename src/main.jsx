import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import HomePage from './pages/HomePage/HomePage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router';
import CommonContainer from './componentes/CommonContainer/CommonContainer.jsx';
import ProductPage from './pages/ProductPage/ProductPage.jsx';
import ProductsPage from './pages/ProductsPage/ProductsPage.jsx';
import AboutPage from './pages/AboutPage/AboutPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <CommonContainer>
              <HomePage />
            </CommonContainer>
          }
        />
        <Route
          path='/productos'
          element={
            <CommonContainer>
              <ProductsPage />
            </CommonContainer>
          }
        />
        <Route
          path='/productos/:productId'
          element={
            <CommonContainer>
              <ProductPage />
            </CommonContainer>
          }
        />
        <Route
          path='/acerca'
          element={
            <CommonContainer>
              <AboutPage />
            </CommonContainer>
          }
        />
        <Route
          path='*'
          element={
            <CommonContainer>
              <h1>La pagina no existe 404</h1>
            </CommonContainer>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
