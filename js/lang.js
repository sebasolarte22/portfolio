(function () {
  var STORAGE_KEY = 'portfolio-lang';
  var DEFAULT_LANG = 'en';

  function getSavedLang() {
    try {
      return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    } catch (e) {
      return DEFAULT_LANG;
    }
  }

  function saveLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }

  function applyLang(lang) {
    var sections = document.querySelectorAll('.lang');
    sections.forEach(function (section) {
      section.classList.remove('active');
    });

    var activeSection = document.querySelector('.lang-' + lang);
    if (activeSection) {
      activeSection.classList.add('active');
    }

    var buttons = document.querySelectorAll('[data-lang]');
    buttons.forEach(function (btn) {
      btn.classList.remove('active');
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      }
    });
  }

  function init() {
    var lang = getSavedLang();
    applyLang(lang);

    var buttons = document.querySelectorAll('[data-lang]');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var selected = btn.getAttribute('data-lang');
        saveLang(selected);
        applyLang(selected);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
