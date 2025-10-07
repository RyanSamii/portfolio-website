import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PortfolioApp from './component/portfolioApp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <PortfolioApp />)
}

export default App
