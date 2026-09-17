# Swift Operations website

Static site for swiftoperations.com.au. Edit the HTML files and push to main; Cloudflare Pages rebuilds in about two minutes.

- `index.html`, `services.html`, `about.html`, `contact.html`, `privacy.html`, `insights/` are the pages.
- `styles.css` is the brand: dark theme, DM Sans body, Playfair Display headings, Swift white and Operations green.
- The free consultation form is `audit.html` at /audit (form.swiftoperations.com.au redirects there). It posts to the Apps Script web app with the same field names as the original audit form, so leads land in the Swift Operations - Leads sheet and appear on HQ.
- The contact form posts to the same Apps Script web app as the audit form, so contact messages land in the Swift Operations - Leads sheet.
- `_redirects` maps the old Squarespace URLs.
