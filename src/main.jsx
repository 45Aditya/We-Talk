import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'
import Header from './components/Header.jsx'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  </Provider>
)
