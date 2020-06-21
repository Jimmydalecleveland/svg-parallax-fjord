import React from 'react'
import useScrollY from './useScrollY'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
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
import WindTrail from './svgComponents/WindTrail'
import Trees from './svgComponents/Trees'

const layers = [
  { id: "1", Component: Cloud2, speed: 0.2 },
  { id: "2", Component: Cloud5, speed: 0.2 },
  { id: "3", Component: Cloud4, speed: 0.2 },
  { id: "4", Component: Mountains, speed: 0.3 },
  { id: "5", Component: Cloud1, speed: 0.3 },
  { id: "6", Component: Cloud3, speed: 0.3 },
  { id: "7", Component: Hills, speed: 0.6 },
  { id: "8", Component: Trees, speed: 0.8 },
  { id: "9", Component: WindTrail, speed: 0.7 },
  { id: "10", Component: Ground, speed: 0.9 },
  { id: "11", Component: Wave3, speed: 0.9 },
  { id: "12", Component: Wave2, speed: 0.92 },
  { id: "13", Component: Wave1, speed: 1 },
]

const Foreground = styled.div`
    position: absolute;
    top: 560px;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #37559c;
    color: white;

  @media screen and (min-width: 768px) {
    top: 666px;
  }

  @media screen and (min-width: 1200px) {
    top: 965px;
  }
`

const Background = styled.main`
  background-color: #0087d5;
  position: fixed;
  width: 800px; 
  height: 800px;
  left: 50%;
  transform: translate(-50%, 0);

  @media screen and (min-width: 768px) {
    width: 1200px;
    height: 900px;
  }

  @media screen and (min-width: 1200px) {
    width: 2560px;
    height: 1000px;
  }
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
    <>
      <Global styles={css`body { margin: 0; }`} />
      <Background style={{ background: animatingBackground }}>
        {layers.map(({ id, Component, speed }) => {
          return <Component key={id} scrollY={scrollY} style={{ transform: `translateY(${-scrollY * speed}px)` }} />
        })}
      </Background>
      <Foreground />
    </>
  )
}

export default App
