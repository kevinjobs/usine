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
        name: 'umd',
        file: './dist/index.js',
        format: 'umd',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        }
      },
      {
        name: 'es',
        file: './es/index.js',
        format: 'es',
      },
      {
        name: 'commonjs',
        file: './lib/index.cjs',
        format: 'commonjs',
      }
    ]
  }
])