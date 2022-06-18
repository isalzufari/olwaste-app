//Importing React Components
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Importing Component for Routes
import App from './App';
import Login from './pages/login';
import SignUp from './pages/signup';
import DetailProduct from './pages/DetailProduct';
import DetailCraftMan from './pages/DetailCraftMan';
import JobForCraft from './pages/JobForCraft'
//import footer and header
import { Navbar, Footer } from './components/components';

// Style
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './styles/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/detailproduct" element={<>
                                                <Navbar/>
                                                <div className='container p-5'>
                                                  <DetailProduct />
                                                </div>
                                                <Footer/>
                                              </>
                                            }/>
        <Route path="/detailcraftman" element={<>
                                                <Navbar/>
                                                <div className='container p-5'>
                                                  <DetailCraftMan />
                                                </div>
                                                <Footer/>
                                              </>}/>
        <Route path="/jobforcraft" element={
                                              <>
                                              <Navbar/>
                                              <div className='container p-5'>
                                                <JobForCraft />
                                              </div>
                                              <Footer/>
                                            </>
                                          }/>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
