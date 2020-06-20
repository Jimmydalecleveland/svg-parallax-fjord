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
  animation: drift 30s linear infinite alternate;

  .cls-1 {
    fill: #c2c4c6;
  }
`

function Cloud3({ style }) {
  return (
    <StyledSvgWrapper style={style}>
      <StyledSvg
        id="cloud_3_dark"
        data-name="cloud 3 dark"
        xmlns="http://www.w3.org/2000/svg"
        width="2560"
        height="1000"
        viewBox="0 0 2560 1000">
        <path
          className="cls-1"
          d="M2490.77,208.91c-.52-12.14-12.3-22.09-28.05-24.85-4-16.42-20.91-28.55-40.94-28.14-.78,0-1.55.05-2.32.1a43.8,43.8,0,0,0-58-33.53,56.62,56.62,0,0,0-75.72,2.18c-3.44-17.85-16.87-32.47-34.8-39.09a49.73,49.73,0,0,0,7.34-26.76c-.52-25.36-20.88-46.58-49.06-54.48a52.68,52.68,0,0,0,9.19-30.52c-.69-34-35.25-61-77.19-60.12a90.78,90.78,0,0,0-31.92,6.39,117.25,117.25,0,0,0-27.9-2.79A116.09,116.09,0,0,0,1968.17,21.75c-13,1.37-24.47,6.24-32.78,13.28a43.78,43.78,0,0,0-56.82,59.08,38.29,38.29,0,0,0-12.18,26.34,31,31,0,0,0-40,29.35,53.33,53.33,0,0,0-5.39-.18c-14.81.3-27.62,6.82-34.5,16.29-15.22,1.12-28,7.87-34.1,17.11a48.26,48.26,0,0,0-6.41-.29c-18.42.37-33.15,10.81-32.9,23.31a15.31,15.31,0,0,0,.34,2.87Z" />
      </StyledSvg>
    </StyledSvgWrapper>
  )
}

export default Cloud3
