import * as React from 'react'
import styled from '@emotion/styled'

const StyledSvg = styled.svg`
  animation: wave2 5s ease-in-out infinite alternate;

  .cls-1 {
    fill: #658ec1;
  }

  @keyframes wave2 {
    0% {
      transform: translate3d(0, 0, 0);
    }

    100% {
      transform: translate3d(0, -1%, 0);
    }
  }
`

function Wave2({ style }) {
  return (
    <div style={{ ...style, position: 'absolute' }}>
      <StyledSvg
        id="wave_2"
        data-name="wave 2"
        xmlns="http://www.w3.org/2000/svg"
        width="2993.49"
        height="1000"
        viewBox="0 0 2993.49 1000">
        <path
          class="cls-1"
          d="M2993.47,848.32c-33.23,22.74-267.82,84.93-497.32,1.68-93.38,59.14-266,67.53-416.59-20.13-140.64,47.75-294.62,58.46-439.46,25.63-26-5.89-41.54-9.78-66.44-30.79-115.42,67.44-254.67,55.72-383.88,21.46-12.18-3.23-24.51-6.67-37.12-6.59-14.08.09-27.7,4.56-41.24,8.4a490.79,490.79,0,0,1-269.88-1c-21.43-6.26-42.87-14.07-65.19-14.18-15.25-.08-30.87,1.5-45.12,7-144.65,55.4-230.25,56.18-313.51-8.41C321.23,899,79.92,908.26,0,854.67v224.49H2993.51Z" />
      </StyledSvg>
    </div>
  )
}

export default Wave2
