import { app } from "hyperapp"
import { actions } from "./src/actions/actions.map";
import { state } from "./src/state/state";
import { view } from "./src/components/main/main.component";

app(state, actions, view, document.getElementById('app'));