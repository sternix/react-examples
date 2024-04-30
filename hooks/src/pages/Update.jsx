import React from 'react'
import useUpdate from '../hooks/useUpdate';

function Update() {
    const update = useUpdate()
    return (
        <>
            <div>Time: {Date.now()}</div>
            <button onClick={update}>Update</button>
        </>
    )
}

export default Update