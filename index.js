const buttons = document.querySelectorAll(".toggle-description");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const card = button.parentElement;
    card.classList.toggle("show-description");
  });
});
