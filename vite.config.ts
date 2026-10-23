import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Calculate/',
  plugins: [react()],
  resolve: {
    alias: {
      app: '/src/app',
      pages: '/src/pages',
      shared: '/src/shared',
      widget: '/src/widget',
    },
  },
});
