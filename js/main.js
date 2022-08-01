let menu = document.querySelector(".menu")
menu.addEventListener("click", function (e) {
    document.querySelector(".links").classList.toggle("active")
})
// 
let color = localStorage.getItem("color")
let linksG = document.querySelectorAll(".LinksFoof ul li")
let linksGsa = document.querySelectorAll(".LinksFoof ul li a")
// 
if (color !== null) {
    document.documentElement.style.setProperty("--dark-orange", color)
} else if (color == "undefined") {
}
let nightlocal = localStorage.getItem("nightMode")
if (nightlocal === "darkMode") {
    let body = document.querySelector("body")
    body.classList.add("darkMode")
} else {
    let body = document.querySelector("body")
    body.classList.remove("darkMode")
}
menu.addEventListener("click", function (e) {
    menu.classList.toggle("active")
})

let header = document.querySelector("header")
let btnTop = document.querySelector(".topBtn")
window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        header.classList.add("active")
        btnTop.classList.add("active")
    } else {
        btnTop.classList.remove("active")
        header.classList.remove("active")
    }
})
// 
let searchBtn = document.querySelector(".search i")
let search = document.querySelector(".searchPage")
searchBtn.addEventListener("click", function () {
    search.classList.toggle("active")
})
search.addEventListener("click", function (e) {
    e.target.classList.remove("active")
})


linksG.forEach(function (e) {
    e.addEventListener("click", function () {
        linksG.forEach(function (s) {
            s.classList.remove("active");
        })
        this.classList.add("active")

    })
})

let navBar = document.querySelector(".navColor .afterNa")
let navOpen = document.querySelector(".navColor")
let span = document.querySelectorAll(".navColor .span span")
let night = document.querySelector(".navNight")
let body = document.querySelector("body")
navBar.addEventListener("click", function () {
    navOpen.classList.toggle("open")
    night.classList.toggle("open")
    document.querySelector(".navColor i").classList.toggle("fa-spin")
})

span.forEach(function (e) {
    e.addEventListener("click", function (s) {
        document.documentElement.style.setProperty("--dark-orange", this.dataset.color)
        console.log(this)
        localStorage.setItem("color", this.dataset.color)
    })
})

night.addEventListener("click", function () {

    body.classList.toggle("darkMode")
    if (body.className === "darkMode") {
        localStorage.setItem("nightMode", "darkMode")
    } else {
        console.log("NotdarkMode")
        localStorage.setItem("nightMode", "NotdarkMode")

    }
})
let textInnx = document.querySelector(".texttype")
let se = document.querySelector(".textAbout h2")
let x = "Supper delicious Burger in town!"
let i = 0
function animation() {
    if (i < x.length) {
        textInnx.innerHTML += x.charAt(i)
        i++

    } else {
        textInnx.innerHTML = ""
        i = -1
        i++
    }
    setTimeout(animation, 300)
}
animation()


body.addEventListener("click", function (img) {
    img.target.classList.remove("openImg")

    if (img.target.classList == "slid") {
        img.target.parentElement.classList.toggle("openImg")

    }
})



function loader(){
    document.querySelector(".loading").style.display ="none"
}
function fadeOut(){
    setInterval(loader ,10000)
}

window.onload = fadeOut()