// Animación de números al hacer scroll
const stats = document.querySelectorAll('.stat-num');
let started = false;

function startCount() {
stats.forEach(stat => {
const target = +stat.dataset.target;
const duration = 2000;
const step = target / (duration / 16);
let current = 0;
const timer = setInterval(() => {
current += step;
if (current >= target) {
stat.textContent = target;
clearInterval(timer);
} else {
stat.textContent = Math.floor(current);
}
}, 16);
});
}

const observer = new IntersectionObserver((entries) => {
if (entries[0].isIntersecting && !started) {
startCount();
started = true;
}
});

if(document.querySelector('.stats-grid')) {
observer.observe(document.querySelector('.stats-grid'));
}
