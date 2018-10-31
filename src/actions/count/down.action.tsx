import { State } from "../../state/state";

export type DownReturnFunction = (state: State) => { count: number }

export function down(value: number): DownReturnFunction {
    return (state: State) => {
        return { count: state.count - value };
    }
}