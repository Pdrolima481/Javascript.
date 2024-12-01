const scrollRevealOption={
    distance:"50px",
    origin:"bottom",
    duration:1000,
};
ScrollReveal().reveal(".container .letter-t",{
    duration:1000,
    delay:1500,
})
ScrollReveal().reveal(".container .text_left",{
    ...scrollRevealOption,
    origin:"right",
    delay:2000,
})
ScrollReveal().reveal(".container .text_right",{
    ...scrollRevealOption,
    origin:"left",
    delay:2000,
})
ScrollReveal().reveal(".container .explore",{
    duration:1000,
    delay:2500,
})
ScrollReveal().reveal(".container h5",{
    duration:1000,
    interval:500,
    delay:3000,
});
ScrollReveal().reveal(".footer p",{
    duration:1000,
    delay:7000,
});