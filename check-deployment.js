#!/usr/bin/env node

/**
 * GitHub Pages Deployment Verification Script
 * This script checks if the project is properly configured for GitHub Pages
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 Checking GitHub Pages deployment configuration...\n');

// Check vite.config.ts
const viteConfigPath = path.join(__dirname, 'vite.config.ts');
if (fs.existsSync(viteConfigPath)) {
  const viteConfig = fs.readFileSync(viteConfigPath, 'utf8');
  if (viteConfig.includes("base: mode === 'development' ? '/ai-strategy-story/' : '/ai-strategy-story/'")) {
    console.log('✅ Vite config has correct base path');
  } else if (viteConfig.includes("base: '/ai-strategy-story/'")) {
    console.log('✅ Vite config has base path (simplified)');
  } else {
    console.log('❌ Vite config missing base path');
  }
} else {
  console.log('❌ vite.config.ts not found');
}

// Check App.tsx for React Router basename
const appPath = path.join(__dirname, 'src', 'App.tsx');
if (fs.existsSync(appPath)) {
  const appContent = fs.readFileSync(appPath, 'utf8');
  if (appContent.includes('basename="/ai-strategy-story"')) {
    console.log('✅ React Router has correct basename');
  } else {
    console.log('❌ React Router missing basename');
  }
} else {
  console.log('❌ src/App.tsx not found');
}

// Check GitHub Actions workflow
const workflowPath = path.join(__dirname, '.github', 'workflows', 'deploy.yml');
if (fs.existsSync(workflowPath)) {
  const workflow = fs.readFileSync(workflowPath, 'utf8');
  if (workflow.includes('actions/deploy-pages@v4')) {
    console.log('✅ GitHub Actions workflow configured');
  } else {
    console.log('⚠️  GitHub Actions workflow may need updates');
  }
} else {
  console.log('❌ GitHub Actions workflow not found');
}

// Check if dist exists (build was run)
const distPath = path.join(__dirname, 'dist');
if (fs.existsSync(distPath)) {
  console.log('✅ Build directory exists');
} else {
  console.log('⚠️  Build directory not found - run "npm run build"');
}

console.log('\n🎯 Deployment URL: https://dewierwan.github.io/ai-strategy-story/');
console.log('\n📋 Next steps:');
console.log('1. Commit and push your changes to GitHub');
console.log('2. Go to your GitHub repository settings');
console.log('3. Navigate to Pages > Source > GitHub Actions');
console.log('4. The workflow will automatically deploy your site');
