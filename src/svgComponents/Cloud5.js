import * as React from 'react'
import styled from '@emotion/styled'

const StyledSvg = styled.svg`
  animation: drift 50s linear infinite alternate;

  .cls-1 {
    fill: #d7dddd;
  }
`

function Cloud4({ style }) {
  return (
    <div style={{ ...style, position: 'absolute' }}>
      <StyledSvg
        id="cloud_5_light"
        data-name="cloud 5 light"
        xmlns="http://www.w3.org/2000/svg"
        width="2560"
        height="1000"
        viewBox="0 0 2560 1000">
        <path
          class="cls-1"
          d="M1238.56,277.78a47,47,0,0,0-38.2-28.2A42.38,42.38,0,0,0,1159,216.21h-.33c-9.45-16.13-24.18-26.49-40.71-26.49a39.63,39.63,0,0,0-6.18.49,56.3,56.3,0,0,0-6.62-42.27,84,84,0,0,0,.88-12.18,78.84,78.84,0,0,0-13.18-44.33C1086,54.36,1052.41,26.2,1012,26.2c-43.61,0-79.27,32.77-81.93,74.15h-.16c-39.3,0-72,29.1-79.28,67.64a63.33,63.33,0,0,0-13.21,10.62A35.3,35.3,0,0,0,821,174.5c-23.58,0-42.7,24-42.7,53.62a67.82,67.82,0,0,0,.52,8.38c-27.09,2-50.93,10.77-67.25,23.62-25.61,4.2-43.42,10.48-48,17.66Z" />
      </StyledSvg>
    </div>
  )
}

export default Cloud4
