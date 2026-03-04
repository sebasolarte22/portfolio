const buttons = document.querySelectorAll("[data-lang]");
const sections = document.querySelectorAll(".lang");

buttons.forEach(btn => {
btn.addEventListener("click", () => {
const lang = btn.dataset.lang;
sections.forEach(section => section.classList.remove("active"));
document.querySelector(`.lang-${lang}`).classList.add("active");
});
});
