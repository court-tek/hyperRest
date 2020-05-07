import { h } from "hyperapp";

export default function SpecialMenu(props) {
  return h("section", { id: "SpecialMenu" }, [
    h("div", { class: "container" }, [
      h("h4", {class: "discover-title" }, "discover" ),
      h("h2", {class: "our-title"}, "our menu"),
      h("div", {class: "flex"}, [
        h("div", {class: "menu-card flx-4"}, [
          h("div",{class: "box"}, [
            h("div", {class: "box-image"}),
            h("div", {class: "price-circle"}, "$25"),
            h("span", {class: "title"}, "super bBQ gril no smoke"),
            h("p", {}, "fried eggs, steak, baked potato, french fries, side of vegetables")
          ])
        ]),
        h("div", {style: {background: "#FFA500"}, class: "menu-card flx-4"}, "box2"),
        h("div", {style: {background: "#FFFF00"}, class: "menu-card flx-4"}, "box3"),
        h("div", {style: {background: "#00F000"}, class: "menu-card flx-12"}, "box4"),
      ])
    ])
  ]);
}
