import { TEXT_MODE_COMMAND } from '../entities';

function Text({
    text,
    width,
    height,
    inputRef,
    mode,
    size,
    fontFamily,
    positionTop,
    positionLeft,
    onChangeText,
    toggleEditMode,
    handleMouseDown,
    handleMouseMove,
    handleMouseOut,
    handleMouseUp,
    lineHeight,
}) {
    return (
        <div
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseOut={handleMouseOut}
            onDoubleClick={toggleEditMode}
            style={{
                width,
                border: 1,
                height,
                fontFamily,
                fontSize: size,
                lineHeight,
                cursor: mode === TEXT_MODE_COMMAND ? 'move' : 'default',
                top: positionTop,
                left: positionLeft,
                borderColor: 'gray',
                borderStyle: 'solid',
                wordWrap: 'break-word',
                padding: 0,
                position: 'absolute',
            }}
        >
            <input
                type="text"
                ref={inputRef}
                onChange={onChangeText}
                readOnly={mode === TEXT_MODE_COMMAND}
                style={{
                    width: '100%',
                    borderStyle: 'none',
                    borderWidth: 0,
                    fontFamily,
                    fontSize: size,
                    outline: 'none',
                    padding: 0,
                    boxSizing: 'border-box',
                    lineHeight,
                    height,
                    margin: 0,
                    backgroundColor: 'transparent',
                    cursor: mode === TEXT_MODE_COMMAND ? 'move' : 'text',
                }}
                value={text}
            />
        </div>
    );
};

export default Text
