import { useState, useCallback, useRef } from "react";

// https://www.30secondsofcode.org/react/s/use-hover/

export default function useHover() {
    const [isHovering, setIsHovering] = useState(false)

    const handleMouseOver = useCallback(() => setIsHovering(true), [])
    const handleMouseOut = useCallback(() => setIsHovering(false), [])

    const nodeRef = useRef()

    const callbackRef = useCallback(
        node => {
            if (nodeRef.current) {
                nodeRef.current.removeEventListener('mouseover', handleMouseOver)
                nodeRef.current.removeEventListener('mouseout', handleMouseOut)
            }

            nodeRef.current = node

            if (nodeRef.current) {
                nodeRef.current.addEventListener('mouseover', handleMouseOver)
                nodeRef.current.addEventListener('mouseout', handleMouseOut)
            }
        },
        [handleMouseOver, handleMouseOut]
    )

    return [callbackRef, isHovering]
}