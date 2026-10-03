let menuBtn = document.getElementById("menuBtn");
let sidebar = document.getElementById("sidebar");
menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    menuBtn.classList.toggle("active");
});