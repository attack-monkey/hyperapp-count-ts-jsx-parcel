import { loadPolyfills } from "./src/utils/polyfills/load-polyfills";
import { app } from "hyperapp";
import { state } from "./src/state/state";
import { actions } from "./src/actions/actions.map";
import { view } from "./src/components/main/main.component";


loadPolyfills();
app(state, actions, view, document.getElementById('app'));


