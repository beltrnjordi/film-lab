import { fragmentShader } from "../shaders/fragment";
import { vertexShader } from "../shaders/vertex";
import {
  createFullscreenQuad,
  createProgram,
  createShader,
  createTexture,
  initWebGL,
} from "../utils/webGLutils";

export class FilmRenderer {
  private gl: WebGL2RenderingContext;
  private program: WebGLProgram;
  private vao: WebGLVertexArrayObject; // Vertex Array Object: stores the state of the vertex attributes and buffers, in this case, it's used to store the state of the fullscreen quad. It allows us to easily bind and unbind the vertex attributes and buffers when rendering.
  private texture: WebGLTexture;
  private uniforms: {
    texture: WebGLUniformLocation;
    exposure: WebGLUniformLocation;
  }; // shader variables

  constructor(canvas: HTMLCanvasElement) {
    // Initialize WebGL
    this.gl = initWebGL(canvas);

    // Create shaders and program
    const vertex = createShader(this.gl, this.gl.VERTEX_SHADER, vertexShader);
    const fragment = createShader(
      this.gl,
      this.gl.FRAGMENT_SHADER,
      fragmentShader,
    );
    if (!vertex || !fragment) {
      throw new Error("Could not create shaders.");
    }

    this.program = createProgram(this.gl, vertex, fragment);
    this.vao = createFullscreenQuad(this.gl, this.program);
    this.texture = createTexture(this.gl);

    this.uniforms = {
      texture: this.gl.getUniformLocation(this.program, "uTexture")!,
      exposure: this.gl.getUniformLocation(this.program, "uExposure")!,
    };
  }
}
