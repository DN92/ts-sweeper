import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    deps: {
      registerNodeLoader: true,
    },
    watch: false,
    reporters: 'dot',
    outputTruncateLength: 180,
    outputDiffLines: 30,
    open: true,
    api: true,
    logHeapUsage: true,
    threads: false,
  },
});
