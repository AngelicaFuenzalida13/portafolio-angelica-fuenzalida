const filters = document.querySelectorAll("[data-filter]");
const cards = document.querySelectorAll(".project-card");
const count = document.querySelector(".project-count");

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    let visible = 0;

    cards.forEach((card) => {
      const show = filter === "todos" || card.dataset.category === filter;
      card.hidden = !show;
      card.classList.remove("is-open");
      card.querySelector(".project-summary").setAttribute("aria-expanded", "false");
      card.querySelector(".project-arrow").textContent = "↗";
      if (show) visible += 1;
    });

    count.textContent = `${String(visible).padStart(2, "0")} proyectos`;
  });
});

document.querySelectorAll(".project-summary").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".project-card");
    const opening = !card.classList.contains("is-open");
    card.classList.toggle("is-open", opening);
    button.setAttribute("aria-expanded", String(opening));
    button.querySelector(".project-arrow").textContent = opening ? "×" : "↗";
  });
});
