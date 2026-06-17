document.addEventListener('DOMContentLoaded', function () {
  Promise.all([
    fetch('header.html').then(r => r.text()),
    fetch('footer.html').then(r => r.text())
  ]).then(([headerHTML, footerHTML]) => {
    document.getElementById('header-placeholder').innerHTML = headerHTML;
    document.getElementById('footer-placeholder').innerHTML = footerHTML;

    var script = document.createElement('script');
    script.src = 'js/main.js';
    document.body.appendChild(script);
  });
});