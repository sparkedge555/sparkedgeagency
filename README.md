# SparkEdge Website — Setup & Customisation Guide

A complete guide for managing your SparkEdge website after delivery.

---

## 📁 File Structure

```
sparkedge/
├── index.html          ← Home page
├── services.html       ← Services page
├── projects.html       ← Portfolio page
├── team.html           ← Founder profile page
├── contact.html        ← Contact page
├── client-guide.html   ← Internal: client conversion playbook
├── style.css           ← All global styles
├── main.js             ← All global JavaScript
├── raunakkarn.png      ← Raunak Karn's photo (place in root)
├── screenshots/        ← Project screenshots folder (create this)
│   ├── pinnacle-academy.jpg
│   ├── learnright-landing.jpg
│   ├── jee-ebook-cover.jpg
│   ├── city-diagnostics.jpg
│   ├── sunrise-school.jpg
│   └── ca-prateek-landing.jpg
└── README.md           ← This file
```

---

## 📸 Adding Your Photo (Team Page)

The team page is set up to load `raunakkarn.png` from the root folder.

**Steps:**
1. Rename your photo to `raunakkarn.png`
2. Place it in the root folder (same level as `index.html`)
3. Recommended: square crop, minimum 600×600px, under 200KB
4. The page has a graceful fallback — it shows "RK" if the image is missing

**Image tips:**
- Use a clean headshot with good lighting
- Crop to face + shoulders (not full body)
- Background: solid colour or blurred works best
- Compress using [squoosh.app](https://squoosh.app) if over 200KB

---

## 🖼️ Adding Project Screenshots (Projects Page)

### Step 1: Create the screenshots folder
Create a folder called `screenshots/` in your root directory.

### Step 2: Capture project screenshots

**Method (Chrome DevTools):**
1. Open the live website in Chrome
2. Press `F12` → Click the device icon (mobile/responsive toggle)
3. Set width to **1280px**
4. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
5. Type `capture full size screenshot` → press Enter
6. The screenshot downloads automatically

**Specs:**
- Size: 1280 × 720px (16:9 ratio)
- Format: JPG, quality 80–85%
- Max file size: under 150KB per image
- Compress at [squoosh.app](https://squoosh.app) before uploading

### Step 3: Name and place the files

Save them inside the `screenshots/` folder with these exact names:

| Project | Filename |
|---|---|
| Pinnacle Academy | `screenshots/pinnacle-academy.jpg` |
| LearnRight EdTech | `screenshots/learnright-landing.jpg` |
| JEE Ebook | `screenshots/jee-ebook-cover.jpg` |
| City Diagnostics | `screenshots/city-diagnostics.jpg` |
| Sunrise School | `screenshots/sunrise-school.jpg` |
| CA Prateek | `screenshots/ca-prateek-landing.jpg` |

The `<img>` tags already reference these paths. When the files exist, images appear automatically. When they don't exist, a clean placeholder icon shows instead (no broken image icons).

---

## ✏️ Editing Project Testimonials

Each project card on `projects.html` has a client quote block below it. To edit:

1. Open `projects.html`
2. Find the comment `<!-- CLIENT TESTIMONIAL — edit freely -->`
3. Edit the quote text, name, role, and the avatar initials (2-letter code in `.project-quote-avatar`)

**Example:**
```html
<div class="project-quote">
  <div class="stars">★★★★★</div>
  <div class="project-quote-text">"Your custom quote here."</div>
  <div class="project-quote-author">
    <div class="project-quote-avatar">AB</div>  <!-- Change initials -->
    <div>
      <div class="project-quote-name">Client Name</div>
      <div class="project-quote-role">Role, Business Name</div>
    </div>
  </div>
</div>
```

To **hide a testimonial** temporarily, add `style="display:none;"` to the outer `<div class="project-quote">`.

---

## 🔗 Adding a Real Project Link

Find the project card and update the `href` on the `.proj-link`:

```html
<a href="https://your-client-website.com" class="proj-link" target="_blank">
  View Live <i class="fa-solid fa-arrow-right"></i>
</a>
```

---

## 📅 Google Form Dark Theme

To align your Google Form with the website's dark theme:

1. Open your Google Form in edit mode
2. Click the **palette icon** (Customize Theme) in the top right
3. Set **Header colour** to `#FC653A` (SparkEdge orange)
4. Set **Background colour** to `#111111` (matches the card background)
5. Choose **Outfit** or **Roboto** font for closest match

Note: Google Forms doesn't allow full CSS inside iframes. This gets you 80% alignment.

---

## 📱 Making Pages Fully Responsive

All pages use CSS variables and flexbox/grid. Key breakpoints:

| Breakpoint | What changes |
|---|---|
| `max-width: 1024px` | Footer switches to 2-column |
| `max-width: 768px` | Mobile menu appears, nav hides, sections stack |
| `max-width: 480px` | Section padding tightens, hero text shrinks |

If you add new sections, use the existing CSS classes:
- `.grid-3` → 3-column grid (auto-collapses to 1 on mobile)
- `.grid-2` → 2-column grid
- `.card` → standard card component
- `.reveal` → adds scroll-in animation

---

## 🔄 Updating Footer Email

The email `sparkedge555@gmail.com` appears in every footer. To change it globally:
1. Do a Find & Replace (`Ctrl+H`) in your code editor
2. Replace `sparkedge555@gmail.com` with your new email
3. Do the same for `sparkedge-agency.github.io` if your URL changes

---

## 🚀 Deploying to GitHub Pages

1. Push all files to your GitHub repository's `main` branch
2. Go to **Settings → Pages**
3. Set source to `main` branch, root folder
4. Your site is live at `https://yourusername.github.io/repo-name/`

For a custom domain (e.g. `sparkedge.in`):
1. Buy domain from GoDaddy/Namecheap (₹700–₹1000/year)
2. Add a `CNAME` file in root with your domain name
3. Configure DNS: add a CNAME record pointing to `yourusername.github.io`

---

## 🎨 Brand Reference

| Element | Value |
|---|---|
| Primary colour | `#FC653A` |
| Background | `#080808` |
| Card background | `#111111` |
| Muted text | `#888888` |
| Display font | Syne (700, 800) |
| Body font | Outfit (400, 500, 600) |
| Border radius | 14px (cards), 8px (small) |

---

*SparkEdge · Design • Strategy • Conversion*
