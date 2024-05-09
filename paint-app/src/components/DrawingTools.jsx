import { Brush, Circle, Eraser, Rectangle, Triangle } from '../assets';
import { useDrawingToolsContext } from '../context/DrawingContext';


function DrawingTools() {
  const { toolsForDrawing, setToolsForDrawing, setIsCheckedForFill, setSliderValue,
    setSelectedColor, selectedColor, setCanvasBackgroundColor, setClearCanvas, canvasObject,
    canvasRef, canvasBackgroundColor } = useDrawingToolsContext();

  // const valueToHex = c => c.toString(16)
  // const rgbToHex = (r, g, b) => valueToHex(r) + valueToHex(g) + valueToHex(b)
  // console.log(rgbToHex(251, 146, 60));

  const handlerToolsForDrawing = id => setToolsForDrawing(id);

  const handleClearCanvas = () => {
    // reset canvas background...
    setCanvasBackgroundColor('#f3f4f6');

    // clear whole canvas...
    setClearCanvas(canvasObject.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height));
  }

  const handleSaveDrawingAsImage = _ => {
    // creating <a> element
    const image = document.createElement('a');

    // set current date as downloadable file name
    image.download = `${Date(Date.now()).slice(0, 24)}.jpg`;

    // passing canvas data as link href value
    image.href = canvasRef.current.toDataURL();

    // click link to download image
    image.click();
  }

  return (
    <section className='bg-gray-100 rounded-md p-3 text-gray-700 select-none flex flex-col justify-between'>
      <div className='space-y-4'>
        {/* Shapes */}
        <div>
          <label htmlFor="" className='title text-lg font-bold'>Shapes</label>
          <ul className='pt-2 '>
            <li
              className={`toolsStyle group ${toolsForDrawing === 'rectangle' && 'text-orange-500'}`}
              onClick={() => handlerToolsForDrawing("rectangle")}
            >
              <Rectangle className='childToolStyle' />
              <label className='childToolStyle' htmlFor='rectangle'>Rectangle</label>
            </li>

            <li
              className={`toolsStyle group ${toolsForDrawing === 'circle' && 'text-orange-500'}`}
              onClick={() => handlerToolsForDrawing("circle")}
            >
              <Circle className='childToolStyle' />
              <span className='childToolStyle'>Circle</span>
            </li>

            <li
              className={`toolsStyle group ${toolsForDrawing === 'triangle' && 'text-orange-500'}`}
              onClick={() => handlerToolsForDrawing("triangle")}
            >
              <Triangle className='childToolStyle' />
              <span className='childToolStyle'>Triangle</span>
            </li>

            <li className="toolsStyle group">
              <input
                type="checkbox"
                id="fillColor"
                className='w-4 h-4'
                onChange={e => setIsCheckedForFill(e.target.checked)}
              />
              <label
                htmlFor="fillColor"
                className='cursor-pointer childToolStyle'
              >
                Fill Color
              </label>
            </li>
          </ul>
        </div>


        {/* Options */}
        <div>
          <label htmlFor="" className='title text-lg font-bold'>Options</label>
          <ul className='options pt-2'>
            <li
              className={`toolsStyle group ${toolsForDrawing === 'brush' && 'text-orange-500'}`}
              onClick={() => handlerToolsForDrawing("brush")}
            >
              <Brush className='childToolStyle' />
              <span className='childToolStyle'>Brush</span>
            </li>

            <li
              className={`toolsStyle group ${toolsForDrawing === 'eraser' && 'text-orange-500'}`}
              onClick={() => handlerToolsForDrawing("eraser")}
            >
              <Eraser className='childToolStyle' />
              <span className='childToolStyle'>Eraser</span>
            </li>

            <li className="option">
              <input
                type="range"
                min='1'
                defaultValue='5'
                max='30'
                className='w-full h-1.5'
                onChange={e => setSliderValue(e.target.value)}
              />
            </li>
          </ul>
        </div>


        {/* Colors */}
        <div>

          <span className='font-semibold'>Line Colors</span>

          <ul className='options flex gap-2 items-center justify-between px-2 py-2'>

            <li
              className={`customColorList border ${selectedColor === 'rgb(255, 255, 255)' && 'before:border-gray-300 before:border-2  before:top-1/2 before:left-1/2 before:translate-x-[-50%] before:translate-y-[-50%] before:absolute before:w-4 before:h-4 before:rounded-full'}`}
              style={{ backgroundColor: '#fff' }}
              onClick={e => setSelectedColor(e.target.style.backgroundColor)}>
            </li>

            <li
              className={`customColorList ${selectedColor === 'rgb(17, 17, 17)' && 'before:border-white before:border-2 before:top-1/2 before:left-1/2 before:translate-x-[-50%] before:translate-y-[-50%] before:absolute before:w-4 before:h-4 before:rounded-full'}`}
              style={{ backgroundColor: '#111' }}
              onClick={e => setSelectedColor(e.target.style.backgroundColor)}>
            </li>

            <li
              className={`customColorList ${selectedColor === 'rgb(239, 68, 68)' && 'before:border-white before:border-2 before:top-1/2 before:left-1/2 before:translate-x-[-50%] before:translate-y-[-50%] before:absolute before:w-4 before:h-4 before:rounded-full'}`}
              style={{ backgroundColor: '#ef4444' }}
              onClick={e => setSelectedColor(e.target.style.backgroundColor)}>
            </li>

            <li
              className={`customColorList ${selectedColor === 'rgb(251, 146, 60)' && 'before:border-white before:border-2 before:top-1/2 before:left-1/2 before:translate-x-[-50%] before:translate-y-[-50%] before:absolute before:w-4 before:h-4 before:rounded-full'}`}
              style={{ backgroundColor: '#fb923c' }}
              onClick={e => setSelectedColor(e.target.style.backgroundColor)}>
            </li>

            <li
              className={`customColorList ${selectedColor === 'rgb(34, 197, 94)' && 'before:border-white before:border-2 before:top-1/2 before:left-1/2 before:translate-x-[-50%] before:translate-y-[-50%] before:absolute before:w-4 before:h-4 before:rounded-full'}`}
              style={{ backgroundColor: '#22c55e' }}
              onClick={e => setSelectedColor(e.target.style.backgroundColor)}>
            </li>

            <input
              type="color"
              defaultValue={selectedColor}
              // className='colorSelector'

              className={`colorSelector ${selectedColor === '#4A98F7' && 'before:border-white before:border-2 before:top-1/2 before:left-1/2 before:translate-x-[-50%] before:translate-y-[-50%] before:absolute before:w-4 before:h-4 before:rounded-full'}`}
              onChange={e => setSelectedColor(e.target.value)}
            />
          </ul>
        </div>

        {/* Canvas Color */}
        <div >
          <p className='font-semibold'>Canvas Color</p>
          <input
            type="color"
            value={canvasBackgroundColor}
            className='w-full h-10 rounded-md border-0'
            onChange={e => setCanvasBackgroundColor(e.target.value)}
          />
        </div>
      </div>


      <div className="space-y-2 text-gray-700">

        <button
          className='btn border border-gray-500 hover:bg-red-500 hover:border-white'
          onClick={handleClearCanvas}
        >
          Clear Canvas
        </button>

        <button
          className='btn text-white bg-customBg hover:bg-green-500'
          onClick={handleSaveDrawingAsImage}
        >
          Save as image
        </button>

      </div>

    </section >
  )
}

export default DrawingTools