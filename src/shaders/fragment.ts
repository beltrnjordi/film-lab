export const fragmentShader = `
// Uniforms: parámetros globales
uniform sampler2D uTexture;
uniform float uTime;
uniform vec2 uResolution;

// Varyings: datos recibidos del Vertex Shader
varying vec2 vUv;

void main() {

    // Color de salida
    vec4 color = texture2D(uTexture, vUv);

    // Modificar el color
    color.rgb *= 1.2;

    // Asignar el color final al fragmento
    gl_FragColor = color;
}
`;
