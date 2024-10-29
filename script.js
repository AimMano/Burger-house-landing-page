const menuBtn=document.getElementById("menu_btn");
const navLinks=document.getElementById("nav_links");
const btnIcon=menuBtn.querySelector("i");

menuBtn.addEventListener("click",(e)=>{
    navLinks.classList.toggle("open");
    const isopen=navLinks.classList.contains("open");
    btnIcon.setAttribute("class", isopen ? "ri-close-line" : "ri-menu-line");

})

gsap.from(".Animate h1",{
    x:150,
    duration:2,
    delay:1,
    opacity:0
})  ;
gsap.from(".Animate p",{
    x:-150,
    duration:2,
    opacity:0,
    delay:1
})
const scrollRevealOption={
    distance:"50px",
    origin: "bottom",
    duration:1000,
};
ScrollReveal().reveal(".header_image img",{
    ...scrollRevealOption,
    origin:"right",
});
ScrollReveal().reveal(".header_content h2",{
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal(".header_content h1",{
    ...scrollRevealOption,
    delay:1000,
});
ScrollReveal().reveal(".order_card",{
    ...scrollRevealOption,
    interval: 500,
});
ScrollReveal().reveal(".event_content",{
    duration: 1000,
});

    
