document.addEventListener('DOMContentLoaded', function () {
  // Menu mobile
  var toggle = document.querySelector('.nav-toggle');
  var closeBtn = document.querySelector('.nav-close');
  var navLinks = document.querySelector('.nav-links');
  var links = navLinks ? navLinks.querySelectorAll('a') : [];

  function openMenu() {
    navLinks.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    navLinks.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      if (navLinks.classList.contains('is-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMenu);
  }

  links.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Formulário de voluntariado
  var form = document.getElementById('volunteer-form');
  var successMsg = document.getElementById('form-success');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      if (successMsg) {
        successMsg.classList.add('is-visible');
        successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
        successMsg.focus({ preventScroll: true });
      }

      form.reset();
    });
  }

  // Ano atual no rodapé
  var yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
