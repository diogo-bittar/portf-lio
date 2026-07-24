// Exibe uma seção do portfólio e atualiza o estado visual do menu.
const mostrarView = (id) => {
  document.querySelectorAll('.view').forEach((view) => {
    view.classList.remove('active');
  });

  const alvo = document.getElementById(id);
  if (alvo) {
    alvo.classList.add('active');
  }

  document.querySelectorAll('nav a[data-view]').forEach((link) => {
    link.classList.toggle('active', link.dataset.view === id);
  });
};

// Vincula cada item do menu à mudança de seção.
document.querySelectorAll('nav a[data-view]').forEach((link) => {
  link.addEventListener('click', (evento) => {
    evento.preventDefault();
    const viewId = link.dataset.view;

    if (viewId) {
      mostrarView(viewId);
    }
  });
});

// Inicializa a página com a seção inicial ativa.
document.addEventListener('DOMContentLoaded', () => {
  mostrarView('home');
});