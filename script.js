function showView(id) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));

  const target = document.getElementById(id);
  if (target) target.classList.add('active');

  document.querySelectorAll('nav a').forEach(a => {
    a.classList.toggle('active', a.dataset.view === id);
  });

  window.scrollTo({ top: 0 });
}

document.querySelectorAll('nav a').forEach(a => {
  a.addEventListener('click', e => e.preventDefault());
});