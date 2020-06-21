import * as React from 'react'
import styled from '@emotion/styled'

const StyledSvg = styled.svg`
  animation: wave1 10s ease-in-out infinite alternate;

  width: 1000px;
  height: 800px;

  @media screen and (min-width: 768px) {
    width: 1400px;
    height: 900px;
  }

  @media screen and (min-width: 1200px) {
    width: 2993.49px;
    height: 1000px;
  }

  .cls-1 {
    fill: #37559c;
  }

  @keyframes wave1 {
    0% {
      transform: translate3d(0, 0, 0);
    }
    50% {
      transform: translate3d(-1%, -2%, 0);
    }
    100% {
      transform: translate3d(-2%, 0, 0);
    }
  }
`

function Wave1({ style }) {
  return (
    <div style={{ ...style, position: 'absolute' }}>
      <StyledSvg
        id="wave_1"
        data-name="wave 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2993.49 1000">
        <path
          className="cls-1"
          d="M2991.93,894.35s-62.4,43.48-161.68,43.48c-83.12,0-158.17-32.27-180.39-42.77-4.42-2.09-9.52-3.35-14.17-1.85-76.22,24.64-122.51,40-224.36,40-89.13,0-195.64-39.22-210.48-40.84-16.74-1.83-21,4.67-48.25,17.12-96.12,43.94-214.3,28.37-315.69-1.45-163.19,72.61-356.67,73.88-520.8,3.41-10.67-4.58-21.59-9.21-33.18-9.77-11.31-.54-19.69,8.1-31.42,12.47-80.75,30.12-173,14.38-256-9-13.24-3.72-28.28-10.53-46.93-12.43-10.87-1.11-20.5,4.17-30.2,9.21C872.29,926,857,937.3,784.74,939.27c-71.47,1.94-143.09-39.85-170.15-47.25C586.06,884.21,499,951.93,373.5,951.93c-120.21,0-139.91-45.84-187.23-49.83C179.79,914.5,26.16,959.65,0,954.62l.55,107.81H2993.49Z" />
      </StyledSvg>
    </div>
  )
}

export default Wave1
