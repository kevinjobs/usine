import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';

export default defineConfig([
  {
    input: 'src/index.ts',
    external: ['react', 'react-dom', '@usine/hooks'],
    plugins: [
      typescript(),
      // resolve(),
      postcss(),
    ],
    output: [
      {
        name: 'usine-react',
        file: './dist/index.js',
        format: 'umd',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@usine/hooks': 'usine-hooks'
        }
      },
      {
        name: 'usine-react',
        file: './es/index.js',
        format: 'es',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@usine/hooks': 'usine-hooks'
        }
      },
      {
        name: 'usine-react',
        file: './cjs/index.cjs',
        format: 'cjs',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@usine/hooks': 'usine-hooks'
        }
      }
    ]
  }
])