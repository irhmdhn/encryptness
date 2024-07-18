import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
 
  return (
    <>
      <Navbar/>
      <main className='container mx-auto my-12'>
        <Outlet />
      </main>
    </>
  )
}

export default App
