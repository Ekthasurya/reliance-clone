import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    '__APP_ENV_VARS__': {
      RAZORPAY_KEY_ID: 'your-razorpay-key-id',
    },
  },
})
