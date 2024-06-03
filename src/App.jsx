import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import Home from './pages/home/Home'
import PieChart from './components/hero/PieChart'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/chart' element={<PieChart/>}/>
      </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
