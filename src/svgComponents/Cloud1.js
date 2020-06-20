import * as React from 'react'
import styled from '@emotion/styled'

const StyledSvg = styled.svg`
  animation: drift 30s linear infinite alternate;

  .cls-1 {
    fill: #b4bdbf;
  }

  @keyframes drift {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-300px, 0, 0);
    }
  }
`

function Cloud1({ style }) {
  return (
    <div style={{ ...style, position: 'absolute' }}>
      <StyledSvg
        id="cloud_1_dark"
        data-name="cloud 1 dark"
        xmlns="http://www.w3.org/2000/svg"
        width="2560"
        height="1000"
        viewBox="0 0 2560 1000">
        <path
          className="cls-1"
          d="M848.86,415.1c-6.27-20.68-20.24-35.22-36.91-35.76a29.52,29.52,0,0,0-7.28.66,70.92,70.92,0,0,0-48.16-49.39A65.92,65.92,0,1,0,637,275.19c-18.11,9.78-31.61,28.31-35.62,50.63a87.4,87.4,0,0,0-22-3.49c-17.8-.59-34.08,4-46,12-8-20.83-30.21-36.26-56.93-37.25a48.75,48.75,0,0,0,.88-7.79c.91-27.76-21.69-51-50.48-52a52.9,52.9,0,0,0-39.2,15.26c-13.48-27.78-43-47.65-77.9-49.1-2-33.19-22.47-59.5-48.25-60.34-12.72-.42-24.54,5.43-33.76,15.41A63.42,63.42,0,0,0,120.92,175a44.36,44.36,0,0,0,1.56,84.78A54.65,54.65,0,0,0,130,336c-11.08,7.27-20.18,18.67-25.92,32.57a40.37,40.37,0,0,0-12-2.23c-12-.39-22.86,4.45-29.49,12.17a47.15,47.15,0,0,0-47.17,36.6Z" />
      </StyledSvg>
    </div>
  )
}

export default Cloud1
