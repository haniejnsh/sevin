import { useState } from 'react'
import './App.css'
import SideMenu from './components/menu/SideMenu'
import Container from './components/base-component/Container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex w-full'>
      <SideMenu/>
      <Container/>
    </div>
  )
}

export default App
