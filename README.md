# The Pittsburgh Compact

A public accountability campaign documenting Pennsylvania's innovation funding crisis and proposing a 75% direct-to-founder disbursement mandate for state innovation appropriations.

## Campaign Overview

In FY2025, Innovation Works — southwestern Pennsylvania's Ben Franklin Technology Partners regional center — disbursed only **25 cents** of every state innovation dollar directly to founders, down from 42 cents in FY2023. This is not a Pennsylvania anomaly: JumpStart Inc., Ohio's equivalent intermediary, operates at approximately **21 cents** on the dollar.

This website archives the forensic analysis, reform framework, and public campaign timeline.

## Repository Structure

```
pittsburgh-compact/
├── index.html          Homepage with executive summary
├── posts.html          Chronological LinkedIn embeds
├── methodology.html    Direct Capital Ratio explanation
├── reform.html         75% mandate and Pittsburgh Compact details
├── style.css           Site styling (Garamond, clean layout)
└── README.md           This file
```

## Deployment Instructions

### Option 1: GitHub Pages (Recommended)

1. **Create GitHub repository:**
   - Go to github.com and create a new repository named `pittsburgh-compact`
   - Initialize with README (or skip if you're pushing this existing repo)

2. **Upload files:**
   - Upload all files from this directory to your repository
   - Or use command line:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git remote add origin https://github.com/YOUR-USERNAME/pittsburgh-compact.git
     git push -u origin main
     ```

3. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Under "Source," select `main` branch and `/ (root)` folder
   - Click Save
   - Your site will be live at: `https://YOUR-USERNAME.github.io/pittsburgh-compact/`

4. **Add LinkedIn embeds:**
   - For each LinkedIn post you want to include:
     - Go to the post on LinkedIn
     - Click "⋯" (three dots) → "Embed"
     - Copy the embed code
     - Open `posts.html` in a text editor
     - Find the placeholder comments and replace them with your embed codes
   - Commit and push changes to update the live site

### Option 2: Custom Domain (Optional)

If you want to use `pittsburghcompact.org` or another custom domain:

1. Purchase domain from a registrar (Namecheap, Google Domains, etc.)
2. In your GitHub repository:
   - Go to Settings → Pages
   - Under "Custom domain," enter your domain
   - Follow DNS configuration instructions
3. Add a `CNAME` file to the repository with your domain name

## Updating Content

### Adding new posts:

1. Get LinkedIn embed code
2. Open `posts.html`
3. Copy the existing post structure:
   ```html
   <article class="post">
       <div class="post-header">
           <h3 class="post-date">Date</h3>
           <p class="post-context">Context note</p>
       </div>
       <div class="linkedin-embed">
           [EMBED CODE HERE]
       </div>
   </article>
   <hr class="post-divider">
   ```
4. Commit and push

### Updating methodology data:

Edit `methodology.html` to add new state comparisons as you complete the Rust Belt analysis.

## Contact

Campaign led by Ajmail Chaudhry | Pittsburgh, PA

## License

All content is publicly available for transparency and verification purposes. Source documents (990s, single audits) are public records. Forensic methodology is open for replication by other states and regions.
