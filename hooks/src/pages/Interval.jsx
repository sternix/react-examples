import { useState } from "react";
import useInterval from "../hooks/useInterval";

function Interval() {
    const [seconds, setSeconds] = useState(0);

    useInterval(() => {
        setSeconds(seconds + 1);
    }, 1000);

    return <p>{seconds}</p>;
}

export default Interval