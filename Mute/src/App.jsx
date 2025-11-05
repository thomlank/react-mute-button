import { useState } from 'react'
import onMic from './assets/on.svg'
import offMic from './assets/off.svg'
import './App.css'

function App() {
  const [mic, setMic] = useState(onMic)

  const micToggle = () => {mic === onMic ? setMic(offMic) : setMic(onMic)};

  return (
    <>
      <div>
          <img src={mic} onClick= {micToggle} className="micImg" alt="mic status" />
      </div>
      
    </>
  )
}

export default App
