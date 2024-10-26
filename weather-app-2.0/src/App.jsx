import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import Backgroundimg from './assets/back.jpg'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap'
function App() {

  return (
    <>

<section>

        <img src={Backgroundimg} alt="Background" className="background-img" />
      <div className="background">
        <div className="overlay">
          <Home />
        </div>
      </div>
</section>

    </>
  )
}

export default App
