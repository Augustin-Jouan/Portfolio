

// <!-- js pour l'apparition du form -->
const btn = document.getElementById("btn");
const form = document.getElementById("form");
btn.addEventListener("click", () => {
    form.classList.toggle('translate-x-[calc(100%+5rem)]');

})

// <!-- js pour le "en savoir plus" de mes card bio -->

const buttons = document.querySelectorAll('.expand-btn');
const cards = document.querySelectorAll('.card');

buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const card = cards[index];
        const isExpanded = btn.textContent === "Retour";

        if (!isExpanded) {
            cards.forEach((c, i) => {
            if (i !== index) {
                c.style.display = 'none';
            }
            });
            card.classList.add('col-span-1', 'sm:col-span-2', 'lg:col-span-3');
            btn.textContent = "Retour"; 
        } else {
            cards.forEach((c) => {
            c.style.display = 'block'; 
            c.classList.remove('col-span-1', 'sm:col-span-2', 'lg:col-span-3'); 
            });
            btn.textContent = "En savoir plus";
        }
    });
});
