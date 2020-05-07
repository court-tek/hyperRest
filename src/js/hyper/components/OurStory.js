import { h } from "hyperapp";

let box1 = {
  backgroundColor: "#00FFFF"
}

let box2 = {
  backgroundColor: "#FFFFFF"
}
export default function Header(props) {
  return h("section", {id: "OurStory"}, [
    h("div", {class: "container flex"}, [
      h("div", {class: "flx-5 image-side"}, [
        h("div", {class: "img1"})
      ]),
      h("div", {class: "flx-7 story-side", style: box2}, [
        h("h4", {class: "discover-title"}, "discover"),
        h("h2", {class: "ourStory-title"}, "our story"),
        h("p", {class: "ourStory-para"}, 
          "Get the best steakhouse experience at the Steakhaus.  Whether you're joining us for a romantic dinner, a business meeting, a private party or just a drink at the bar, our premium and authentic steakhouse will deliver superior service and perfect dining experience."
        ),
        h("h5", {class: "more-about"}, "more about us")
      ])
    ]),
  ]);
}