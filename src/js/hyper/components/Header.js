import { h } from "hyperapp";

export default function Header(props) {
  return h("header", {}, [
    h("div", { class: "container" }, [
      h("div", { class: "logo" }, "Steakhaus"),
      h("nav", null, [
        h("a", { href: "#" }, "Home"),
        h("a", { href: "#" }, "Party Platters"),
        h("a", { href: "#" }, "Locations"),
        h("a", { href: "#" }, "Rewards"),
        h("a", { href: "#" }, "Reservations"),
        h("div", { class: "lang-select" }, "EN")
      ])
    ])
  ]);
}
