# DataNova Project Bundle

A consolidated repository for DataNova's website and AI Interview Studio.

## Projects
- `projects/website` — DataNova consulting website and AI Interview integration.
- `projects/ai-interview` — standalone AI Interview Studio + evaluation API.

## Local run
```bash
cd projects/ai-interview
npm install
cp .env.example .env
npm start
```

Open `http://localhost:3000/datanova-ai-interview.html` if serving the original root, or adapt static hosting as needed.

## GitHub
Set the repository URL and run:
```bash
./scripts/push-to-github.sh https://github.com/YOUR_USERNAME/datanova-platform.git
```

The script initializes Git, creates the first commit, adds the remote and pushes `main`.

## Security
Never commit `.env`, API keys, credentials, candidate PII, interview transcripts, or production secrets. Use GitHub Actions Secrets for deployment credentials.
