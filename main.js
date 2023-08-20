import "./sass/style.scss"
const searchIcon=document.querySelector("#searchIcon")
const pcIcon=document.querySelector("#pcIcon")
const searchResult=document.querySelector("#searchResult")
const input=document.querySelector("#input")
const navIcon=document.querySelector("#navIcon")
const navLinks=document.querySelector("#navLinks")

pcIcon.addEventListener("click",()=>{
    searchResult.classList.toggle('active')
    console.log("pc icon active");
})
searchIcon.addEventListener('click',()=>{
    searchIcon.classList.toggle("active")
})
input.addEventListener('click',()=>{
    searchIcon.classList.toggle("active")
})
navIcon.addEventListener('click',()=>{
    navLinks.classList.toggle("active")
})