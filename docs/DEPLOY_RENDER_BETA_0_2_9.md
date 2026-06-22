# Deploy Beta 0.2.9 on Render

Recommended Render settings for this clean repository:

- Root Directory: `server`
- Build Command: `npm install`
- Start Command: `npm start`
- Branch: the branch/repository where you uploaded the Beta 0.2.9 clean repo files

Environment variables:

```text
REPORTING_BASE_URL=https://reporting.site
REPORTING_TIMEZONE=Australia/Sydney
REPORTING_COOKIE=<full Cookie header copied from Chrome, without the word Cookie:>
# Optional fallback instead of full cookie:
REPORTING_PHPSESSID=<only the PHPSESSID value>
# Optional if login form works from Render:
REPORTING_EMAIL=<raw email>
REPORTING_PASSWORD=<raw password, not URL-encoded>
```

After changing environment variables, use:

`Manual Deploy -> Clear build cache & deploy`

Open `/health` to confirm version `0.2.9`.

## Important
Do not commit credentials or cookies to GitHub. Put them only in Render Environment variables.
