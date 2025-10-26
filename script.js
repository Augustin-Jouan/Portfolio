// pour mon form 
const btn = document.getElementById("btn");
const form = document.getElementById("form");
btn.addEventListener("click", () => {
    form.classList.toggle('translate-x-[140%]');
})

// pour mes liens reseaux-sociaux
const btn2 = document.getElementById("btn2");
const link = document.getElementById("links");
btn2.addEventListener("click", () => {
    link.classList.toggle('translate-y-[130%]');
})

// pour les cards bio
const expandButtonsBio = document.querySelectorAll('.expand-btn-bio');
const backButtonsBio = document.querySelectorAll('.back-btn-bio');
const smallCards = document.querySelectorAll('.card');
const bigCards = document.querySelectorAll('.big-card');

expandButtonsBio.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target;
    smallCards.forEach(c => c.classList.add('hidden'));
    document.getElementById(`big-${target}`).classList.remove('hidden');
  });
});

backButtonsBio.forEach(btn => {
  btn.addEventListener('click', () => {
    bigCards.forEach(c => c.classList.add('hidden'));
    smallCards.forEach(c => c.classList.remove('hidden'));
  });
});

// pour les cards projets
const expandButtonsProject = document.querySelectorAll('.expand-btn-project');
const backButtonsProject = document.querySelectorAll('.back-btn-project');
const projectsGrid = document.getElementById('projects-grid');
const bigProjectsContainer = document.getElementById('big-projects-container');
const bigProjectCards = document.querySelectorAll('.big-project');

expandButtonsProject.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    projectsGrid.classList.add('hidden');
    bigProjectsContainer.classList.remove('hidden');
    bigProjectCards.forEach(c => c.classList.add('hidden'));
    bigProjectCards[index].classList.remove('hidden');
  });
});

backButtonsProject.forEach(btn => {
  btn.addEventListener('click', () => {
    bigProjectsContainer.classList.add('hidden');
    projectsGrid.classList.remove('hidden');
  });
});
