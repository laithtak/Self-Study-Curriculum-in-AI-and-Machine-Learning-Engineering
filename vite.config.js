import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({ plugins: [react()], base: process.env.GITHUB_PAGES === 'true' ? '/Self-Study-Curriculum-in-AI-and-Machine-Learning-Engineering/' : '/' });
