/**
 * Site-wide shared components
 * Injects navigation, page header, and handles nav behavior
 */

(function() {
  'use strict';

  // Site configuration
  const SITE_TITLE = 'Mariya Osadchaya';

  const NAV_LINKS = [
    { href: 'index.html', label: 'About' },
    { href: 'curriculum.html', label: 'Curriculum Vitae' },
    { href: 'preoccupations.html', label: 'Preoccupations' },
    { href: 'manifesto.html', label: 'Manifesto' },
    { href: 'reading.html', label: 'Book In Hand' },
    { href: 'correspondence.html', label: 'Correspondence' }
  ];

  // Get current page info from data attributes on body
  const body = document.body;
  const pageNumber = body.dataset.page || '1';
  const activePage = body.dataset.active || '';
  const nextPage = body.dataset.next || '';
  const navOpen = body.dataset.navOpen === 'true';

  // Build navigation HTML
  function buildNavLinks() {
    return NAV_LINKS.map(link => {
      const isActive = link.href === activePage ? ' class="active"' : '';
      return `<li><a href="${link.href}"${isActive}>${link.label}</a></li>`;
    }).join('\n        ');
  }

  // Inject navigation overlay
  function injectNav() {
    const navHTML = `
  <nav class="nav-overlay${navOpen ? '' : ' collapsed'}" role="navigation">
    <div class="nav-content">
      <ul class="nav-list">
        ${buildNavLinks()}
      </ul>
      <div class="site-title">${SITE_TITLE}</div>
    </div>
  </nav>`;

    body.insertAdjacentHTML('afterbegin', navHTML);
  }

  // Inject page header (page number + menu toggle)
  function injectPageHeader() {
    const page = document.querySelector('.page');
    if (!page) return;

    const headerHTML = `
    <header class="page-header">
      <span></span>
      <button class="menu-toggle" aria-label="Toggle navigation" aria-expanded="${navOpen}">☰</button>
    </header>`;

    page.insertAdjacentHTML('afterbegin', headerHTML);
  }

  // Inject pagination footer
  function injectPagination() {
    const page = document.querySelector('.page');
    if (!page) return;

    const nextLink = nextPage
      ? `<a href="${nextPage}" class="next">→</a>`
      : '<span class="next"></span>';

    const paginationHTML = `
    <footer class="pagination">
      <span class="page-number">${pageNumber}</span>
      ${nextLink}
    </footer>`;

    page.insertAdjacentHTML('beforeend', paginationHTML);
  }

  // Wrap page content in scrollable container
  function wrapPageContent() {
    const page = document.querySelector('.page');
    if (!page) return;

    const header = page.querySelector('.page-header');
    const pagination = page.querySelector('.pagination');

    // Create wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'page-content';

    // Move all children except header and pagination into wrapper
    const children = Array.from(page.children);
    children.forEach(child => {
      if (child !== header && child !== pagination) {
        wrapper.appendChild(child);
      }
    });

    // Insert wrapper after header, before pagination
    if (pagination) {
      page.insertBefore(wrapper, pagination);
    } else {
      page.appendChild(wrapper);
    }
  }

  // Navigation behavior
  function initNav() {
    const overlay = document.querySelector('.nav-overlay');
    const menuToggle = document.querySelector('.menu-toggle');

    if (!overlay || !menuToggle) return;

    function toggleNav() {
      overlay.classList.toggle('collapsed');
      updateToggle();
    }

    function closeNav() {
      overlay.classList.add('collapsed');
      updateToggle();
    }

    function updateToggle() {
      const isCollapsed = overlay.classList.contains('collapsed');
      menuToggle.textContent = isCollapsed ? '☰' : '✕';
      menuToggle.setAttribute('aria-expanded', !isCollapsed);
    }

    // Event listeners
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleNav();
    });

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeNav();
    });

    overlay.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', (e) => {
        // If clicking link to current page, just close nav without navigating
        if (link.classList.contains('active')) {
          e.preventDefault();
        }
        closeNav();
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !overlay.classList.contains('collapsed')) {
        closeNav();
      }
    });

    updateToggle();
  }

  // Handle same-page anchor links within .page-content
  // (default browser behavior scrolls the document, not the overflow container)
  function initAnchorScrolling() {
    const pageContent = document.querySelector('.page-content');
    if (!pageContent) return;

    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      const targetId = link.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (!target || !pageContent.contains(target)) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // Handle in-page anchor scrolling within .page-content
  function initAnchorScrolling() {
    const pageContent = document.querySelector('.page-content');
    if (!pageContent) return;

    document.addEventListener('click', function(e) {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      const targetId = link.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (!target || !pageContent.contains(target)) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // Initialize
  injectNav();
  injectPageHeader();
  injectPagination();
  wrapPageContent();
  initNav();
  initAnchorScrolling();
  initAnchorScrolling();

})();
