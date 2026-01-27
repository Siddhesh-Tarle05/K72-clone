
import Videodiv from './components/home/Videodiv'
import Home from './pages/Home'
import Projects from './pages/Projects'
import { Route, Routes } from 'react-router-dom'
import Agence from './pages/Agence'
import Navbar from './common/Navbar'
import FullscreenNav from'./common/FullscreenNav'
const App = () => {

  return (
   <main>
   
 <Navbar/>
<FullscreenNav/>
   <Routes>
    <Route path='/' element={<Home/>}/>
     <Route path='/projects' element={<Projects/>}/>
      <Route path='/agence' element={<Agence/>}/>

   </Routes>
   </main>
   
   
  )
}

export default App
