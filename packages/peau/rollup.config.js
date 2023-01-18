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
        name: 'usine-peau',
        file: './dist/index.js',
        format: 'umd',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        }
      },
      {
        name: 'usine-peau',
        file: './es/index.js',
        format: 'es',
      },
      {
        name: 'usine-peau',
        file: './cjs/index.cjs',
        format: 'cjs',
      }
    ]
  }
])
