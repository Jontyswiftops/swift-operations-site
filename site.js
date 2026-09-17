(function () {
  var t = document.querySelector('.nav-toggle'), l = document.querySelector('.nav-links');
  if (t && l) t.addEventListener('click', function () { l.classList.toggle('open'); });
  var here = location.pathname.replace(/\/index\.html$/, '/').replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = a.getAttribute('href').replace(/\/$/, '') || '/';
    if (href === here || (href !== '/' && here.indexOf(href) === 0)) a.classList.add('active');
  });
})();
