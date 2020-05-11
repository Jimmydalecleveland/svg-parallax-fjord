import React, { useRef } from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import './App.css'
import hills from './assets/hills.svg'
import trees from './assets/trees.svg'
import ground from './assets/ground.svg'
import Mountains from './Mountains'
import Remnis from './Remnis'
import cloud1 from './assets/cloud-1-dark.svg'
import cloud2 from './assets/cloud-2-light.svg'
import cloud3 from './assets/cloud-3-dark.svg'
import cloud4 from './assets/cloud-4-light.svg'
import cloud5 from './assets/cloud-5-light.svg'
import wave1 from './assets/wave-1.svg'
import wave2 from './assets/wave-2.svg'
import wave3 from './assets/wave-3.svg'

function App() {
  const paraRef = useRef(null)

  return (
    <div className="App">
      <Parallax pages={2} ref={paraRef} config={{ duration: 0 }}>
        <ParallaxLayer offset={0} speed={0}>
          <section className="upper"></section>
        </ParallaxLayer>

        {/* Background Clouds */}
        <ParallaxLayer offset={0.1} speed={-0.45}>
          <img src={cloud2} className="cloud2" alt="cloud" />
        </ParallaxLayer>
        <ParallaxLayer offset={0.1} speed={-0.45}>
          <img src={cloud4} className="cloud4" alt="cloud" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.4}>
          <img src={cloud5} className="cloud5" alt="cloud" />
        </ParallaxLayer>

        {/* Mountains */}
        <ParallaxLayer
          offset={0.1}
          speed={-0.5}
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}
        >
          <Mountains />
        </ParallaxLayer>

        {/* Foreground Clouds (in front of mountains) */}
        <ParallaxLayer offset={0.1} speed={-0.4}>
          <img src={cloud1} className="cloud1" alt="cloud" />
        </ParallaxLayer>
        <ParallaxLayer offset={0.1} speed={-0.4}>
          <img src={cloud3} className="cloud3" alt="cloud" />
        </ParallaxLayer>

        {/* Hills */}
        <ParallaxLayer
          offset={0.1}
          speed={-0.3}
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}
        >
          <img src={hills} alt="hills" />
        </ParallaxLayer>

        {/* Trees */}
        <ParallaxLayer
          offset={0.1}
          speed={-0.2}
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}
        >
          <img src={trees} alt="trees" />
        </ParallaxLayer>

        {/* Ground */}
        <ParallaxLayer
          offset={0.1}
          speed={-0.1}
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}
        >
          <img src={ground} alt="ground" />
        </ParallaxLayer>

        {/* Water */}
        <ParallaxLayer offset={1} speed={0} factor={1}>
          <section className="water">
            <Remnis className="remnis" />
          </section>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.09}
          speed={0}
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            width: '120%',
          }}
        >
          <img src={wave3} className="wave3" alt="sea waves" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.13}
          speed={0}
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            width: '105%',
          }}
        >
          <img src={wave2} className="wave2" alt="sea waves" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.13}
          speed={0}
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            width: '120%',
          }}
        >
          <img src={wave1} className="wave1" alt="sea waves" />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default App
