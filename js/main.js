const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  if (card.classList.contains("new")) {
    const p = document.createElement("p");
    p.classList = "bg-primary position-absolute text-white py-1 px-3";
    p.innerHTML = "Nwe";
    card.append(p);
  }
});
