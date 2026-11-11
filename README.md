# Aayush Santosh — personal site

Files:

| File | What it is |
|---|---|
| `index.html` | The whole site: experience, leadership, certifications, skills, contact |
| `projects.js` | Your project list. This is the only file you need to edit to add projects |
| `site.js` | Draws the project cards, the copy-email button and the side index |
| `favicon.svg` | The small "AS" icon in the browser tab |

---

## 1. Put the site online (about 15 minutes, no coding)

1. **Create a GitHub account** at github.com if you don't have one. Pick your username carefully, since it becomes part of your site address (for example `aayushsantosh`).
2. **Create a repository.** Click **+** (top right) → **New repository**.
   - Repository name: `YOUR-USERNAME.github.io`, matching your username exactly (e.g. `aayushsantosh.github.io`)
   - Set it to **Public**
   - Click **Create repository**
3. **Upload the files.** On the new repository page, click **uploading an existing file**, or go to **Add file → Upload files**. Drag in all four files: `index.html`, `projects.js`, `site.js`, `favicon.svg`. You can include this README too. Click **Commit changes**.
4. **Turn on Pages.** Go to **Settings → Pages**. Under *Build and deployment*, set Source to **Deploy from a branch**, Branch to **main**, folder **/ (root)**, then **Save**.
5. **Wait 1–2 minutes**, then visit `https://YOUR-USERNAME.github.io`. Your site is live.

## 2. Optional: use your own domain (recommended)

1. Buy a domain such as `aayushsantosh.com` from Cloudflare, Namecheap or Porkbun (about $10–15 a year).
2. In your GitHub repository, go to **Settings → Pages → Custom domain**, enter the domain, and click **Save**.
3. In your domain registrar's **DNS settings**, add these records:

   | Type | Name | Value |
   |---|---|---|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | CNAME | www | YOUR-USERNAME.github.io |

4. Wait for GitHub to confirm the domain. This can take from a few minutes up to a day. Then tick **Enforce HTTPS** on the Pages settings screen.

If anything looks different, GitHub's own guide is under *Docs → GitHub Pages → Configuring a custom domain*.

## 3. Add a new project

1. In your repository, click `projects.js`, then the **pencil icon** (Edit).
2. Copy one project block, from `{` down to `},`, and paste it at the **top** of the list, just after `window.PROJECTS = [`.
3. Change the text. Keep the quotes and commas exactly as they are.
4. Click **Commit changes**. The site updates in about a minute.

Example:

```js
window.PROJECTS = [
  {
    title:   "Affordable Housing Pro Forma",
    type:    "Personal project",
    date:    "Dec 2026",
    summary: "A hypothetical 80-unit LIHTC development modelled from scratch: sources and uses, rent roll at 60% AMI, debt sizing and investor returns.",
    link:    "https://github.com/YOUR-USERNAME/ah-pro-forma",
    tags:    ["Excel", "LIHTC", "Real estate"]
  },
  {
    title:   "Elevate: Champion's Mindset Platform",
    ...
```

**If the projects disappear after an edit**, a quote or comma is probably missing. Open `projects.js` again and compare it with the blocks above it, or send the file to Claude to fix.

## 4. Other edits

Everything else (experience, certifications, skills, contact) is in `index.html`. Search the file for the text you want to change and edit it in place. When you earn the SAP S/4HANA or Wall Street Prep certification, find its block in the **Certifications** section, remove `<span class="pill">In progress</span>`, and update the date.
