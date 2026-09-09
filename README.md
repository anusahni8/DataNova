# DataNova Project Bundle

A consolidated repository for DataNova's website and AI Interview Studio.

## Projects
- `projects/website` — DataNova consulting website and AI Interview integration.
- `projects/ai-interview` — standalone AI Interview Studio + evaluation API.

## Local run
```bash
npm install
cp .env.example .env
npm start
```

Open `http://localhost:3000/`.

## Vercel deployment

Import this repository into Vercel with the project root set to the repository root. Vercel will serve `index.html` and deploy `api/evaluate.js` as the `/api/evaluate` function.

Add these environment variables in the Vercel project settings:

- `OPENAI_API_KEY` — the server-side OpenAI API key
- `OPENAI_MODEL` — optional model override

No API key is required in the browser; it must remain a server-side Vercel environment variable.

## GitHub
Set the repository URL and run:
```bash
./scripts/push-to-github.sh https://github.com/YOUR_USERNAME/datanova-platform.git
```

The script initializes Git, creates the first commit, adds the remote and pushes `main`.

## Security
Never commit `.env`, API keys, credentials, candidate PII, interview transcripts, or production secrets. Use GitHub Actions Secrets for deployment credentials.
