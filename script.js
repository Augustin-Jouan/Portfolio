

// <!-- js pour l'apparition du form -->
const btn = document.getElementById("btn");
const form = document.getElementById("form");
btn.addEventListener("click", () => {
    form.classList.toggle('translate-x-[140%]');

})

// <!-- js pour l'apparition des liens resaux -->
const btn2 = document.getElementById("btn2");
const link = document.getElementById("links");
btn2.addEventListener("click", () => {
    link.classList.toggle('translate-y-[130%]');

})

// ici je gère les botons pour afficher/enlever les cards de ma bio
const expandButtons = document.querySelectorAll('.expand-btn');
const backButtons = document.querySelectorAll('.back-btn');
const smallCards = document.querySelectorAll('.card');
const bigCards = document.querySelectorAll('.big-card');

expandButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target;
    smallCards.forEach(c => c.classList.add('hidden')); // cache toutes les petites
    document.getElementById(`big-${target}`).classList.remove('hidden'); // montre la bonne grande
  });
});

backButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    bigCards.forEach(c => c.classList.add('hidden')); // cache toutes les grandes
    smallCards.forEach(c => c.classList.remove('hidden')); // réaffiche les petites
  });
});

// ici je gère les botons pour afficher/enlever les cards de mes projets

const projectBtns = document.querySelectorAll('.project-btn');
const backProjectBtns = document.querySelectorAll('.back-project');
const smallProjects = document.querySelectorAll('.project-card');
const bigProjects = document.querySelectorAll('.big-project');

projectBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target;
    smallProjects.forEach(p => p.classList.add('hidden'));
    document.getElementById(`big-${target}`).classList.remove('hidden');
  });
});

backProjectBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    bigProjects.forEach(p => p.classList.add('hidden'));
    smallProjects.forEach(p => p.classList.remove('hidden'));
  });
});
