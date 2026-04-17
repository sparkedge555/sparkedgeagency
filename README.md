# SparkEdge — Complete Website Guide
## How to Manage, Edit, Host & Get Your First Premium Client in 7 Days

---

## 📁 PART 1: FILE STRUCTURE

```
sparkedge/
├── index.html        ← Home page
├── services.html     ← Services page
├── projects.html     ← Portfolio page
├── contact.html      ← Contact page
├── style.css         ← ALL styles (edit this for design changes)
├── main.js           ← ALL JavaScript (edit this for behaviour changes)
├── screenshots/      ← Create this folder for project images
│   ├── project1.jpg
│   ├── project2.jpg
│   └── ...
└── README.md         ← This file
```

---

## ✏️ PART 2: COMMON EDITS (HOW TO CHANGE THINGS)

### Change Phone Number
Search for `9142450715` across all files and replace with your number.
- Files to update: `index.html`, `services.html`, `projects.html`, `contact.html`

### Change Email
Search for `sparkedge.agency@gmail.com` in `contact.html` and replace.

### Change Colors
Open `style.css`. At the top, find `:root { ... }` and edit:
```css
:root {
  --primary: #FC653A;   ← Main orange accent color
  --bg: #080808;        ← Page background
  --text: #f5f5f5;      ← Main text color
}
```

### Change Prices
Open `index.html`. Search for `₹6,999`, `₹12,999`, `₹19,999` and update.

### Change Team Names (Trust Strip)
In `index.html`, find the trust-strip section and update:
```html
<strong>Raunak Karn</strong>, <strong>Rudram Jha</strong> and <strong>Raunak Kumar</strong>
```

### Change Hero Words (Rotating Text)
In `index.html`, find `.word-rotate` section:
```html
<span class="word active">Websites</span>
<span class="word">Landing Pages</span>
<span class="word">Business Sites</span>
<span class="word">Digital Assets</span>
```
Edit or add new words. Keep `active` on the first one.

---

## 🖼️ PART 3: ADDING PROJECTS

Open `projects.html`. Find the comment that says "ADD YOUR NEXT PROJECT HERE".

**Copy this block and fill in your details:**
```html
<div class="project-card reveal" data-category="website">
  <div class="project-thumb">
    <!-- OPTION A: Use an emoji placeholder -->
    <span style="font-size:3.5rem;">🏫</span>
    <!-- OPTION B: Use a real screenshot (recommended) -->
    <!-- <img src="screenshots/client-name.jpg" alt="Client Name Website"> -->
    <div class="overlay"><i class="fa-solid fa-arrow-up-right-from-square"></i></div>
  </div>
  <div class="project-info">
    <h3>Client Name — Project Title</h3>
    <p>Brief description of what you built and the result. e.g. "Increased enquiries by 3× in first month."</p>
    <div class="project-tags">
      <span class="tag">Coaching</span>
      <span class="tag">SEO</span>
    </div>
    <a href="https://live-website-link.com" target="_blank" class="proj-link">
      View Live <i class="fa-solid fa-arrow-right"></i>
    </a>
  </div>
</div>
```

**data-category options:** `website` | `landing` | `ebook`

**Screenshot tips:**
- Take a full-page screenshot using browser DevTools > Cmd+Shift+P > "Capture full size screenshot"
- Save as JPG (compress to under 200KB for fast loading)
- Put in `/screenshots/` folder

---

## 🔗 PART 4: GOOGLE FORM SETUP

1. Go to https://forms.google.com
2. Create a new form with these fields:
   - Your Name (Short answer)
   - Phone Number (Short answer)
   - Business Type (Multiple choice)
   - What do you need? (Multiple choice)
   - Tell us more (Paragraph)
3. Click **Send** → **< >** icon (Embed)
4. Copy the `src="https://docs.google.com/forms/..."` URL
5. Open `contact.html`, find the placeholder comment and replace with:

```html
<iframe
  src="PASTE_YOUR_FORM_SRC_URL_HERE"
  width="100%"
  height="820"
  frameborder="0"
  marginheight="0"
  marginwidth="0">
  Loading form...
</iframe>
```

---

## 🚀 PART 5: HOSTING ON GITHUB PAGES (FREE)

### Step 1: Create a GitHub account
Go to https://github.com and sign up. Choose username: `sparkedge-agency`

### Step 2: Create a repository
- Click **New repository**
- Name it exactly: `sparkedge-agency.github.io`
- Set to **Public**
- Click **Create repository**

### Step 3: Upload your files
**Option A (Easiest — GitHub web interface):**
1. Open your repository
2. Click **Add file** → **Upload files**
3. Drag ALL your files (index.html, services.html, projects.html, contact.html, style.css, main.js, screenshots/)
4. Click **Commit changes**

**Option B (Professional — Git terminal):**
```bash
# Install Git if you haven't: https://git-scm.com
cd /path/to/your/sparkedge/folder
git init
git add .
git commit -m "Initial SparkEdge website"
git branch -M main
git remote add origin https://github.com/sparkedge-agency/sparkedge-agency.github.io.git
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. Go to your repository → **Settings** → **Pages** (left sidebar)
2. Under "Source", select **Deploy from a branch**
3. Select **main** branch → **/ (root)** → **Save**
4. Wait 2–3 minutes
5. Your site is live at: `https://sparkedge-agency.github.io`

### Step 5: Custom Domain (Optional — ₹700/year)
1. Buy domain from GoDaddy / Namecheap (e.g., `sparkedge.in`)
2. In GitHub Pages settings, enter your custom domain
3. Follow GitHub's DNS setup instructions (takes 24 hours to propagate)

### How to Update the Site Later
Every time you make changes:
1. Save your files
2. Upload via GitHub web interface (drag & drop)  
   OR use terminal: `git add . && git commit -m "Update" && git push`
3. Site updates automatically in 1–2 minutes

---

## 🎯 PART 6: HOW TO GET YOUR FIRST PREMIUM CLIENT IN 7 DAYS

### 📌 Your Target Client Profile
- Coaching institute owner (JEE/NEET/IAS/SSC) with 50–500 students
- Currently has NO website OR has an embarrassing one
- Location: Your city OR tier-2/3 cities (less competition)
- Budget reality: ₹12,999 Growth package is your sweet spot

---

### 📅 DAY-BY-DAY ACTION PLAN

#### DAY 1 (Today): Set Up Your Presence
- [ ] Host your SparkEdge site on GitHub Pages (live link = credibility)
- [ ] Create a professional WhatsApp Business account
  - Profile photo: SparkEdge logo or team photo
  - Business name: SparkEdge
  - Description: "High-conversion websites for coaching institutes & businesses. Free consultation."
  - Hours: Mon–Sat 9AM–9PM
- [ ] Create a short demo reel: Screen-record the SparkEdge website (30 seconds)
- [ ] Write your outreach message (template below)

#### DAY 2: Identify 30 Prospects
Search Google for:
- "coaching institute [your city]" — find ones with bad/no websites
- "NEET coaching [your city]"
- "IAS coaching [your city]"
- "[your city] school admission"

**For each prospect, note:**
- Business name
- WhatsApp/Phone number
- Current website URL (if any) — visit it and note what's wrong
- Instagram/Facebook if available

**Your criteria for a GOOD prospect:**
- Their website looks outdated OR they have no website
- They're actively running ads or posting on Instagram (they're spending money = they have budget)
- They've been operating for 1+ year

#### DAY 3: First Outreach Wave (10 messages)
Send this on WhatsApp — **personalise every single one**:

---
**TEMPLATE A (for businesses with a bad website):**
```
Hi [Name],

I visited [Institute Name]'s website and noticed a few things that might 
be costing you student enquiries — slow loading, not mobile-friendly and 
no clear admission form.

I'm Raunak from SparkEdge (IIT-ecosystem team). We build high-conversion 
websites specifically for coaching institutes. Our sites typically generate 
3–5× more enquiries than standard websites.

Can I show you a free audit of your current site + what we'd do differently? 
Takes 10 minutes on a call. No charge, no obligation.

Here's our work: https://sparkedge-agency.github.io
```

**TEMPLATE B (for businesses with no website):**
```
Hi [Name],

Noticed that [Institute Name] doesn't have a website yet — you're likely 
missing 30–40% of potential student enquiries who search online before 
calling.

I'm Raunak from SparkEdge. We build fast, professional websites for 
coaching institutes starting at ₹6,999. Delivery in 3–7 days.

Here's a quick look at our work: https://sparkedge-agency.github.io

Would you be open to a 10-minute free consultation this week?
```
---

**Rules for outreach:**
- Send max 10 per day (WhatsApp may flag bulk messaging)
- Always use their ACTUAL institute name (not generic)
- Include your live website link every time
- Don't send the same message twice — vary the wording

#### DAY 4–5: Follow Up + Referral Network
- Follow up with anyone who didn't reply (one follow-up only)
  ```
  "Hi [Name], just checking if you had a chance to look at the link I shared. 
   Happy to do a free 10-min audit if it would be useful 🙏"
  ```
- Post in local Facebook groups:
  - "[City] Business Owners"
  - "[City] Coaching Institute Owners"
  - Use template: *"Is your coaching institute's website actually generating leads? 
    We audited 15 sites last month. Happy to do a free 10-min review for 3 more 
    this week. Comment 'YES' or DM me."*
- Tell EVERYONE in your network — family, friends, college seniors
  - "Hey, if you know any coaching institute/school/business owner who needs a website, 
    please connect us. We give a ₹500 referral fee for every paid project."

#### DAY 6: Conduct Free Audits / Calls
- For everyone who responds: offer a 10–15 minute free audit
- Prepare the audit beforehand (takes 5 min):
  1. Open their website on your phone — does it load fast? Is it readable?
  2. Google "site:[theirwebsite.com]" — how many pages are indexed?
  3. Search their institute name on Google — do they appear? Reviews?
  4. Check if they have a contact form / WhatsApp button
- On the call:
  1. Show them the problems (screen share)
  2. Show them YOUR site as the "after"
  3. Give them ONE recommendation
  4. Ask: *"If we could fix all of this for ₹12,999, would that make sense for your business?"*

#### DAY 7: Close and Deliver
**How to close:**
- Never say "think about it and let me know" — instead:
  *"Should I send you the proposal on WhatsApp right now? Takes 2 minutes for me to put together."*
- Send proposal within 1 hour of the call:
  ```
  Hi [Name], great speaking with you!
  
  Here's your proposal:
  ✅ Package: Growth (₹12,999)
  ✅ Includes: 4-5 page website, mobile-optimised, SEO, WhatsApp form
  ✅ Delivery: 7 days from payment
  ✅ Payment: 50% advance (₹6,499) · 50% on delivery (₹6,500)
  
  Payment via UPI: [your UPI ID]
  
  Want to get started? 🚀
  ```
- Advance payment = commitment. Always ask for 50% upfront.

---

### 💰 PRICING PSYCHOLOGY TIPS

**Why your prices are RIGHT:**
- Freelancers on Fiverr charge ₹2,000–₹5,000 (low quality, no strategy)
- Digital agencies charge ₹50,000–₹2,00,000 (too expensive for small businesses)
- YOU are the premium-but-accessible option at ₹6,999–₹19,999

**How to handle "it's too expensive":**
1. *"Compared to what? A local designer charging ₹3,000 will give you a site that doesn't load in 3 seconds and has no SEO. You'll spend more fixing it later."*
2. *"One new student admission covers the entire cost of our website. If we get you even 3 extra enquiries a month, it pays for itself in year 1."*
3. Offer to split payment: 50% now, 50% on delivery

**When to negotiate:**
- Starter package: don't go below ₹5,999
- Growth package: don't go below ₹9,999  
- Authority package: don't go below ₹14,999
- Offer a discount for referrals instead

---

### 🏆 WHAT SUCCESS LOOKS LIKE IN WEEK 1
- 30 prospects identified: ✅
- 20+ outreach messages sent: ✅
- 5+ responses: realistic
- 2–3 calls/audits done: realistic
- 1 paid project closed: **very realistic**

The key metric: **more outreach = more clients**. If you send 20 messages and get 0 responses, the problem is your targeting, not your pricing. Try a different city or different business type.

---

## 🔧 PART 7: QUICK MAINTENANCE CHECKLIST

**Every time you get a new client:**
- [ ] Add them to projects.html once work is done
- [ ] Ask for a testimonial after delivery (for index.html)
- [ ] Screenshot their finished website for your portfolio

**Monthly:**
- [ ] Update stats (projects count, etc.) in index.html
- [ ] Check all contact forms/WhatsApp links still work
- [ ] Review Google Analytics (set up Google Analytics for free traffic data)

---

## 📞 QUICK REFERENCE

| Item | Value |
|------|-------|
| WhatsApp | +91 91424 50715 |
| GitHub URL | https://sparkedge-agency.github.io |
| Starter Price | ₹6,999 |
| Growth Price | ₹12,999 |
| Authority Price | ₹19,999 |
| Advance Required | 50% upfront |

---

*SparkEdge — Design · Strategy · Conversion*
