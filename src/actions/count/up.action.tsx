import { State } from "../../state/state";

export type UpReturnFunction = (state: State) => { count: number }

export function up(value: number): UpReturnFunction {
    return (state: State) => {
        return { count: state.count + value };
    }
}