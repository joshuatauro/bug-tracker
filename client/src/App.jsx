import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import MainPage from './Pages/MainPage'
function App() {
  const [count, setCount] = useState(0)

const Layout = ({children}) => {
  return(
    <div className="grid grid-cols-10 font-primary">
      <Navbar />
      {children}
    </div>
  )
}

  return (
      <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><MainPage /></Layout>} />
        </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
