# SVG Parallax Fjord - Built with React

https://react.parallaxfjord.com/

## Some cool things about the project

- No animation library added for Parallax effects. It uses a simple custom hook to style all parallax layers on the page with a `scrollY` variable, as well as the background transition.
- ~~Uses CSS variables from a derived value to accomplish background transition.~~.
  - I have since learned that CSS variables do not perform well when being recalculated, particularly when the element it is declared on has a lot of children. I've switched this to simple js variables that are read on the element for better performance
- Built for up to 2560px resolution.
- SVG morphing animations for trees blowing in the wind using snap-svg.
