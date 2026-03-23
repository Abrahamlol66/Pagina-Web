// Interacciones para la página de servicios
document.querySelectorAll('.plan').forEach(plan => {
plan.addEventListener('mouseenter', () => {
if (!plan.classList.contains('destacado')) {
plan.style.transform = 'translateY(-5px)';
}
});
plan.addEventListener('mouseleave', () => {
if (!plan.classList.contains('destacado')) {
plan.style.transform = 'translateY(0)';
}
});
});
