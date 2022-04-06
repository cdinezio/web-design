const menuItem = document.querySelectorAll(".menu-item");

menuItem.forEach(link => {
    link.addEventListener("click", activateLink)
});

function activateLink(e) {
    menuItem.forEach(link => {
        link.classList.remove("active-link")
    });
    const item = e.target;
    item.classList.toggle("active-link");
}