import { h } from "hyperapp"

export default function Painter(props, actions) {
  let hue = actions.huechanger;
  console.log(hue);
  return h("main", {style: {backgroundColor: "rbga(45, 23, 299, 0.6)"}}, [
    h("button", { onclick: hue, class: "btn" }, "color changer")
  ])
  
}

