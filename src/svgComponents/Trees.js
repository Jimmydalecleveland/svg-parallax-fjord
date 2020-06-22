/* global Snap */
import React, { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import treesBlown from '../treesBlown.js'
import { easeInOutBack, easeOutBack } from '../helpers.js'

const StyledSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .cls-1 {
    fill: #441818;
  }

  .cls-2 {
    fill: #6b2727;
  }

  .cls-3 {
    fill: #b54131;
  }

  .cls-4 {
    fill: #e04e3f;
  }

  .cls-5 {
    fill: #30562e;
  }

  .cls-6 {
    fill: #677c48;
  }

  .cls-7,
  .cls-9 {
    fill: #eb7e35;
  }

  .cls-8 {
    fill: #efa052;
  }

  .cls-9 {
    opacity: 0.97;
  }

  .cls-10 {
    fill: #d1b71c;
  }

  .cls-11 {
    fill: #e2c23b;
  }
`


function getDarkAndLightTreePaths(svgElement) {
  const s = Snap(svgElement)
  const darkPaths = getTreePaths(s, svgElement.id, 'dark')
  const lightPaths = getTreePaths(s, svgElement.id, 'light')

  return {
    darkPaths,
    lightPaths,
  }
}

function blowTree(treePaths, animationTime, animationFunc) {
  if (!treePaths || !treePaths.darkPaths.fromPath) return

  const { darkPaths, lightPaths } = treePaths
  animateElement(
    darkPaths.target,
    darkPaths.toPath,
    animationTime,
    easeOutBack
  )
  animateElement(
    lightPaths.target,
    lightPaths.toPath,
    animationTime,
    easeOutBack,
    unblowTree
  )

  function unblowTree() {
    const { darkPaths, lightPaths } = treePaths
    animateElement(darkPaths.target, darkPaths.fromPath, 2000, easeInOutBack)
    animateElement(
      lightPaths.target,
      lightPaths.fromPath,
      2000,
      easeInOutBack
    )
  }
}

// Move item in array to another position in the array
// Used to create a few staggered trees for a more natural look
function arrayMovePosition(arr, indexToMove, newIndex) {
  if (newIndex > arr.length) return
  arr.splice(newIndex, 0, arr.splice(indexToMove, 1)[0])
}

function getTreePaths(snapInstance, elementId, subSelector) {
  const target = snapInstance.select(`#${elementId}__${subSelector}`)
  const fromPath = target.attr('d')
  const toPath = treesBlown[elementId][subSelector]

  return {
    target,
    fromPath,
    toPath,
  }
}

function animateElement(
  snapTarget,
  toPath,
  duration,
  easingFunc,
  postAnimationCb
) {
  snapTarget.animate(
    {
      path: toPath,
    },
    duration,
    easingFunc,
    postAnimationCb
  )
}

function Trees({ style }) {
  const svgRef = useRef()
  const intervalId = useRef()

  /* 
  * On mount, grab every tree in the svg, sort them,
  * stagger a few, and set state with all their paths
  * for future morphing by Snap.
  */
  useEffect(() => {
    const trees = svgRef.current.querySelectorAll('.tree')
    // Turn NodeList into array to get .sort method
    const sortedTrees = [...trees].sort((a, b) => {
      const aIdNumber = Number(a.id.split('tree')[1])
      const bIdNumber = Number(b.id.split('tree')[1])
      return aIdNumber - bIdNumber
    })
    // Stagger some trees for a more natural look
    arrayMovePosition(sortedTrees, 2, 9)
    arrayMovePosition(sortedTrees, 10, 16)
    arrayMovePosition(sortedTrees, 14, 20)

    // Create an array of objects that contain each trees paths and element target
    const allTreePaths = sortedTrees.map(tree => getDarkAndLightTreePaths(tree))
    setTimeout(startBlowTrees, 3000)

    function startBlowTrees() {
      blowTrees()
      intervalId.current = setInterval(blowTrees, 8000)
    }

    function blowTrees() {
      if (window && window.scrollY > 0) return

      let startTime = 0
      allTreePaths.forEach(treePaths => {
        setTimeout(() => {
          blowTree(treePaths, 1500)
        }, (startTime = startTime + 50))
      })
    }

    return () => {
      clearInterval(intervalId.current)
    }
  }, [])

  return (
    <StyledSvg
      ref={svgRef}
      style={style}
      id="trees"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2560 1000">
      <g id="tree13" className="tree">
        <g>
          <rect className="cls-1" x="1142.86" y="781.27" width="19.13" height="43.44" />
          <rect className="cls-2" x="1154.92" y="781.27" width="7.06" height="43.44" />
        </g>
        <g>
          <path
            id="tree13__dark"
            className="cls-3"
            d="M1214.49,735c0,34.17-27.7,49-61.87,49s-61.87-14.79-61.87-49,27.7-90,61.87-90S1214.49,700.84,1214.49,735Z" />
          <path
            id="tree13__light"
            className="cls-4"
            d="M1153.16,645.06c20.35,35.39,47.86,100,4.9,138.78,31.62-1.52,56.43-16.5,56.43-48.83C1214.49,701,1187.08,645.65,1153.16,645.06Z" />
        </g>
      </g>
      <g id="tree14" className="tree">
        <g>
          <rect className="cls-1" x="1061.6" y="762.24" width="27.5" height="62.47" />
          <rect className="cls-2" x="1078.94" y="762.24" width="10.16" height="62.47" />
        </g>
        <g>
          <path
            id="tree14__dark"
            className="cls-5"
            d="M1156.52,763.21q-15.87-28.73-31.75-57.43h17q-14.79-25.59-29.56-51.19h16.42l-53.29-92.3q-26.65,46.14-53.29,92.3h16.42q-14.79,25.59-29.56,51.19h17l-31.74,57.43Z" />
          <path
            id="tree14__light"
            className="cls-6"
            d="M1124.77,705.78h17q-14.79-25.59-29.56-51.19h16.42l-53.29-92.3q14.61,46.15,29.23,92.3h-6.79l18,51.19h-9.85q9.82,28.71,19.64,57.43h31Q1140.65,734.48,1124.77,705.78Z" />
        </g>
      </g>
      <g id="tree15" className="tree">
        <g>
          <rect
            className="cls-1"
            x="904.58"
            y="781.26"
            width="19.13"
            height="43.44"
            transform="translate(-0.95 1.08) rotate(-0.07)" />
          <rect
            className="cls-2"
            x="916.64"
            y="781.25"
            width="7.06"
            height="43.44"
            transform="translate(-0.95 1.09) rotate(-0.07)" />
        </g>
        <g>
          <path
            id="tree15__dark"
            className="cls-7"
            d="M915.29,615c15.05,0,28.46,28.38,26.82,58.47-.41,7.52-1.61,13.61-.14,18,5.19,15.43,8.55,23.78,8.55,28.8,0,11.82,3.36,13.37-6.65,26.75s-8.34,16.73-10,21.74-8.33,20.07-16.69,20.08-10.29.22-21.75-15c-5-6.68-5-10-11.72-21.71-3-5.23-10.05-18.38-10.07-28.41,0-23.4,10-28.43,10-33.44,0-6.9-13.72-15.7,3.3-38.45C896.93,638.41,903.59,615,915.29,615Z" />
          <path
            id="tree15__light"
            className="cls-8"
            d="M917.17,788.83c8.36,0,15-15.06,16.69-20.08s0-8.36,10-21.74,6.67-14.93,6.65-26.75c0-5-3.36-13.37-8.55-28.8-1.47-4.39-.27-10.48.14-18,1.58-29-10.82-56.41-25.18-58.35,6.18,11.24,15.6,33,9.78,53.76-8.32,29.62,8.4,42.51,6.9,58.45s-15.92,22-12.86,40.25c1,6.23-1.1,13.89-4.38,21.26Z" />
        </g>
      </g>
      <g id="tree18" className="tree">
        <g>
          <rect className="cls-1" x="411.36" y="777.74" width="20.49" height="46.53" />
          <rect className="cls-2" x="424.28" y="777.74" width="7.56" height="46.53" />
        </g>
        <g>
          <path
            id="tree18__dark"
            className="cls-9"
            d="M488.09,728.19c0,36.6-29.67,52.45-66.27,52.45s-66.27-15.85-66.27-52.45,29.67-96.35,66.27-96.35S488.09,691.59,488.09,728.19Z" />
          <path
            id="tree18__light"
            className="cls-8"
            d="M422.39,631.85c21.8,37.91,51.27,107.09,5.25,148.64,33.87-1.62,60.45-17.66,60.45-52.3C488.09,691.79,458.73,632.48,422.39,631.85Z" />
        </g>
      </g>
      <g id="tree10" className="tree">
        <g>
          <rect className="cls-1" x="1721.01" y="768.13" width="24.91" height="56.57" />
          <rect className="cls-2" x="1736.72" y="768.13" width="9.2" height="56.57" />
        </g>
        <g>
          <path
            id="tree10__dark"
            className="cls-10"
            d="M1733.47,772c-5.89,0-37,2.91-57.58-12.19-18.58-13.64-25.44-27.86-26.54-40.16-1.75-19.73,11.35-34.52,14.67-34-12.85-19.77,6.92-32.63,6.92-32.63-5.93-36.58,21.75-35.59,21.75-35.59,8.9-39.55,36.84-39.55,38.56-39.55s29.66,0,38.56,39.55c0,0,27.69-1,21.75,35.59,0,0,19.78,12.86,6.92,32.63,3.38-.53,16.81,14.68,14.59,34.85-1.33,12.1-8.3,26-26.45,39.3C1766.05,774.89,1739.81,772,1733.47,772Z" />
          <path
            id="tree10__light"
            className="cls-11"
            d="M1798.48,685.64c12.86-19.77-6.92-32.63-6.92-32.63,5.94-36.58-21.75-35.59-21.75-35.59-7.43-33-29.37-38.48-36.37-39.37,11.65,13.66,16.64,37.5,15.61,46.29,0,0,24.72,13.84,11.86,35.59,0,0,18.79,9.89,7.91,25.71,0,0,12.87,11.22,9,35.77-2,12.82-8.54,29.28-23.86,49.67,10.7-1.29,23.16-4.35,32.61-11.29,18.53-13.6,25.4-27.78,26.52-40C1815,700,1801.82,685.11,1798.48,685.64Z" />
        </g>
      </g>
      <g id="tree19" className="tree">
        <g>
          <rect className="cls-1" x="347.73" y="790.19" width="15.2" height="34.52" />
          <rect className="cls-2" x="357.32" y="790.19" width="5.61" height="34.52" />
        </g>
        <g>
          <path
            id="tree19__dark"
            className="cls-3"
            d="M404.65,753.43c0,27.15-22,38.91-49.16,38.91s-49.16-11.76-49.16-38.91,22-71.48,49.16-71.48S404.65,726.28,404.65,753.43Z" />
          <path
            id="tree19__light"
            className="cls-4"
            d="M355.92,682c16.17,28.12,38,79.44,3.89,110.27,25.13-1.2,44.84-13.1,44.84-38.8C404.65,726.42,382.87,682.43,355.92,682Z" />
        </g>
      </g>
      <g id="tree11" className="tree">
        <g>
          <rect className="cls-1" x="1591.74" y="778.18" width="20.49" height="46.53" />
          <rect className="cls-2" x="1604.66" y="778.18" width="7.56" height="46.53" />
        </g>
        <g>
          <path
            id="tree11__dark"
            className="cls-9"
            d="M1668.46,728.63c0,36.6-29.67,52.45-66.27,52.45s-66.27-15.85-66.27-52.45,29.67-96.35,66.27-96.35S1668.46,692,1668.46,728.63Z" />
          <path
            id="tree11__light"
            className="cls-8"
            d="M1602.77,632.29c21.8,37.91,51.26,107.09,5.25,148.64,33.87-1.62,60.44-17.66,60.44-52.3C1668.46,692.23,1639.1,632.92,1602.77,632.29Z" />
        </g>
      </g>
      <g id="tree22" className="tree">
        <g>
          <rect className="cls-1" x="84.87" y="782.69" width="18.5" height="42.02" />
          <rect className="cls-2" x="96.54" y="782.69" width="6.83" height="42.02" />
        </g>
        <g>
          <path
            id="tree22__dark"
            className="cls-10"
            d="M94.12,785.55c-4.38,0-27.5,2.16-42.77-9.06-13.8-10.13-18.89-20.69-19.71-29.82C30.34,732,40.07,721,42.54,721.42c-9.55-14.69,5.14-24.23,5.14-24.23C43.27,670,63.83,670.75,63.83,670.75c6.61-29.37,27.36-29.37,28.64-29.37s22,0,28.64,29.37c0,0,20.56-.73,16.16,26.44,0,0,14.68,9.54,5.14,24.23,2.5-.4,12.48,10.91,10.83,25.88-1,9-6.17,19.3-19.65,29.19C118.32,787.71,98.83,785.56,94.12,785.55Z" />
          <path
            id="tree22__light"
            className="cls-11"
            d="M142.41,721.42c9.54-14.69-5.14-24.23-5.14-24.23,4.4-27.17-16.16-26.44-16.16-26.44-5.52-24.55-21.81-28.58-27-29.24,8.66,10.15,12.37,27.85,11.6,34.38,0,0,18.36,10.28,8.81,26.44,0,0,13.95,7.34,5.88,19.09,0,0,9.55,8.34,6.72,26.56-1.49,9.53-6.35,21.75-17.73,36.9,7.95-1,17.2-3.23,24.22-8.39,13.76-10.1,18.87-20.63,19.7-29.74C154.64,732.05,144.88,721,142.41,721.42Z" />
        </g>
      </g>
      <g id="tree3" className="tree">
        <g>
          <rect
            className="cls-1"
            x="2290.26"
            y="781.26"
            width="19.13"
            height="43.44"
            transform="translate(-0.95 2.72) rotate(-0.07)" />
          <rect
            className="cls-2"
            x="2302.33"
            y="781.25"
            width="7.06"
            height="43.44"
            transform="translate(-0.95 2.72) rotate(-0.07)" />
        </g>
        <g>
          <path
            id="tree3__dark"
            className="cls-7"
            d="M2301,615c15.05,0,28.46,28.38,26.82,58.47-.41,7.52-1.61,13.61-.14,18,5.19,15.43,8.55,23.78,8.55,28.8,0,11.82,3.36,13.37-6.65,26.75s-8.34,16.73-10,21.74-8.33,20.07-16.69,20.08-10.29.22-21.75-15c-5-6.68-5-10-11.72-21.71-3-5.23-10.05-18.38-10.07-28.41,0-23.4,10-28.43,10-33.44,0-6.9-13.72-15.7,3.3-38.45C2282.62,638.41,2289.27,615,2301,615Z" />
          <path
            id="tree3__light"
            className="cls-8"
            d="M2302.85,788.83c8.36,0,15-15.06,16.69-20.08s0-8.36,10-21.74,6.67-14.93,6.65-26.75c0-5-3.36-13.37-8.55-28.8-1.47-4.39-.27-10.48.14-18,1.58-29-10.82-56.41-25.18-58.35,6.18,11.24,15.6,33,9.78,53.76-8.32,29.62,8.4,42.51,6.9,58.45s-15.92,22-12.86,40.25c1.05,6.23-1.1,13.89-4.38,21.26Z" />
        </g>
      </g>
      <g id="tree16" className="tree">
        <g>
          <rect className="cls-1" x="756" y="747.51" width="33.99" height="77.2" />
          <rect className="cls-2" x="777.44" y="747.51" width="12.55" height="77.2" />
        </g>
        <g>
          <path
            id="tree16__dark"
            className="cls-5"
            d="M873.31,748.7q-19.62-35.49-39.23-71h21q-18.27-31.63-36.53-63.26h20.29q-32.93-57-65.86-114.07L707.14,614.47h20.29q-18.27,31.62-36.53,63.26h21q-19.6,35.49-39.23,71Z" />
          <path
            id="tree16__light"
            className="cls-6"
            d="M834.08,677.73h21q-18.27-31.63-36.53-63.26h20.29q-32.93-57-65.86-114.07,18.07,57,36.14,114.07h-8.41L823,677.73H810.78l24.27,71h38.26Q853.69,713.21,834.08,677.73Z" />
        </g>
      </g>
      <g id="tree20" className="tree">
        <g>
          <rect className="cls-1" x="263.14" y="776.84" width="21.08" height="47.87" />
          <rect className="cls-2" x="276.43" y="776.84" width="7.78" height="47.87" />
        </g>
        <g>
          <path
            id="tree20__dark"
            className="cls-5"
            d="M335.88,777.57l-24.32-44q6.51,0,13,0l-22.66-39.24h12.59L273.68,623.6Q253.25,659,232.84,694.33h12.58l-22.65,39.24q6.51,0,13,0l-24.33,44Z" />
          <path
            id="tree20__light"
            className="cls-6"
            d="M311.56,733.57q6.51,0,13,0l-22.66-39.24h12.59L273.68,623.6q11.19,35.35,22.4,70.73h-5.21l13.79,39.24c-2.52,0-5,0-7.55,0q7.53,22,15.05,44h23.72Z" />
        </g>
      </g>
      <g id="tree21" className="tree">
        <g>
          <rect className="cls-1" x="155.56" y="787.47" width="16.4" height="37.24" />
          <rect className="cls-2" x="165.9" y="787.47" width="6.05" height="37.24" />
        </g>
        <g>
          <path
            id="tree21__dark"
            className="cls-5"
            d="M212.14,788.05q-9.45-17.13-18.92-34.24h10.13L185.74,723.3h9.78l-31.76-55L132,723.3h9.79q-8.82,15.26-17.62,30.51h10.13q-9.45,17.13-18.92,34.24Z" />
          <path
            id="tree21__light"
            className="cls-6"
            d="M193.22,753.81h10.13L185.74,723.3h9.78l-31.76-55q8.7,27.51,17.42,55h-4.05q5.37,15.26,10.72,30.51H182q5.86,17.12,11.71,34.24h18.45Q202.69,770.92,193.22,753.81Z" />
        </g>
      </g>
      <g id="tree12" className="tree">
        <g>
          <rect className="cls-1" x="1433.17" y="788.29" width="16.03" height="36.41" />
          <rect className="cls-2" x="1443.28" y="788.29" width="5.92" height="36.41" />
        </g>
        <g>
          <path
            id="tree12__dark"
            className="cls-5"
            d="M1488.5,788.86,1470,755.38h9.91l-17.23-29.84h9.57l-31.06-53.81-31.07,53.81h9.57l-17.23,29.84h9.91q-9.24,16.74-18.5,33.48Z" />
          <path
            id="tree12__light"
            className="cls-6"
            d="M1470,755.38h9.91l-17.23-29.84h9.57l-31.06-53.81,17,53.81h-4q5.24,14.93,10.48,29.84H1459l11.45,33.48h18Z" />
        </g>
      </g>
      <g id="tree9" className="tree">
        <g>
          <rect className="cls-1" x="1870.14" y="796.5" width="12.42" height="28.2" />
          <rect className="cls-2" x="1877.97" y="796.5" width="4.59" height="28.2" />
        </g>
        <g>
          <path
            id="tree9__dark"
            className="cls-5"
            d="M1913,796.94,1898.66,771h7.68L1893,747.9h7.42l-24.06-41.68-24.06,41.68h7.41L1846.35,771H1854l-14.33,25.93Z" />
          <path
            id="tree9__light"
            className="cls-6"
            d="M1898.66,771h7.68L1893,747.9h7.42l-24.06-41.68,13.2,41.68h-3.07q4.05,11.55,8.12,23.11h-4.45q4.44,13,8.87,25.93h14Z" />
        </g>
      </g>
      <g id="tree8" className="tree">
        <g>
          <rect className="cls-1" x="1940.45" y="781.92" width="18.84" height="42.79" />
          <rect className="cls-2" x="1952.34" y="781.92" width="6.96" height="42.79" />
        </g>
        <g>
          <path
            id="tree8__dark"
            className="cls-5"
            d="M2005.47,782.58l-21.74-39.34h11.65l-20.25-35.06h11.25L1949.87,645q-18.25,31.6-36.5,63.23h11.25l-20.25,35.06H1916l-21.75,39.34Z" />
          <path
            id="tree8__light"
            className="cls-6"
            d="M1983.73,743.24h11.65l-20.25-35.06h11.25L1949.87,645l20,63.23h-4.66q6.16,17.52,12.32,35.06h-6.74l13.45,39.34h21.2Z" />
        </g>
      </g>
      <g id="tree7" className="tree">
        <g>
          <rect className="cls-1" x="1991.84" y="772.98" width="22.78" height="51.73" />
          <rect className="cls-2" x="2006.2" y="772.98" width="8.41" height="51.73" />
        </g>
        <g>
          <path
            id="tree7__dark"
            className="cls-5"
            d="M2070.44,773.78l-26.28-47.55h14.07Q2046,705,2033.76,683.84h13.59q-22-38.22-44.12-76.44l-44.13,76.44h13.59l-24.47,42.39h14.08L1936,773.78Z" />
          <path
            id="tree7__light"
            className="cls-6"
            d="M2044.16,726.23h14.07Q2046,705,2033.76,683.84h13.59q-22-38.22-44.12-76.44,12.11,38.22,24.21,76.44h-5.63l14.89,42.39h-8.15l16.26,47.55h25.63Z" />
        </g>
      </g>
      <g id="tree6" className="tree">
        <g>
          <rect className="cls-1" x="2070.64" y="776.9" width="21.05" height="47.81" />
          <rect className="cls-2" x="2083.92" y="776.9" width="7.77" height="47.81" />
        </g>
        <g>
          <path
            id="tree6__dark"
            className="cls-5"
            d="M2143.29,777.63q-12.15-22-24.29-44h13l-22.62-39.18H2122q-20.38-35.32-40.79-70.65l-40.78,70.65h12.56l-22.62,39.18h13q-12.13,22-24.29,44Z" />
          <path
            id="tree6__light"
            className="cls-6"
            d="M2119,733.68h13l-22.62-39.18H2122q-20.38-35.32-40.79-70.65l22.38,70.65h-5.2q6.88,19.59,13.76,39.18h-7.53l15,44h23.69Q2131.14,755.66,2119,733.68Z" />
        </g>
      </g>
      <g id="tree5" className="tree">
        <g>
          <rect className="cls-1" x="2148.07" y="796.58" width="12.38" height="28.13" />
          <rect className="cls-2" x="2155.89" y="796.58" width="4.57" height="28.13" />
        </g>
        <g>
          <path
            id="tree5__dark"
            className="cls-5"
            d="M2190.82,797l-14.3-25.85h7.66l-13.31-23h7.39l-24-41.57-24,41.57h7.39l-13.31,23H2132L2117.72,797Z" />
          <path
            id="tree5__light"
            className="cls-6"
            d="M2176.52,771.16h7.66l-13.31-23h7.39l-24-41.57q6.57,20.79,13.16,41.57h-3.06l8.1,23H2168l8.85,25.85h13.94Z" />
        </g>
      </g>
      <g id="tree4" className="tree">
        <g>
          <rect className="cls-1" x="2176.09" y="787.89" width="16.21" height="36.82" />
          <rect className="cls-2" x="2186.31" y="787.89" width="5.99" height="36.82" />
        </g>
        <g>
          <path
            id="tree4__dark"
            className="cls-5"
            d="M2232,788.46l-18.71-33.85h10l-17.42-30.17h9.67L2184.19,670l-31.41,54.41h9.68q-8.72,15.07-17.42,30.17h10l-18.71,33.85Z" />
          <path
            id="tree4__light"
            className="cls-6"
            d="M2213.33,754.61h10l-17.42-30.17h9.67L2184.19,670l17.24,54.41h-4q5.29,15.07,10.6,30.17h-5.8q5.78,16.92,11.57,33.85H2232Z" />
        </g>
      </g>
      <g id="tree2" className="tree">
        <g>
          <rect className="cls-1" x="2387.8" y="787.57" width="16.35" height="37.14" />
          <rect className="cls-2" x="2398.12" y="787.57" width="6.04" height="37.14" />
        </g>
        <g>
          <path
            id="tree2__dark"
            className="cls-5"
            d="M2444.24,788.14q-9.43-17.07-18.88-34.14h10.11l-17.57-30.43c3.25,0,6.51,0,9.76,0L2396,668.69l-31.68,54.88c3.25,0,6.5,0,9.76,0L2356.48,754h10.11l-18.87,34.14Z" />
          <path
            id="tree2__light"
            className="cls-6"
            d="M2425.36,754h10.11l-17.57-30.43c3.25,0,6.51,0,9.76,0L2396,668.69q8.68,27.43,17.38,54.88c-1.35,0-2.69,0-4,0L2420,754h-5.85l11.67,34.14h18.41Q2434.8,771.07,2425.36,754Z" />
        </g>
      </g>
      <g id="tree1" className="tree">
        <g>
          <rect className="cls-1" x="2460.13" y="781.72" width="18.93" height="42.99" />
          <rect className="cls-2" x="2472.07" y="781.72" width="6.99" height="42.99" />
        </g>
        <g>
          <path
            id="tree1__dark"
            className="cls-5"
            d="M2525.46,782.38l-21.85-39.52h11.7L2495,707.62h11.3l-36.68-63.52-36.68,63.52h11.3l-20.34,35.24h11.7l-21.84,39.52Z" />
          <path
            id="tree1__light"
            className="cls-6"
            d="M2503.61,742.86h11.7L2495,707.62h11.3l-36.68-63.52q10.07,31.75,20.12,63.52H2485q6.19,17.63,12.38,35.24h-6.77q6.75,19.75,13.51,39.52h21.31Z" />
        </g>
      </g>
      <g id="tree17" className="tree">
        <g>
          <rect className="cls-1" x="647.23" y="768.75" width="24.64" height="55.96" />
          <rect className="cls-2" x="662.77" y="768.75" width="9.1" height="55.96" />
        </g>
        <g>
          <path
            id="tree17__dark"
            className="cls-3"
            d="M659.55,772.56c-5.82,0-36.61,2.87-57-12.06-18.37-13.5-25.16-27.56-26.24-39.73-1.74-19.52,11.22-34.14,14.51-33.62-12.72-19.56,6.84-32.27,6.84-32.27-5.86-36.19,21.52-35.21,21.52-35.21,8.8-39.12,36.44-39.12,38.14-39.12s29.34,0,38.14,39.12c0,0,27.38-1,21.52,35.21,0,0,19.56,12.71,6.84,32.27,3.34-.53,16.62,14.52,14.43,34.47-1.32,12-8.21,25.7-26.16,38.88C691.78,775.43,665.83,772.57,659.55,772.56Z" />
          <path
            id="tree17__light"
            className="cls-4"
            d="M723.86,687.15c12.72-19.56-6.84-32.27-6.84-32.27,5.86-36.19-21.52-35.21-21.52-35.21-7.35-32.69-29-38.06-36-38.95,11.53,13.52,16.47,37.1,15.44,45.79,0,0,24.45,13.7,11.74,35.21,0,0,18.58,9.78,7.82,25.43,0,0,12.73,11.1,9,35.38-2,12.68-8.45,29-23.6,49.13,10.59-1.27,22.91-4.3,32.26-11.16C730.45,747,737.25,733,738.36,720.88,740.15,701.3,727.16,686.63,723.86,687.15Z" />
        </g>
      </g>
    </StyledSvg>
  )
}

export default Trees


