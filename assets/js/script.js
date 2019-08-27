const homeBtn = document.querySelector(".btn-Homepage");
const aboutBtn = document.querySelector(".btn-About");
const servicesBtn = document.querySelector(".btn-Services");
const contactBtn = document.querySelector(".btn-Contact");

homeBtn.addEventListener("click" , ()=>{
    window.scrollTo({
        left:0,
        top:0,
        behavior:"smooth"
    })
})

aboutBtn.addEventListener("click" , ()=>{
    window.scrollTo({
        left:0,
        top:450,
        behavior:"smooth"
    })
})

servicesBtn.addEventListener("click" , ()=>{
    window.scrollTo({
        left:0,
        top:1195,
        behavior:"smooth"
    })
})


contactBtn.addEventListener("click" , ()=>{
    window.scrollTo({
        left:0,
        top:2445,
        behavior:"smooth"
    })
})


