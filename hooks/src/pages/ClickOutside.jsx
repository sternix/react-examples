import React from 'react'
import useClickOutside from '../hooks/useClickOutside';

function ClickBox({ onClickOutside }) {
    const clickRef = React.useRef()
    useClickOutside(clickRef, onClickOutside)
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
            <p>Click out of this element</p>
        </div>
    )
}

function ClickOutside() {
    return (
        <ClickBox onClickOutside={() => console.log('outside clicked')} />
    )
}

export default ClickOutside