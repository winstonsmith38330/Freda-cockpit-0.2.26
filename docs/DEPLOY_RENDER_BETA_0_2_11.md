# Deploy Beta 0.2.11 on Render

Upload the clean repo so GitHub root contains:

```text
server/
web/
docs/
scripts/
seed-data.json
README.md
```

Render settings:

```text
Root Directory: server
Build Command: npm install
Start Command: npm start
```

Environment variables:

```text
NODE_VERSION=20.18.0
REPORTING_BASE_URL=https://reporting.site
REPORTING_COOKIE=<full Cookie request-header value from reporting.site ticket_sales.php>
```

Alternative:

```text
REPORTING_PHPSESSID=<raw session value only>
```

Optional script sync controls:

```text
REPORTING_DISCOVERY_MAX_FORWARD=15000
REPORTING_MAX_TICKETS_PER_STORE=8000
REPORTING_SYNC_CONCURRENCY=12
```

Optional latest ticket IDs if auto-discovery is slow:

```text
REPORTING_LATEST_TICKET_Beverly_Hills=
REPORTING_LATEST_TICKET_Penrith=
REPORTING_LATEST_TICKET_Taren_Point=
```

Check:

```text
/health
```

Expected version: `0.2.11`.

Important: the password/cookie should never be committed to GitHub. Add it only in Render Environment.
