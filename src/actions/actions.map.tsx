import { iu } from "iu-ts";
import { State } from "../state/state";

export interface Actions {
    counterUp: (value: number) => (state: State) => any,
    counterDown: (value: number) => (state: State) => any
}

export const actions: Actions = {
    counterUp: value => state => iu(state, 'counter/count', state.counter.count + value),
    counterDown: value => state => iu(state, 'counter/count', state.counter.count - value)
}