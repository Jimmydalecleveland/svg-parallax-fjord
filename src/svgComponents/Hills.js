import * as React from 'react'
import styled from '@emotion/styled'

const StyledSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .cls-1 {
    fill: #2e2351;
  }
  .cls-2 {
    fill: #413368;
  }
  .cls-3 {
    fill: #594677;
  }
  .cls-4 {
    fill: #816299;
  }
`

function Hills({ style }) {
  return (
    <StyledSvg
      style={{ ...style }}
      id="hills"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2560 1000">
      <path
        class="cls-1"
        d="M1748.91,825.87c-158.54,0-189.14-397.18-381.31-397.33-210.38-.16-188.89,397.33-351,397.33" />
      <path
        class="cls-2"
        d="M1608,825.87h140.92c-158.54,0-189.14-397.18-381.31-397.33q-5.07,0-10,.3Z" />
      <path
        class="cls-3"
        d="M1258.36,825.7c170.12,7.39,123.3-226.3,323.16-227.06,176.51-.68,182,232.21,353,226.55" />
      <path
        class="cls-3"
        d="M650.5,826.37c162.08,0,130.66-349.31,340.34-332.25,165.68,13.47,216.72,340.63,391.93,332.25" />
      <path
        class="cls-4"
        d="M1382.77,825.72h-12.92C1374.09,825.92,1378.39,825.93,1382.77,825.72Z" />
      <path
        class="cls-4"
        d="M1217.33,825.72h152.52c-164.91-7.8-217.48-318.47-379-331.6-5.32-.44-10.39-.64-15.4-.61Z" />
      <path class="cls-4" d="M1934.5,825.72h-11.79Q1928.47,825.93,1934.5,825.72Z" />
      <path
        class="cls-4"
        d="M1585.16,598.63l151,226.69,186.58-.14C1764.29,820,1754,601.09,1585.16,598.63Z" />
    </StyledSvg>
  )
}

export default Hills
