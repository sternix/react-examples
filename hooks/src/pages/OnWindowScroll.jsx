import useOnWindowScroll from "../hooks/useOnWindowScroll";

function OnWindowScroll() {
    useOnWindowScroll(() => console.log(`scroll Y: ${window.pageYOffset}`))
    return (
        <p style={{ height: '300vh' }}>Scroll and check the console</p>
    )
}

export default OnWindowScroll
