import useHover from "../hooks/useHover"

function Hover() {
    const [hoverRef, isHovering] = useHover();
    return <div id="hover-div" ref={hoverRef}>{isHovering ? 'Hovering' : 'Not hovering'}</div>;
}

export default Hover