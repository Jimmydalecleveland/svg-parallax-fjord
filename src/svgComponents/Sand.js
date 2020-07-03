import * as React from 'react'
import styled from '@emotion/styled'

const StyledSvg = styled.svg`
    position: absolute;
    width: 2560px;

  .cls-1 {
    fill: #ceb67a;
  }
`

function Sand() {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      width="2560"
      height="125.31"
      viewBox="0 0 2560 125.31">
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_11" data-name="Layer 11">
          <path
            class="cls-1"
            d="M2560,21.72c-5-1.75-10.15-3.32-15.26-4.81-70-20.29-147.18-21.3-219-8.45.72.72-191,57.87-288.67,54.21-116.36-4.36-229.54-51.79-345.7-43.7-52,3.62-102.49,18.3-153.23,30.25A1497.63,1497.63,0,0,1,964.23,71C838.57,51.27,715.1,15.46,588.1,8.33S402.87,65.67,249.83,65.67C57.39,65.67,0,25.16,0,25.16V125.31H2560Z" />
        </g>
      </g>
    </StyledSvg>
  )
}

export default Sand
