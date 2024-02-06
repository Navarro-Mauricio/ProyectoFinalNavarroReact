import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import 'atropos/css';
import { NextUIProvider } from '@nextui-org/react';
import  "react-toastify/dist/ReactToastify.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <NextUIProvider>
    <App />
    </NextUIProvider>
  </React.StrictMode>,
)
