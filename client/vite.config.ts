import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
	base: './',
	plugins: [react(), tsconfigPaths()],
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler'
			}
		}
	},
	build: {
		chunkSizeWarningLimit: 2000,
		terserOptions: {
			compress: {
				drop_console: true,
				dead_code: true,
				unused: true,
				join_vars: true
			},
			safari10: true
		}
	}
})
