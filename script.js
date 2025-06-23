const link = document.getElementById("hover-link");
const boldWords = document.querySelectorAll("strong");

// On mouse over the <a> tag
link.addEventListener("mouseover", () => {
  boldWords.forEach(word => {
    word.style.color = "green";
  });
});

// On mouse out from the <a> tag
link.addEventListener("mouseout", () => {
  boldWords.forEach(word => {
    word.style.color = "black";
  });
});
