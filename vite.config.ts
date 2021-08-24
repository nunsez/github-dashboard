import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

const config = defineConfig({
    plugins: [reactRefresh()],
    esbuild: {
        jsxInject: 'import React from \'react\'',
    },
})

export default config
