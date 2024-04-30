import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ProductDetail from './pages/detail/ProductDetail'
import Footer from './pages/footer/Footer'
import Nav from './pages/nav/Nav'
import Home from './pages/homePage/Home'
import AdminDashboard from './pages/Admin/AdminDashboard'


import Profile from './pages/Admin/Dashboard/Profile'
import Dashboard from './pages/Admin/User/Dashboard'


function App() {


  return (
    <>
      <Nav/>
   <Footer/>



      {/* <BrowserRouter>
        <div className="grid grid-cols-5">
          <div className="col-span-1">
            <AdminDashboard />

          </div>
          <div className="col-span-4 ">
            <Routes>
              <Route path='/' element={<Dashboard />} />
              {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
              {/* <Route path='/adminprofile' element={<Profile />} />

            </Routes>
          </div>
        </div>



      </BrowserRouter > */} 





    </>

  )
}

export default App
