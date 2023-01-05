import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';

export default defineConfig([
  {
    input: 'src/index.ts',
    external: ['react', 'react-dom', '@smede/hooks'],
    plugins: [
      typescript(),
      // resolve(),
    ],
    output: [
      {
        name: 'smede-react',
        file: './dist/index.js',
        format: 'umd',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@smede/hooks': 'semde-hooks'
        }
      },
      {
        name: 'smede-react',
        file: './es/index.js',
        format: 'es',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@smede/hooks': 'semde-hooks'
        }
      },
      {
        name: 'smede-react',
        file: './cjs/index.cjs',
        format: 'cjs',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@smede/hooks': 'semde-hooks'
        }
      }
    ]
  }
])