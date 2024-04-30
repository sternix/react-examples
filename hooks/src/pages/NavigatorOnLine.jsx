import useNavigatorOnLine from "../hooks/useNavigatorOnLine"

function NavigatorOnLine() {
    const isOnline = useNavigatorOnLine()
    return (
        <h3>{isOnline ? '✅ Online' : '❌ Offline'}</h3>
    )
}

export default NavigatorOnLine