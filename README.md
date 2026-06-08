# Nausheen Saifi – Frontend Developer Portfolio

> A modern, responsive, dark/light mode portfolio website built with HTML5, CSS3, and JavaScript.

![Preview](assets/preview.png)

---

## 🚀 Live Demo

**[nausheen-saifi.github.io/nausheen-portfolio]("https://nausheen-frontend-portfolio.vercel.app/")**

---

## ✨ Features

- ⚡ Blazing-fast — zero build step, runs directly in browser
- 🌙 Dark / Light mode toggle with `localStorage` persistence
- 🔡 Typing animation in hero section
- 📜 Scroll-reveal animations via Intersection Observer
- 📱 Fully responsive — mobile, tablet, desktop
- 🎯 Sticky navbar with active section highlighting
- 🎨 Glassmorphism cards with hover glow effects
- 📬 Contact form with client-side validation
- 🔍 SEO-friendly meta tags
- ♿ ARIA labels on all interactive elements

---

## 🗂️ Folder Structure

```
nausheen-portfolio/
├── index.html          # Main HTML (all sections)
├── style.css           # All styles (dark/light theme, animations)
├── script.js           # All JS (theme, typing, navbar, reveal, form)
├── assets/
│   ├── Nausheen_Saifi_CV.pdf   ← Replace with your real CV
│   └── preview.png             ← Add a screenshot for README
└── README.md
```

---

## 🛠️ Tech Stack

| Layer      | Technology                         |
|------------|-------------------------------------|
| Markup     | HTML5 (semantic, SEO-friendly)     |
| Styles     | CSS3 Custom Properties + Tailwind CDN |
| Scripts    | Vanilla JavaScript ES6+            |
| Fonts      | Syne (display) + DM Sans (body)    |
| Deployment | GitHub Pages                       |

---

## ▶️ Run Locally

### Option A — Just open the file
```bash
# Clone the repo
git clone https://github.com/YOUR_GITHUB_USERNAME/nausheen-portfolio.git
cd nausheen-portfolio

# Open directly in browser
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

### Option B — VS Code Live Server (recommended)
1. Open folder in **VS Code**
2. Install **Live Server** extension (Ritwick Dey)
3. Right-click `index.html` → **Open with Live Server**
4. Auto-refreshes on every save ✓

---

## 🔧 Customise

Search for these placeholders and replace them with your real values:

| Placeholder                    | Replace with                        |
|--------------------------------|--------------------------------------|
| `YOUR_GITHUB_USERNAME`         | Your GitHub username                 |
| `YOUR_LINKEDIN_URL`            | Your LinkedIn profile path           |
| `YOUR_EMAIL@gmail.com`         | Your email address                   |
| `YOUR_LIVE_DEMO_LINK.com`      | Live URL of each project             |
| `assets/Nausheen_Saifi_CV.pdf` | Your actual CV file                  |

---

## 📬 Enable Contact Form (EmailJS – free)

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Add a **Gmail** or **Outlook** service
3. Create an **Email Template** with variables `{{name}}`, `{{email}}`, `{{message}}`
4. In `script.js`, replace the `setTimeout` block in `handleFormSubmit()` with:

```js
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', { name, email, message })
  .then(() => {
    showFeedback(feedback, 'success', '✓ Sent! I\'ll reply soon.');
  });
```

5. Add the EmailJS SDK before `</body>` in `index.html`:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
<script>emailjs.init('YOUR_PUBLIC_KEY');</script>
```

---

## 🚢 Deploy to GitHub Pages (Free Hosting)

```bash
# 1. Initialise git & push
git init
git add .
git commit -m "feat: initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/nausheen-portfolio.git
git push -u origin main

# 2. Enable GitHub Pages
# → Go to repo Settings → Pages
# → Source: Deploy from branch → main / (root)
# → Save → your site is live at:
#   https://YOUR_GITHUB_USERNAME.github.io/nausheen-portfolio
```

---

## 📁 Recommended GitHub Repo Name

```
nausheen-portfolio
```

---

## 📄 License

MIT — free to use and modify.

---

*Built with ♥ by Nausheen Saifi · New Delhi, India*
