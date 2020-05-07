import { h } from "hyperapp"
import Header from "./Header.js"
import TopImg from "./TopImg.js"
import OurStory from "./OurStory.js"
import SpecialMenu from "./SpecialMenu.js"
// import Painter from "./Painter.js"

export default function App(props, actions) {
  return h("div", null, [
    Header(), 
    TopImg(),
    OurStory(),
    SpecialMenu()
  ]);
}
