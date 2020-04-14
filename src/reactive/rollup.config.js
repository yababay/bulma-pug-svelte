import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
//import {coffeescript, pug} from 'svelte-preprocess'

const production = !process.env.ROLLUP_WATCH;

export default {
	input: './main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: '../../public/js/bundle.js',
	},
	plugins: [
        svelte({
            dev: !production,
            css: css => {
                css.write('../../public/css/bundle.css');
            },
            onwarn: (warning, handler) => {
                if (warning.code === 'a11y-distracting-elements') return;
                if (warning.code === 'a11y-missing-attribute') return;
                if (warning.code === 'a11y-autofocus') return;
                handler(warning);
            },
            preprocess: [ /* pug({pretty: true}) coffeescript() */ ]
		}),
		resolve({
			browser: true,
			dedupe: importee => importee === 'svelte' || importee.startsWith('./node_modules/svelte/')
		}),
		commonjs(),
		!production && livereload('../../public'),
		production && terser()
	],
	watch: {
		clearScreen: false
	}
};
