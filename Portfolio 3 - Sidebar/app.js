const menuItem = document.querySelectorAll(".menu-item");
const mainBtn = document.querySelector(".btn-primary");
const sideBar = document.querySelector("aside");
const main = document.querySelector("main");
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");

// Le agrego el event a los links del sidebar
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
// END ////////////////////////////////////


// Agrego el event de sacarle el width en ipad size al hacer click en el main section
main.addEventListener("click",() => {
    sideBar.classList.remove("agrandar")
})
// END ////////////////////////////////////

mobileMenuBtn.addEventListener("click",() => {
    sideBar.classList.toggle("agrandar")
})




// mainBtn.addEventListener("click",() =>{
//     sideBar.classList.toggle("agrandar")
// })