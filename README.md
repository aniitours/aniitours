# Tourism Website Content Management

This project now integrates [Netlify CMS](https://www.netlifycms.org/) so that non-technical contributors can update site copy and tour packages without touching the codebase.

## Authoring Workflow

- The CMS lives at `/admin`. Deploys on Netlify automatically expose the admin UI once Identity is enabled.
- Content is versioned inside the repository:
  - General copy lives in `src/content/whyAmram.json`.
  - Package data lives in `src/content/packages/*.json`, one file per package.
- Updating content through the CMS commits JSON changes to the `main` branch, triggering a rebuild.

## Netlify Setup

1. **Enable Identity**  
   - In the Netlify dashboard, open _Identity_ → _Enable Identity_.  
   - Under _Settings & usage_:
     - Allow registrations via “Invite only”.  
     - Add trusted domains (e.g. your production URL and `localhost:8888` for local previews).

2. **Enable Git Gateway**  
   - With Identity enabled, click _Enable Git Gateway_.  
   - Confirm access to the connected Git provider so the CMS can push commits.

3. **Invite Editors**  
   - Under _Identity_ → _Users_, invite clients or teammates.  
   - They will receive an email to set a password and gain access to `/admin`.

4. **Optional: Local Preview**  
   - Run `netlify dev` (or your preferred preview server).  
   - The CMS uses the same `/admin` route locally once Identity is running against the hosted site.

## Adding or Editing Packages

Within the CMS, the “Packages” collection exposes:

- `Slug`: lower-case slug without spaces (used for routing).
- `Duration Code`: matches one of `3N4D`, `4N5D`, `5N6D`, or `6N7D`.
- `Card Image`: displayed on listing cards; optional.
- `Prices`: enter values per category (leave blank to hide).
- `Itinerary`: overview title/subtitle plus a list of day-by-day details, including activities and optional images.

The frontend imports JSON directly, so changes appear on rebuild without further code updates.

## Manual Edits

If you’re comfortable editing JSON directly:

- `src/content/whyAmram.json` controls the highlights in `WhyAmram.tsx`.
- Each file in `src/content/packages/` represents a package; you can copy an existing file to create a new one.  
  Ensure the `slug` is unique and matches the CMS slug.

## Troubleshooting

- **CMS login loop**: make sure Identity has invite-only mode and that the editor accepted the invite.  
- **Git Gateway errors**: re-check the Netlify Identity service and reconnect the Git provider if repository permissions changed.  
- **Missing assets**: upload through the CMS media library (stored in `public/uploads/`). For existing static assets, reference paths under `/static/...`.

For further customisation (e.g. additional sections or collections), edit `public/admin/config.yml`.*** End Patch*** End Patch

