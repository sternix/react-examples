import { useState } from "react";
import useEffectOnce from "../hooks/useEffectOnce";

function EffectOnce() {
    const [clicked, setClicked] = useState(false)

    useEffectOnce(() => {
        console.log('bu fonksiyon when değeri true olduğunda sadece bir defa çalışacak')
    }, clicked)

    return (
        <button onClick={() => setClicked(true)}>Click me</button>
    )
}

export default EffectOnce