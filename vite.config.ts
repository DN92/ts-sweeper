import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // server: {
  //   port: 8000,
  //   strictPort: true,
  //   open: true,
  //   proxy: {
  //     '/ts-sweeper': 'http://localhost:8000',
  //   },
  // },
  test: {
    globals: true,
    deps: {
      registerNodeLoader: true,
    },
    watch: false,
    reporters: 'verbose',
    outputTruncateLength: 180,
    outputDiffLines: 30,
    open: true,
    api: true,
    logHeapUsage: true,
  },
});
