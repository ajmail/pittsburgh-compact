(function () {
  const links = [
    { label: 'Home',        href: 'index.html' },
    { label: 'Posts',       href: 'posts.html' },
    { label: 'NFL Draft',   href: 'nfl-draft-scorecard.html' },
    { label: 'Methodology', href: 'methodology.html' },
    { label: 'Reform',      href: 'reform.html' },
    { label: 'Soundtrack',  href: 'soundtrack.html' },
  ];

  const current = window.location.pathname.split('/').pop() || 'index.html';

  const items = links.map(l => {
    const active = current === l.href;
    return `<li><a href="${l.href}"${active ? ' class="active"' : ''}>${l.label}</a></li>`;
  }).join('\n        ');

  const nav = `<nav>
  <div class="nav-container">
    <h1 class="site-title">The Pittsburgh Compact</h1>
    <ul class="nav-links">
        ${items}
    </ul>
  </div>
</nav>`;

  document.body.insertAdjacentHTML('afterbegin', nav);
})();
