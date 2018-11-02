import { h } from "hyperapp";

interface Props {
    value: number | string | boolean
}

export function ValueDisplay({ value }: Props) {
    return (
        <h1>{value}</h1>
    )
}

