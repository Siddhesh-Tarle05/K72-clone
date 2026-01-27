import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import StairsAnim from './common/StairsAnim.jsx'
import FullScreenNavContext from './context/FullscreenNavContext.jsx'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <StairsAnim>
   <FullScreenNavContext>
  <App />
   </FullScreenNavContext>
  
 </StairsAnim>
  
 </BrowserRouter>
 
)
