import { h } from "hyperapp";

export default function TopImg(props) {
  return h("section", { id: "TopImg" }, [
    h("div", { class: "container flex" }, [
      h("div", { class: "title" }, [
        h(
          "h1",
          null,
          "a premium",
          h("br"),
          "and authentic",
          h("br"),
          "steakhouse"
        ),
        h("div", { class: "book-table-btn" }, "book a table")
      ]),
      h("div", { class: "img-area" }, "image goes here")
    ])
  ]);
}
