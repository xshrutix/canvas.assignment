import './App.css'
import Box from './components/Edit/EditorBox.jsx'
import AdDisplay from './components/Canva/AdDisplay.jsx'
import { useState } from 'react'
import { ConfigurationContext } from './context/config'

function App() {
  const [configuration, setConfiguration] = useState({ bgColor: "#0369A1", image: "", adContent: '1 & 2 BHK Luxury Apartments at just Rs.34.97 Lakhs', cta: 'Contact Us' })
  return (
    <div className='flex flex-col sm:flex-row w-full'>
      <ConfigurationContext.Provider value={{ configuration, setConfiguration }}>
        <AdDisplay />
        <Box />
      </ConfigurationContext.Provider>
    </div>
  )
}

export default App
