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
        name: 'smede-react',
        file: './dist/index.js',
        format: 'umd',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        }
      },
      {
        name: 'smede-react',
        file: './es/index.js',
        format: 'es',
      },
      {
        name: 'smede-react',
        file: './cjs/index.cjs',
        format: 'cjs',
      }
    ]
  }
])