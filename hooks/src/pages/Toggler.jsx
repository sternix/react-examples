import useToggler from "../hooks/useToggler"

function Toggler() {
    const [val, toggleVal] = useToggler(false)
    return (
        <button onClick={toggleVal}>{val ? 'On' : 'Off'}</button>
    )
}

export default Toggler