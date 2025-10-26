

// <!-- js pour l'apparition du form -->
const btn = document.getElementById("btn");
const form = document.getElementById("form");
btn.addEventListener("click", () => {
    form.classList.toggle('translate-x-[120%]');

})

// <!-- js pour l'apparition des liens resaux -->
const btn2 = document.getElementById("btn2");
const link = document.getElementById("links");
btn2.addEventListener("click", () => {
    link.classList.toggle('translate-y-[120%]');

})

// ici je gère les botons pour afficher/enlever les grandes cartes
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
