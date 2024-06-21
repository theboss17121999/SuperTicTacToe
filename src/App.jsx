import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThreeCrossThree } from './Components/ThreeCrossThree'
import { RecoilRoot } from 'recoil'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RecoilRoot>
        <ThreeCrossThree />
      </RecoilRoot>
    </>
  )
}

export default App
