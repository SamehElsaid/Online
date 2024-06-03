// Menu toggle for mobile view
let menu = document.querySelector(".menu");
menu.addEventListener("click", function () {
    document.querySelector(".links").classList.toggle("active");
    menu.classList.toggle("active");
});

// Theme color and night mode settings
let color = localStorage.getItem("color");
let nightMode = localStorage.getItem("nightMode");
const body = document.querySelector("body");

if (color) {
    document.documentElement.style.setProperty("--dark-orange", color);
}

if (nightMode === "darkMode") {
    body.classList.add("darkMode");
} else {
    body.classList.remove("darkMode");
}

// Scroll effects for header and back-to-top button
let header = document.querySelector("header");
let btnTop = document.querySelector(".topBtn");
window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        header.classList.add("active");
        btnTop.classList.add("active");
    } else {
        header.classList.remove("active");
        btnTop.classList.remove("active");
    }
});

// Search functionality
let searchBtn = document.querySelector(".search i");
let search = document.querySelector(".searchPage");
searchBtn.addEventListener("click", function () {
    search.classList.toggle("active");
});
search.addEventListener("click", function (e) {
    e.target.classList.remove("active");
});

// Navigation color change and night mode toggle
let navBar = document.querySelector(".navColor .afterNa");
let navOpen = document.querySelector(".navColor");
let span = document.querySelectorAll(".navColor .span span");
let night = document.querySelector(".navNight");

navBar.addEventListener("click", function () {
    navOpen.classList.toggle("open");
    night.classList.toggle("open");
    document.querySelector(".navColor i").classList.toggle("fa-spin");
});

span.forEach(function (e) {
    e.addEventListener("click", function () {
        document.documentElement.style.setProperty("--dark-orange", this.dataset.color);
        localStorage.setItem("color", this.dataset.color);
    });
});

night.addEventListener("click", function () {
    body.classList.toggle("darkMode");
    localStorage.setItem("nightMode", body.classList.contains("darkMode") ? "darkMode" : "NotdarkMode");
});

// Text animation for promotional text
let textInnx = document.querySelector(".texttype");
let x = "upper delicious Burger in town!";
let i = 0;

function animation() {
    if (i < x.length) {
        textInnx.innerHTML += x.charAt(i);
        i++;
    } else {
        textInnx.innerHTML = "s";
        i = 0;
    }
    setTimeout(animation, 300);
}
animation();

// Click event to remove image open class
body.addEventListener("click", function (img) {
    img.target.classList.remove("openImg");
    if (img.target.classList.contains("slid")) {
        img.target.parentElement.classList.toggle("openImg");
    }
});

// Loader function to hide loading screen after window load
function loader() {
    document.querySelector(".loading").style.display = "none";
}

function fadeOut() {
    setInterval(loader, 10000);
}

window.onload = fadeOut();
