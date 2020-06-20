import React from 'react'
import useScrollY from './useScrollY'
import styled from '@emotion/styled'
import './App.css'
import Mountains from './svgComponents/Mountains'
import Hills from './svgComponents/Hills'
import Ground from './svgComponents/Ground'
import Wave3 from './svgComponents/Wave3'
import Wave2 from './svgComponents/Wave2'
import Wave1 from './svgComponents/Wave1'
import Cloud1 from './svgComponents/Cloud1'
import Cloud2 from './svgComponents/Cloud2'
import Cloud3 from './svgComponents/Cloud3'
import Cloud4 from './svgComponents/Cloud4'
import Cloud5 from './svgComponents/Cloud5'

const layers = [
  { Component: Cloud2, speed: 0.2 },
  { Component: Cloud5, speed: 0.2 },
  { Component: Cloud4, speed: 0.2 },
  { Component: Mountains, speed: 0.3 },
  { Component: Cloud1, speed: 0.3 },
  { Component: Cloud3, speed: 0.3 },
  { Component: Hills, speed: 0.6 },
  // { Component: Trees, speed: 0.8 },
  // { Component: WindTrail, speed: 0.7 },
  { Component: Ground, speed: 0.9 },
  { Component: Wave3, speed: 0.9 },
  { Component: Wave2, speed: 0.92 },
  { Component: Wave1, speed: 1 },
]

const Foreground = styled.div`
    position: absolute;
    top: 965px;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #37559c;
    color: white;
`

const Background = styled.main`
  background-color: #0087d5;
  position: fixed;
  width: 2560px;
  height: 1000px;
  left: 50%;
  transform: translate(-50%, 0);
`

function App() {
  const scrollY = useScrollY()
  const red = scrollY / 2.75
  const green = 135 - scrollY / 17
  const blue = 213 - scrollY / 5.4
  const animatingBackground = `rgb(${red}, ${green}, ${blue})`
  // TODO: When we can benchmark, let's look into how we should use window scroll with state
  // const handleScroll = useCallback((event) => {
  //   console.log(event)
  // }, [])

  return (
    <div className="App">
      <Background style={{ background: animatingBackground }}>
        {layers.map(({ Component, speed }) => {
          return <Component style={{ transform: `translateY(${-scrollY * speed}px)` }} />
        })}
      </Background>
      <Foreground />
    </div>
  )
}

export default App
