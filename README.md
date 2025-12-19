# Nuxtodo
> https://nuxtodo-beta.vercel.app/

A full-stack todo application built with Nuxt 4, featuring a PostgreSQL database and RESTful API.

## Features

- ✅ Create, read, update, and delete todos
- ✅ Mark todos as completed/uncompleted
- ✅ Server-side rendering with Nuxt 4
- ✅ Type-safe database operations with Drizzle ORM
- ✅ Input validation using Zod
- ✅ Responsive UI with Pico CSS

## Tech Stack

- **Frontend**: Nuxt 4, Vue 3, TypeScript
- **Backend**: Nitro (Nuxt server)
- **Database**: PostgreSQL (Neon)
- **ORM**: Drizzle ORM
- **Validation**: Zod
- **Styling**: Pico CSS

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Create a `.env` file with your database connection:
   ```
   POSTGRES_URL=your_postgresql_connection_string
   ```

4. Generate and run database migrations:
   ```bash
   pnpm db:generate
   pnpm db:migrate
   ```

5. Start the development server:
   ```bash
   pnpm dev
   ```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Lint code
- `pnpm lint:fix` - Fix linting issues
- `pnpm db:generate` - Generate database migrations
- `pnpm db:migrate` - Run database migrations
- `pnpm db:studio` - Open Drizzle Studio 
