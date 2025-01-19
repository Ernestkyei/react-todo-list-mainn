import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-todo-list-mainn/", // Replace with your repository name
  plugins: [react()],
});
