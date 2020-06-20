import * as React from 'react'
import styled from '@emotion/styled'

const StyledSvg = styled.svg`
  animation: drift 40s linear infinite alternate;

  .cls-1 {
    fill: #e7ebf2;
  }
`

function Cloud2({ style }) {
  return (
    <div style={{ ...style, position: 'absolute' }}>
      <StyledSvg
        id="cloud_2_light"
        data-name="cloud 2 light"
        xmlns="http://www.w3.org/2000/svg"
        width="2560"
        height="1000"
        viewBox="0 0 2560 1000">
        <path
          className="cls-1"
          d="M2280.74,432.9c-1.32-10.15-15.27-19.08-34.25-22.63-4.52-10.88-13.3-18.41-23.69-18.88a22.75,22.75,0,0,0-7.46.91c-6.75-8.18-16.1-13.44-26.64-13.92a35.46,35.46,0,0,0-21.74,6.4,34.62,34.62,0,0,0-20.12-7.69,34.17,34.17,0,0,0-15,2.72c.08-.92.14-1.85.18-2.78,1.69-37.24-23.49-68.62-56.24-70.1-.53,0-1.07,0-1.6-.05a106.67,106.67,0,0,0-204,22.24c-14.92.74-27.9,14-33.13,32.49a31.27,31.27,0,0,0-11.25-2.66c-16.24-.74-30.57,11.26-36.21,28.53a24,24,0,0,0-17.32,6.79,87.73,87.73,0,0,0-12.84-1.53c-30.08-1.36-55.16,12.63-56,31.24a22,22,0,0,0,1.49,8.92Z" />
      </StyledSvg>
    </div>
  )
}

export default Cloud2
