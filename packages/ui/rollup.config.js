import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';

export default defineConfig([
  {
    input: 'src/react/index.ts',
    external: ['react', 'react-dom'],
    plugins: [
      typescript(),
      resolve(),
    ],
    output: [
      {
        name: 'umd',
        file: './dist/react/index.js',
        format: 'umd',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        }
      },
      {
        name: 'es',
        file: './es/react/index.js',
        format: 'es',
      },
      {
        name: 'commonjs',
        file: './lib/react/index.cjs',
        format: 'commonjs',
      }
    ]
  }
])