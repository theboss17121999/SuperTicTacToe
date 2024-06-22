import { useState } from 'react'
import './App.css'
import { ThreeCrossThree } from './Components/ThreeCrossThree'
import { NineCrossNine } from './Components/NineCrossNine'
import { RecoilRoot } from 'recoil'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RecoilRoot>
        <NineCrossNine />
      </RecoilRoot>
    </>
  )
}

export default App
