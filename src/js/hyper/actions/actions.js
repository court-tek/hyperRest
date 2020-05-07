export const actions = {
  huechanger: (props) => {
  let v = () => Math.floor(Math.random() * 255);
  return { originalHue: `rgba(${v()}, ${v()}, ${v()}, 0.4)` }
  },
  blockMover: (props) => {
    
  }
}