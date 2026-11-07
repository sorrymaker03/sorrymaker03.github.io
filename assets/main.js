(() => {
  'use strict';
  const menu = document.querySelector('.nav-links');
  const menuButton = document.querySelector('.nav-toggle');
  function closeMenu() {
    menu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  }
  menuButton.addEventListener('click', () => {
    const open = !menu.classList.contains('open');
    menu.classList.toggle('open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  const filters = [...document.querySelectorAll('.filter')];
  const publications = [...document.querySelectorAll('.publication')];
  const search = document.querySelector('#publication-search');
  const count = document.querySelector('#publication-count');
  const empty = document.querySelector('#publication-empty');
  let category = 'all';
  function updatePublications() {
    const query = search.value.trim().toLocaleLowerCase();
    let shown = 0;
    publications.forEach(publication => {
      const visible = (category === 'all' || publication.dataset.category === category)
        && (!query || publication.textContent.toLocaleLowerCase().includes(query));
      publication.hidden = !visible;
      if (visible) shown += 1;
    });
    count.textContent = `${shown} of ${publications.length} publications`;
    empty.hidden = shown !== 0;
  }
  filters.forEach(filter => filter.addEventListener('click', () => {
    category = filter.dataset.filter;
    filters.forEach(button => button.setAttribute('aria-pressed', String(button === filter)));
    updatePublications();
  }));
  search.addEventListener('input', updatePublications);
  const copyButton = document.querySelector('.copy-email');
  const toast = document.querySelector('.toast');
  let toastTimer;
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('mingke4653@gmail.com');
      toast.textContent = 'Email address copied';
    } catch {
      toast.textContent = 'Email: mingke4653@gmail.com';
    }
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3500);
  });
  updatePublications();
})();
