import { createElement } from "react";

import { Count } from "./components/Count";
import "./ui/ColourCount.css";

export function ColourCount({ initialValue }) {
    return <Count initialValue={initialValue} />;
}
