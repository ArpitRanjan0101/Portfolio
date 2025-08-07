# Arpit Ranjan - Portfolio

A modern, responsive portfolio website built with Next.js and Tailwind CSS.

## Features

- 🎨 Modern dark theme with gradient backgrounds
- 📱 Fully responsive design
- ⚡ Fast performance with Next.js
- 🎯 Clean and professional UI
- 🔧 TypeScript for better development experience

## Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Linting**: ESLint

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
└── components/
    ├── Header.tsx       # Navigation header
    └── HeroSection.tsx  # Hero section component
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

- Update the name in `src/components/HeroSection.tsx`
- Modify colors in `src/app/globals.css`
- Add new sections in `src/app/page.tsx`

## Deployment

The project can be deployed to Vercel, Netlify, or any other hosting platform that supports Next.js.

```bash
npm run build
```

## License

This project is open source and available under the [MIT License](LICENSE).
