import { down, DownReturnFunction } from "./count/down.action";
import { up, UpReturnFunction } from "./count/up.action";

export interface Actions {
    down: (value: number) => DownReturnFunction;
    up: (value: number) => UpReturnFunction;
}

export const actions = {
    down: down,
    up: up
}