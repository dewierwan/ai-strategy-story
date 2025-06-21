# Welcome to your project

## Project info

## How can I edit this code?

There are several ways of editing your application.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

This project is configured for GitHub Pages deployment with automatic CI/CD via GitHub Actions.

**Live Site**: https://dewierwan.github.io/ai-strategy-story/

## 📦 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **UI Components**: shadcn/ui with Radix UI primitives
- **Styling**: TailwindCSS
- **Routing**: React Router
- **Data Fetching**: TanStack Query
- **Icons**: Lucide React

## 🚀 Deployment Guide

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 🔗 Custom Domain

You can configure a custom domain for your GitHub Pages site by:
1. Adding a `CNAME` file to the `public/` directory with your domain name
2. Configuring DNS records to point to GitHub Pages
3. Enabling custom domain in your repository's Pages settings

Read more: [GitHub Pages Custom Domain Guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## 🛠️ Development

### Prerequisites
- Node.js 18 or higher
- npm

### Setup
```bash
# Clone the repository
git clone [your-repo-url]
cd ai-strategy-story

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will be available at: `http://localhost:8080/ai-strategy-story/` 
(or the next available port if 8080 is in use)

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Manual deployment to GitHub Pages
- `npm run lint` - Run ESLint
