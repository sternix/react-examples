import { useRef } from 'react'
import useClickInside from '../hooks/useClickInside';

function ClickBox({ onClickInside }) {
    const clickRef = useRef()
    useClickInside(clickRef, onClickInside)
    return (
        <div
            className="click-box"
            ref={clickRef}
            style={{
                border: '2px dashed orangered',
                height: 200,
                width: 400,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <p>Click inside this element</p>
        </div>
    )
}

function ClickInside() {
    return (
        <ClickBox onClickInside={() => console.log('inside clicked')} />
    )
}

export default ClickInside