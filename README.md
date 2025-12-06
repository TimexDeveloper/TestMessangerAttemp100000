# Fox Messenger

A high-performance, modern browser messenger built with Next.js 14, TypeScript, Tailwind CSS, and deployed on Vercel.

## Features

- Real-time messaging with WebSockets (Pusher)
- User authentication
- Chat rooms and private messages
- Responsive dark theme with black-orange accent (#FF6700)
- Serverless deployment on Vercel
- Database with Vercel Postgres and Prisma ORM

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Vercel account
- Vercel Postgres database
- Pusher account for WebSockets

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd fox-messenger
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.local` and fill in the actual values:
     - `DATABASE_URL`: Your Vercel Postgres connection string
     - `PUSHER_APP_ID`, `PUSHER_KEY`, `PUSHER_SECRET`, `PUSHER_CLUSTER`: From your Pusher dashboard
     - `NEXTAUTH_SECRET`: Generate a random secret for NextAuth
     - `NEXTAUTH_URL`: Your app URL (http://localhost:3000 for development)

4. Set up the database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Deployment to Vercel

1. Push your code to GitHub.

2. Connect your repository to Vercel.

3. Set environment variables in Vercel dashboard (same as .env.local).

4. Deploy!

## Project Structure

- `app/`: Next.js App Router pages and API routes
- `components/`: Reusable React components
- `lib/`: Utility functions and configurations
- `prisma/`: Database schema and migrations
- `public/`: Static assets

## Technologies Used

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Vercel Serverless Functions
- **Database**: Vercel Postgres, Prisma ORM
- **Real-time**: Pusher WebSockets
- **Authentication**: NextAuth.js
- **Deployment**: Vercel

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT License