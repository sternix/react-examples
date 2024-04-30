import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

function Debounce() {
    const [value, setValue] = useState(0);
    const lastValue = useDebounce(value);

    return (
        <div>
            <p>
                Current: {value} - Debounced: {lastValue}
            </p>
            <button onClick={() => setValue(value + 1)}>Increment</button>
        </div>
    )
}

export default Debounce