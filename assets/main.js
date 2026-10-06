/* Rocky Hill Community Site — main.js
   Progressive enhancement only. Every page works with this file blocked. */
(function () {
  'use strict';

  var toggle = document.querySelector('.nav-toggle');
  var nav    = document.getElementById('site-nav');

  if (!toggle || !nav) { return; }

  /* Without JS the nav must still be reachable: strip the CSS that hides it. */
  document.documentElement.classList.add('js');

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    nav.classList.toggle('is-open', open);
  }

  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  /* Escape closes the menu and returns focus to the button. */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });

  /* Clicking a link inside the open menu closes it. */
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) { setOpen(false); }
  });

  /* A resize past the mobile breakpoint must reset the state, or the nav
     stays "closed" and invisible once the desktop layout takes over. */
  var mq = window.matchMedia('(min-width: 800px)');
  function onChange(m) { if (m.matches) { setOpen(false); } }
  if (mq.addEventListener) { mq.addEventListener('change', onChange); }
  else if (mq.addListener) { mq.addListener(onChange); }   /* legacy Safari/Edge */
})();
