import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // This makes the server accessible over the local network
    port: 3000,  // Specify the port (optional, defaults to 5173)
  },
});
