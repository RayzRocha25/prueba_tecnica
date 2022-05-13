import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
//components

import Navbar  from './components/navbar/Navbar';
import ListEmpresas from './components/empresas/ListEmpresas';
import EmpresaForm from './components/empresas/EmpresaForm';

//styles
import "bootstrap/dist/css/bootstrap.min.css";
//import "animate.css/animate.min.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
  
  <div className="container my-4">
    
    <Routes>
    <Route path="/" element={<ListEmpresas />} />
    <Route exact path="/EmpresaForm" element={<EmpresaForm />} />
    <Route exact path="/EmpresaUpdate/:id" element={<EmpresaForm />} />
    </Routes>
  </div>
  </BrowserRouter>
  
    
    
  
);

