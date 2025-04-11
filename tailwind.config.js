/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    // ✅ CORRECTO: array de strings o array de objetos
    themes: ["light", "dark", "cupcake"],

    // ❌ INCORRECTO: objeto directamente (esto rompe DaisyUI)
    // themes: {
    //   light: {
    //     primary: "#ff0000"
    //   }
    // }
  }
}
