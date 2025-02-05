import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Pages/Home/Home'
import Header from './components/Header/Header'
import Playlist from './components/Pages/Playlist/Playlist'
import Login from './components/Pages/Auth/Login'
import Signup from './components/Pages/Auth/Signup'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Trackpage from './components/Pages/TrackPage/Trackpage'
import MyPlaylist from './components/Pages/MyPlaylist/MyPlaylist'
function App() {
  

  return (
    <Router>
      <Header/>
     <div className='mt-5' >
      <ToastContainer />
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/myplaylist' element={<MyPlaylist />} />
        <Route path='/playlist/:id' element={<Playlist />} />
        <Route path='/track/:id' element={<Trackpage />} />
        
      </Routes>
     </div >
    </Router>
   
  )
}

export default App


