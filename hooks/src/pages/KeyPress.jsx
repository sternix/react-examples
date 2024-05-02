import useKeyPress from '../hooks/useKeyPress';

function KeyPress() {
    const wPressed = useKeyPress('w')

    return <p>The "w" key is {!wPressed ? 'not ' : ''}pressed!</p>
}

export default KeyPress