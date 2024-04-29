import React from "react";


// https://www.30secondsofcode.org/react/s/use-unload/
// doğru çalışmıyor
export default function useUnload(fn) {
    const cb = React.useRef(fn);

    React.useEffect(() => {
        const onUnload = cb.current;
        window.addEventListener('beforeunload', onUnload);
        return () => {
            window.removeEventListener('beforeunload', onUnload);
        };
    }, [cb]);
};