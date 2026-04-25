// nav.js — Pittsburgh Compact shared navigation
// Drop this file in the root of your repo.
// Then in every HTML page: remove the existing <nav> block and add
// <script src="nav.js"></script> in its place (or at top of <body>).

(function () {
  const links = [
    { label: 'Home',         href: 'index.html' },
    { label: 'Posts',        href: 'posts.html' },
    { label: 'NFL Draft',    href: 'nfl-draft-scorecard.html' },
    { label: 'Methodology',  href: 'methodology.html' },
    { label: 'Reform',       href: 'reform.html' },
    { label: 'Soundtrack',   href: 'soundtrack.html' },
  ];

  // Detect current page so we can mark it active
  const current = window.location.pathname.split('/').pop() || 'index.html';

  const navHTML = `
<nav style="
  border-bottom: 1px solid #dddbd4;
  background: #ffffff;
  padding: 0 2rem;
  font-family: 'DM Sans', sans-serif;
">
  <div style="
    max-width: 860px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 56px;
  ">
    <a href="index.html" style="
      font-family: 'Bebas Neue', sans-serif;
      font-size: 20px;
      letter-spacing: 0.05em;
      color: #1a1a18;
      text-decoration: none;
    "># The Pittsburgh Compact</a>

    <ul style="
      display: flex;
      gap: 1.5rem;
      list-style: none;
      margin: 0;
      padding: 0;
      flex-wrap: wrap;
    ">
      ${links.map(l => {
        const isActive = current === l.href;
        return `<li><a href="${l.href}" style="
          font-size: 13px;
          color: ${isActive ? '#1a1a18' : '#5F5E5A'};
          text-decoration: none;
          font-weight: ${isActive ? '500' : '400'};
          letter-spacing: 0.02em;
          border-bottom: ${isActive ? '1.5px solid #1a1a18' : 'none'};
          padding-bottom: 2px;
        ">${l.label}</a></li>`;
      }).join('\n')}
    </ul>
  </div>
</nav>`;

  // Insert nav as first element in body
  document.body.insertAdjacentHTML('afterbegin', navHTML);
})();
