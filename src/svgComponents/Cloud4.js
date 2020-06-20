import * as React from 'react'
import styled from '@emotion/styled'

const StyledSvgWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`

const StyledSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: drift 50s linear infinite alternate;

  .cls-1 {
    fill: #e7ebf2;
  }
`

function Cloud4({ style }) {
  return (
    <StyledSvgWrapper style={style}>
      <StyledSvg
        id="cloud_4_light"
        data-name="cloud 4 light"
        xmlns="http://www.w3.org/2000/svg"
        width="2560"
        height="1000"
        viewBox="0 0 2560 1000">
        <path
          className="cls-1"
          d="M1661.48,351.32c-3.1-32.73-33.19-59.75-71.58-62.31a84.45,84.45,0,0,0-38.24,6.2,76,76,0,0,0-39.79-1.29,60.6,60.6,0,0,0-79.81-41.05,46.1,46.1,0,0,0-13.47-2.94,45.18,45.18,0,0,0-26,6,31.88,31.88,0,0,0-59.26,14.54c0,.64-.06,1.28-.07,1.92a39.08,39.08,0,0,0-32.33,24.78c-47.32,2.44-85.86,24.11-96,54.1Z" />
      </StyledSvg>
    </StyledSvgWrapper>
  )
}

export default Cloud4
