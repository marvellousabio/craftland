# CraftID - The Income Identity Engine

<div align="center">
  <img width="1200" height="475" alt="CraftID Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

CraftID is a revolutionary fintech platform designed for artisans and skilled workers to build their financial identity through transaction history and our proprietary CraftScore system.

## Features

- **Payment Links & QR Codes** - Accept payments instantly via WhatsApp or in-person
- **CraftScore** - AI-powered credit score based on your transaction patterns
- **Nano Loans** - Access capital based on your verified income history
- **Virtual Cards** - Business cards for tools and expenses
- **Job Matching** - Get discovered by clients in your area
- **Health Cover** - Affordable insurance for artisans and families

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The app will be available at `http://localhost:3000`

### Build

```bash
# Build for production
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Animation**: Motion (Framer Motion)
- **Build Tool**: Vite
- **Icons**: Lucide React

## Deployment

This project is optimized for Vercel deployment. Simply connect your repository to Vercel and it will automatically deploy.

### Vercel Deployment Steps

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and sign up
3. Click "Add New Project" and select your repository
4. Vercel will automatically detect the configuration
5. Click "Deploy"

## Environment Variables

Create a `.env.local` file for local development:

```
GEMINI_API_KEY=your_api_key_here
```

## License

MIT License - CraftID Technologies
