import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Loader from './Components/Loader/Loader.jsx'
import 'atropos/css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      
    <App />
  </React.StrictMode>,
)
