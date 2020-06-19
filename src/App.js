import React, { useState, useEffect } from 'react'
import useScrollY from './useScrollY'
import styled from '@emotion/styled'
import './App.css'
import Mountains from './Mountains'

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
  background: ${({ scrollY }) => `rgb(${scrollY / 2.75}, ${135 - scrollY / 17}, ${213 - scrollY / 5.4})`};
  position: fixed;
  width: 2560px;
  height: 1000px;
  left: 50%;
  transform: translate(-50%, 0);
`

function App() {
  const scrollY = useScrollY()
  // TODO: When we can benchmark, let's look into how we should use window scroll with state
  // const handleScroll = useCallback((event) => {
  //   console.log(event)
  // }, [])

  return (
    <div className="App">
      <Background scrollY={scrollY}>
        <Mountains style={{ transform: `translateY(${-scrollY * 0.3}px)` }} />
      </Background>
      <Foreground />
    </div>
  )
}

export default App
