import { useEffect } from "react";
import { initWebGL } from "../../utils/webGLutils";

export const FilmEditor = () => {
  useEffect(() => {
    const canvas = document.getElementById("webgl-canvas") as HTMLCanvasElement;
    let gl = initWebGL(canvas);
  }, []);

  return (
    <>
      <div style={{ background: "red" }}>FilmEditor</div>
      <canvas id="webgl-canvas" width={800} height={600} />
    </>
  );
};
