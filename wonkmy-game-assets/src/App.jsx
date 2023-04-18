import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import './style.css'
import { AssetsCard } from './AssetsCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AssetsCard/>
      <AssetsCard/>
      <AssetsCard/>
      <AssetsCard/>
      <AssetsCard/>
    </div>
  )
}

export default App
