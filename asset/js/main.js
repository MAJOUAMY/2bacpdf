let menu=document.querySelector('.menu')
let navbar=document.querySelector('.navbar')

menu.onclick=()=>{
    menu.classList.toggle("active")
    navbar.classList.toggle("activate")
}
window.addEventListener('scroll',()=>{
    navbar.classList.remove("activate",window.scrollY>0)
    menu.classList.remove("active",window.scrollY>0)
})

// function showLoadingPage() {
//     document.querySelector(".loading").style.display = "block";
//   }

// function hideLoadingPage() {
//     document.querySelector(".loading").style.display = "none";
// }

// window.onload = hideLoadingPage;
// window.onbeforeunload = showLoadingPage;

