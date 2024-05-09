import { createRef, useEffect, useState } from 'react';
import { getMovePosition } from '../utils/helpers';
import Drawing from '../components/Drawing';
import * as constants from '../entities/index'

function DrawingContainer({
    x,
    y,
    width,
    height,
    stroke,
    strokeWidth,
    path,
    pageWidth,
    pageHeight,
    removeDrawing,
    updateDrawingAttachment,
}) {
    const svgRef = createRef();
    const [mouseDown, setMouseDown] = useState(false);
    const [positionTop, setPositionTop] = useState(y);
    const [positionLeft, setPositionLeft] = useState(x);
    const [operation, setOperation] = useState(constants.DRAG_ACTIONS_NO_MOVEMENT);
    const [dimmerActive, setDimmerActive] = useState(false);

    useEffect(() => {
        const svg = svgRef.current;
        if (svg) {
            svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
        }
    }, [svgRef, width, height]);

    const handleMousedown = (event) => {
        setMouseDown(true);
        setOperation(constants.DRAG_ACTIONS_MOVE);
    };

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

    const handleMouseUp = (event) => {
        event.preventDefault();
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

            updateDrawingAttachment({
                x: left,
                y: top,
            });
        }

        if (operation === constants.DRAG_ACTIONS_SCALE) {
            updateDrawingAttachment({
                x: positionLeft,
                y: positionTop,
            });
        }

        setOperation(constants.DRAG_ACTIONS_NO_MOVEMENT);
    };

    const handleMouseOut = (event) => {
        if (operation === constants.DRAG_ACTIONS_MOVE) {
            handleMouseUp(event);
        }
    };

    const handleClick = () => setDimmerActive(true);
    const cancelDelete = () => setDimmerActive(false);

    const confirmDelete = () => {
        cancelDelete();
        removeDrawing();
    };
    return (
        <Drawing
            stroke={stroke}
            strokeWidth={strokeWidth}
            path={path}
            width={width}
            svgRef={svgRef}
            height={height}
            onClick={handleClick}
            cancelDelete={cancelDelete}
            dimmerActive={dimmerActive}
            deleteDrawing={confirmDelete}
            handleMouseDown={handleMousedown}
            handleMouseMove={handleMouseMove}
            handleMouseOut={handleMouseOut}
            handleMouseUp={handleMouseUp}
            positionLeft={positionLeft}
            positionTop={positionTop}
        />
    );
};

export default DrawingContainer