import useUnload from "../hooks/useUnload";

function Unload() {
    useUnload(e => {
        e.preventDefault()
        if (window.confirm('Are you sure you want to leave ?'))
            window.close()
    })

    return (
        <div>Try closing the window.</div>
    )
}

export default Unload