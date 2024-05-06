import { useEffect, useRef, useState } from "react";
import Menu from "./components/Menu";
import { extractOffSetFromEvent } from "./utils";
import "./style.css";

function App() {
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);
    const scalingFactor = 1
    const [isDrawing, setIsDrawing] = useState(false);
    const [lineWidth, setLineWidth] = useState(5);
    const [lineColor, setLineColor] = useState('#000000');
    const [lineOpacity, setLineOpacity] = useState(0.1);

    // Initialization when the component 
    // mounts for the first time 
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.globalAlpha = lineOpacity;
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = lineWidth;
        ctxRef.current = ctx;
    }, [lineColor, lineOpacity, lineWidth]);

    // Function for starting the drawing 
    const startDrawing = (e) => {
        const { offsetX, offsetY } = extractOffSetFromEvent(
            e,
            scalingFactor,
            canvasRef
        );

        ctxRef.current.beginPath();
        ctxRef.current.moveTo(
            offsetX,
            offsetY
        );
        setIsDrawing(true);
    };

    // Function for ending the drawing 
    const endDrawing = () => {
        ctxRef.current.closePath();
        setIsDrawing(false);
    };

    const draw = (e) => {
        if (!isDrawing) {
            return;
        }

        const { offsetX, offsetY } = extractOffSetFromEvent(
            e,
            scalingFactor,
            canvasRef
        );

        ctxRef.current.lineTo(
            offsetX,
            offsetY
        );

        ctxRef.current.stroke();
    };

    return (
        <div className="App">
            <h1>Paint App</h1>
            <div className="draw-area">
                <Menu
                    setLineColor={setLineColor}
                    setLineWidth={setLineWidth}
                    setLineOpacity={setLineOpacity}
                    lineColor={lineColor}
                    lineWidth={lineWidth}
                    lineOpacity={lineOpacity}
                />
                <canvas
                    onMouseDown={startDrawing}
                    onMouseUp={endDrawing}
                    onMouseMove={draw}
                    onTouchStart={startDrawing}
                    onTouchEnd={endDrawing}
                    onTouchMove={draw}
                    ref={canvasRef}
                    width={`1280px`}
                    height={`720px`}
                />
            </div>
        </div>
    );
}

export default App;
