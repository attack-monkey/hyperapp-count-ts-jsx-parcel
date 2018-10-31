import { h } from "hyperapp";
import { State } from "../../state/state";
import { Actions } from "../../actions/actions.map";
import { ValueDisplay } from "../shared/value-display.component";

export const view = (state: State, actions: Actions) => (
    <div>
        <ValueDisplay value={state.count}></ValueDisplay>
        <button onclick={() => actions.down(1)}>-</button>
        <button onclick={() => actions.up(1)}>+</button>
    </div>
)