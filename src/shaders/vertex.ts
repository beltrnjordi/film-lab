export const vertexShader = `
// Uniforms: datos globales enviados desde JavaScript
uniform mat4 uProjectionMatrix;
uniform mat4 uModelViewMatrix;

// Attributes: datos propios de cada vértice
attribute vec3 position;
attribute vec2 uv;

// Varyings: datos que se pasan al Fragment Shader
varying vec2 vUv;

void main() {

    // Pasar coordenadas UV al Fragment Shader
    vUv = uv;

    // Transformar el vértice al espacio de pantalla
    gl_Position =
        uProjectionMatrix *
        uModelViewMatrix *
        vec4(position, 1.0);
}
`;
