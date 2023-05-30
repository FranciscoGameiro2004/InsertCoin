const button = document.querySelector("#restart-button");
const bars = document.querySelectorAll(".round-time-bar");
button.addEventListener("click", () => {
  bars.forEach((bar) => {
    bar.classList.remove("round-time-bar");
    bar.offsetWidth;
    bar.classList.add("round-time-bar");
  });
});
