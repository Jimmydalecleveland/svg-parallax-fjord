import * as React from 'react'
import styled from '@emotion/styled'

const StyledSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .cls-1 {
    fill: #a4c443;
  }
`

function Hills({ style }) {
  return (
    <StyledSvg
      style={{ ...style }}
      id="ground"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2560 1000">
      <rect class="cls-1" y="824.71" width="2560" height="175.29" />
    </StyledSvg>
  )
}

export default Hills
