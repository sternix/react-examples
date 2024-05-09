import { useState, useRef } from 'react';
import Text from '../components/Text';
import { getMovePosition } from '../utils/helpers';
import * as constants from '../entities'

function TextContainer({
  x,
  y,
  text,
  width,
  height,
  lineHeight,
  size,
  fontFamily,
  pageHeight,
  pageWidth,
  updateTextAttachment,
}) {
  const inputRef = useRef(null);
  const [content, setContent] = useState(text || '');
  const [mouseDown, setMouseDown] = useState(false);
  const [positionTop, setPositionTop] = useState(y);
  const [positionLeft, setPositionLeft] = useState(x);
  const [operation, setOperation] = useState(
    constants.DRAG_ACTIONS_NO_MOVEMENT
  );
  const [textMode, setTextMode] = useState(constants.TEXT_MODE_COMMAND);

  const handleMouseMove = (event) => {
    event.preventDefault();

    if (mouseDown) {
      const { top, left } = getMovePosition(
        positionLeft,
        positionTop,
        event.movementX,
        event.movementY,
        width,
        height,
        pageWidth,
        pageHeight
      );

      setPositionTop(top);
      setPositionLeft(left);
    }
  };

  const handleMousedown = (event) => {
    if (textMode !== constants.TEXT_MODE_COMMAND) {
      return;
    }

    setMouseDown(true);
    setOperation(constants.DRAG_ACTIONS_MOVE);
  };

  const handleMouseUp = (event) => {
    event.preventDefault();

    if (textMode !== constants.TEXT_MODE_COMMAND) {
      return;
    }

    setMouseDown(false);

    if (operation === constants.DRAG_ACTIONS_MOVE) {
      const { top, left } = getMovePosition(
        positionLeft,
        positionTop,
        event.movementX,
        event.movementY,
        width,
        height,
        pageWidth,
        pageHeight
      );

      updateTextAttachment({
        x: left,
        y: top,
      });
    }

    // if (operation === DragActions.SCALE) {
    //     updateTextObject({
    //         x: positionLeft,
    //         y: positionTop,
    //     });

    // }

    setOperation(constants.DRAG_ACTIONS_NO_MOVEMENT);
  };

  const handleMouseOut = (event) => {
    if (operation === constants.DRAG_ACTIONS_MOVE) {
      handleMouseUp(event);
    }

    if (textMode === constants.TEXT_MODE_INSERT) {
      setTextMode(constants.TEXT_MODE_COMMAND);
      prepareTextAndUpdate();
    }
  };

  const prepareTextAndUpdate = () => {
    // Deselect any selection when returning to command mode
    document.getSelection()?.removeAllRanges();

    const lines = [content];
    updateTextAttachment({
      lines,
      text: content,
    });
  };

  const toggleEditMode = () => {
    const input = inputRef.current;
    const mode =
      textMode === constants.TEXT_MODE_COMMAND ? constants.TEXT_MODE_INSERT : constants.TEXT_MODE_COMMAND;

    setTextMode(mode);

    if (input && mode === constants.TEXT_MODE_INSERT) {
      input.focus();
      input.select();
    } else {
      prepareTextAndUpdate();
    }
  };

  const onChangeText = (event) => {
    const value = event.currentTarget.value;
    setContent(value);
  };

  return (
    <Text
      text={content}
      width={width}
      height={height}
      mode={textMode}
      size={size}
      lineHeight={lineHeight}
      inputRef={inputRef}
      fontFamily={fontFamily}
      positionTop={positionTop}
      onChangeText={onChangeText}
      positionLeft={positionLeft}
      handleMouseUp={handleMouseUp}
      toggleEditMode={toggleEditMode}
      handleMouseOut={handleMouseOut}
      handleMouseDown={handleMousedown}
      handleMouseMove={handleMouseMove}
    />
  );
};

export default TextContainer