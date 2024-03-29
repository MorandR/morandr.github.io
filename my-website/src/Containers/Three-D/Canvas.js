import React, { useRef, useEffect } from "react";

const Canvas = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    //Drawing below
    context.fillStyle = '#A73FB2' //Purple
    context.fillRect(0,0, context.canvas.width, context.canvas.height)
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
