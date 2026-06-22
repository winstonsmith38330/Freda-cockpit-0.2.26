# Deploy Beta 0.2.10 on Render

1. Upload the clean repo contents to GitHub so the repo root directly contains:

```text
server/
web/
docs/
scripts/
seed-data.json
README.md
```

2. Create or update Render web service:

```text
Root Directory: server
Build Command: npm install
Start Command: npm start
NODE_VERSION=20.18.0
```

3. Add POS session variables if you want server-side POS ticket sync:

```text
REPORTING_COOKIE=<full Cookie header from Chrome DevTools Network request>
```

or:

```text
REPORTING_PHPSESSID=<raw PHPSESSID only>
```

4. Deploy and verify:

```text
/health
```

Expected version: 0.2.10.

5. In the app, set Reporting Date before syncing POS ticket_sales.php.
