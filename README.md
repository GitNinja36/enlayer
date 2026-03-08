<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1Ynlk7T2UZwcucr-zr1Ex0Enha6q9sSuz

## Run Locally

**Prerequisites:** Node.js 18+

1. Install dependencies:
   ```bash
   npm install
   ```
2. (Optional) Set `GEMINI_API_KEY` in `.env` or `.env.local` if the app uses it.
3. Run the app:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Output is in the `dist/` folder. Preview the production build locally:

```bash
npm run preview
```

## Deploy to Vercel

1. Push the repo to GitHub (if not already).
2. Go to [vercel.com](https://vercel.com) and sign in.
3. Click **Add New** → **Project** and import your repository.
4. Vercel will detect the Vite project. Keep the defaults:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. (Optional) Add environment variables in **Settings → Environment Variables** (e.g. `GEMINI_API_KEY`).
6. Click **Deploy**.

Or use the [Vercel CLI](https://vercel.com/docs/cli):

```bash
npm i -g vercel
vercel
```
