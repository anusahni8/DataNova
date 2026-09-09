# DataNova AI Interview Studio

## Files
- `datanova-ai-interview.html` — standalone candidate/interviewer UI.
- `datanova-consulting-ai.html` — DataNova website with the AI Interview Studio plug-in embedded.
- `server.js` — optional production AI evaluation API.
- `package.json` — Node dependencies.
- `.env.example` — environment variables.

## Run the AI-backed version
1. Install Node.js 20+.
2. Copy `.env.example` to `.env`.
3. Add your server-side `OPENAI_API_KEY`.
4. Run `npm install`.
5. Run `npm start`.
6. Open `http://localhost:3000/datanova-ai-interview.html`.

The browser UI works without the API as a demo. The server endpoint is the production path for LLM evaluation.

## Deployment
Deploy the HTML and Node API together (or host the static UI separately and point its API calls to your authenticated backend). Never put an API key in browser JavaScript.

## Product roadmap
1. Candidate login + recruiter dashboard.
2. JD upload and AI-generated question plans.
3. Resume parsing and candidate/JD matching.
4. Voice/video interviews.
5. Coding sandbox with test execution.
6. AI transcript + competency scoring.
7. Human interviewer review/override.
8. ATS integrations, scheduling, email/WhatsApp notifications.
9. Audit logs, consent, retention controls and role-based access.
