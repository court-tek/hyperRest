import { h, app } from "hyperapp"
import {globalState} from "./state/globalState.js"
import {actions} from "./actions/actions.js"
import App from "./components/App.js"
import "../../scss/style.scss"

app({
  init: globalState,
  view: (state) =>
    h("div", {id: "app"}, [
      App(state, actions),
    ]),
  node: document.getElementById("app"),
})
