import * as React from 'react'
import styled from '@emotion/styled'

const StyledSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
 
  .cls-1 {
    fill: #e1eaea;
  }
  .cls-2 {
    fill: #fff;
  }
`

function Mountains({ style }) {
  return (
    <StyledSvg
      style={style}
      id="mountains"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2560 1000">
      <polygon
        className="cls-1"
        points="1174.19 45.67 725.76 928.49 1622.62 928.49 1174.19 45.67" />
      <polygon
        className="cls-2"
        points="1174.43 46.15 1173.76 47.06 1371.36 928.49 1622.62 928.49 1174.43
    46.15" />
      <polygon
        className="cls-1"
        points="1405.23 189.91 814.83 928.49 1995.64 928.49 1405.23 189.91" />
      <polygon
        className="cls-2"
        points="1863.84 917.3 1995.64 928.49 1405.23 189.91 1405.18 189.97 1440.45
    357.89 1863.84 917.3" />
      <polygon
        className="cls-1"
        points="1783.74 336.63 1430.08 928.49 2137.39 928.49 1783.74 336.63" />
      <polygon
        className="cls-1"
        points="854.09 260.78 447.61 928.49 1260.57 928.49 854.09 260.78" />
      <polygon
        className="cls-2"
        points="853.58 261.62 1097.86 928.49 1260.57 928.49 854.09 260.78 853.58
    261.62" />
      <polygon
        className="cls-2"
        points="1784.26 336.63 1995.64 928.49 2137.39 928.49 1784.26 336.63" />
    </StyledSvg>
  )
}

export default Mountains
