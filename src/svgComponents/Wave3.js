import * as React from 'react'
import styled from '@emotion/styled'

const StyledSvg = styled.svg`
  animation: wave3 10s ease-in-out infinite alternate;

  .cls-1 {
    fill: #a4c8e0;
  }

  @keyframes wave3 {
    0% {
      transform: translate3d(0, 0, 0);
    }
    50% {
      transform: translate3d(-1%, -2%, 0);
    }
    100% {
      transform: translate3d(-2%, 0%, 0);
    }
  }
`

function Wave3({ style }) {
  return (
    <div style={{ ...style, position: 'absolute' }}>
      <StyledSvg
        id="wave_3"
        data-name="wave 3"
        xmlns="http://www.w3.org/2000/svg"
        width="2993.49"
        height="1000"
        viewBox="0 0 2993.49 1000">
        <path
          class="cls-1"
          d="M2993.51,879c-53.77,57.06-281.8,34.22-359.26-10.67a22.46,22.46,0,0,0-21.68-.45c-99.94,52.23-501.05,71.87-643.51-21a26.53,26.53,0,0,0-27-1.34c-109.69,58.52-269.93,53.43-401.65,31-22.23-3.78-44.54-8.49-67.08-7.65-19.69.74-38.94,5.7-58.31,9.33-80.53,15.09-163.38,7.21-244.92-.72-60.49-5.87-121.94-6.36-178.92-27.49-14.81-5.49-21.64-20.21-35.8-13.23-126.27,62.19-461,87.52-672,6.49C223,887.13,77.77,899,0,904v125.72H2993.51Z" />
      </StyledSvg>
    </div>
  )
}

export default Wave3
