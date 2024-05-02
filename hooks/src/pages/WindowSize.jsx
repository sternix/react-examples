import useWindowSize from "../hooks/useWindowSize";

function WindowSize() {
    const { width, height } = useWindowSize()
    return (
        <p>
            Window size: ({width} x {height})
        </p>
    )
}

export default WindowSize