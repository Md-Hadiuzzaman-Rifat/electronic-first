// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `
// setupCounter(document.querySelector('#counter')) 


import "./sass/style.scss"
const searchIcon=document.querySelector("#searchIcon")
const pcIcon=document.querySelector("#pcIcon")
const searchResult=document.querySelector("#searchResult")
const input=document.querySelector("#input")
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