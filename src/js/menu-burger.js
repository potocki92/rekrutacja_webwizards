(function () {
    const burger = document.getElementById("menu-toggle")
    const header = document.getElementById("header")
    const nav = document.querySelector(".nav")

    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        header.classList.toggle("show");
        nav.classList.toggle("show");
    })
})()