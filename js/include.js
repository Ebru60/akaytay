window.addEventListener("DOMContentLoaded", () => {
  includeHTML("navbar", "../components/navbar.html");
  includeHTML("footer", "../components/footer.html");
});

function includeHTML(id, file) {
  const element = document.getElementById(id);
  if (!element) return;
  fetch(file)
    .then(response => response.text())
    .then(data => {
      element.innerHTML = data;
    })
    .catch(error => {
      console.warn("Yükleme hatası:", error);
    });
}
