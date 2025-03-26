# Next.js Notes Project

A modern note-taking application built with Next.js and Supabase.

![Next.js](https://img.shields.io/badge/Next.js-13-black)
![Supabase](https://img.shields.io/badge/Supabase-Database-green)
![License](https://img.shields.io/badge/License-MIT-blue)

## Overview

This note-taking application allows users to create, read, update, and delete personal notes with authentication and real-time database functionality powered by Supabase.

## Features

- 📝 Create, read, update, and delete notes
- 🔒 User authentication via Supabase
- 🚀 Server-side rendering for optimal performance
- 📱 Responsive design for all devices
- ⚡ Real-time database updates
- 🔄 Automatic timestamp updating

## Technology Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [Supabase](https://supabase.io/) - Open source Firebase alternative
- React - UI library
- TypeScript - Type safety

## Getting Started

### Prerequisites

- Node.js 14.6.0 or newer
- Git
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone git@github.com:mairovitzmario/notes.git
   cd notes
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   
   a. Create a new Supabase project at [supabase.com](https://supabase.com)
   
   b. Create `.env.local` file in the project root with:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Set up database schema**

   a. Create notes table with the schema defined in `src/utils/supabase/supabase-types.ts`
   
   b. Add the following Row Level Security policy to allow users to manage their notes:
   
   ```sql
   CREATE POLICY "Allow CRUD for user's own notes" 
   ON "public"."notes"
   TO public
   USING (user_id = auth.uid())
   WITH CHECK (user_id = auth.uid());
   ```

5. **Create update timestamp trigger**

   ```sql
   CREATE OR REPLACE FUNCTION update_timestamp()
   RETURNS TRIGGER AS $$
   BEGIN
     NEW.updated_at = NOW();
     RETURN NEW;
   END;
   $$ LANGUAGE plpgsql;

   CREATE TRIGGER set_timestamp
   BEFORE UPDATE ON notes
   FOR EACH ROW
   WHEN (OLD IS DISTINCT FROM NEW)
   EXECUTE FUNCTION update_timestamp();
   ```

6. **Start the development server**
   ```bash
   npm run dev
   ```

7. **View the application**
   
   Open [http://localhost:3000](http://localhost:3000) in your browser

