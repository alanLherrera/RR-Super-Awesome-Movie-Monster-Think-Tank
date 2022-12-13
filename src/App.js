
import './App.css';
import React, { Suspense } from 'react'
import { Audio } from  'react-loader-spinner'

const AboutUs = React.lazy(() => import('../src/components/AboutUs'))
const Packages = React.lazy(() => import('../src/components/Packages'))

function App() {
  return (
    <div className="App">
      <h1>Lonzo's Travel Agency</h1>
      <h2>Make your travel dreams come true</h2>
      <div className="contents">
    <Suspense fallback={<Audio
    height = "80"
    width = "80"
    radius = "9"
    color = 'green'
    ariaLabel = 'three-dots-loading'     
    wrapperStyle
    wrapperClass/> 
  }>
          <AboutUs />
          <Packages />
    </Suspense>
      </div>
    </div>
  );
}

export default App;
