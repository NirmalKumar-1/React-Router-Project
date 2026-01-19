import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import About from './components/About/About.jsx';
import Home from './components/Home/Home.jsx';
import Services from './components/Services/Services.jsx';
import Register from './components/Register/Register.jsx';
import Login from './components/Login/Login.jsx';
import Contact from './components/Contact/Contact.jsx';
import NotFound from './components/Notfound/Notfound.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>}/>
      <Route path='services' element={<Services/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
