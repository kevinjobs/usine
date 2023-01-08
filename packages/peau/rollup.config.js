import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';

export default defineConfig([
  {
    input: 'src/index.ts',
    plugins: [
      typescript(),
    ],
    output: [
      {
        name: 'smede-utils',
        file: './dist/index.js',
        format: 'umd',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        }
      },
      {
        name: 'smede-utils',
        file: './es/index.js',
        format: 'es',
      },
      {
        name: 'smede-utils',
        file: './cjs/index.cjs',
        format: 'cjs',
      }
    ]
  }
])