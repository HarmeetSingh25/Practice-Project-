import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import DataContextProvider from '../Context/Context.jsx'   // ✅ import provider

createRoot(document.getElementById('root')).render(
  <DataContextProvider>
<ToastContainer />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DataContextProvider>
);
