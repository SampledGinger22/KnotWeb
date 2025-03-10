import { useState } from 'react'
import './App.css'
import Construction from './components/Construction'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Construction />  
      </div>
    </>
  )
}

export default App
