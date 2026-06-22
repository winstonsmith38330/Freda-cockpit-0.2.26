# Deploy Beta 0.2.12 on Render

## If the GitHub repo contains the package folder

Use these Render settings:

- Root Directory: `freda_ops_cockpit_beta_0_2_12/server`
- Build Command: `npm install`
- Start Command: `npm start`

## If you upload the clean repo contents directly to the repository root

Use these Render settings:

- Root Directory: `server`
- Build Command: `npm install`
- Start Command: `npm start`

## Required environment variables

Minimum for POS:

```env
REPORTING_BASE_URL=https://reporting.site
REPORTING_COOKIE=PHPSESSID=your_raw_session_id_or_full_cookie_header
REPORTING_SCAN_BACK_TICKETS=12000
```

Optional anchors if auto-discovery is blocked:

```env
REPORTING_LATEST_TICKET_Beverly_Hills=
REPORTING_LATEST_TICKET_Penrith=
REPORTING_LATEST_TICKET_Taren_Point=
```

Uber same-day sync:

```env
UBER_COOKIE=full_cookie_header_from_merchants.ubereats.com
UBER_STORE_BEVERLY_HILLS=store_uuid_or_manager_home_id
UBER_STORE_PENRITH=store_uuid_or_manager_home_id
UBER_STORE_TAREN_POINT=store_uuid_or_manager_home_id
```

Square official API sync:

```env
SQUARE_ACCESS_TOKEN=production_or_oauth_access_token
SQUARE_LOCATION_ID=location_id_for_Friedas_Pies
SQUARE_ENVIRONMENT=production
SQUARE_TIMEZONE_OFFSET=+10:00
```

## Testing sequence

1. Deploy.
2. Open `/health` and confirm version `0.2.12`.
3. Open the app, choose the reporting date, click `Use date`.
4. Click `Sync POS script.php tickets`.
5. If the POS date is older than the scanned window, increase `REPORTING_SCAN_BACK_TICKETS`.
6. Click `Sync Uber Today` only after adding Uber cookies/store IDs.
7. Click `Sync Square Today` only after adding Square API credentials.
