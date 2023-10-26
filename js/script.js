let preloader = document.querySelector('.preloader');
window.addEventListener('load', function() {
    preloader.classList.add('fade-out-animation');

    preloader.addEventListener("transitionend", () =>{
        document.body.removeChild(document.querySelector(".preloader"));
    });
});


let navbar = document.querySelector('.menu-box');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}

function show() {
    var pswrd = document.getElementById('pswrd');
    var icon = document.querySelector('.fas');
    if (pswrd.type == "password") {
        pswrd.type = "text";
        pswrd.style.marginTop = "0px";
        icon.style.color = "#74ce0e";
    }else {
        pswrd.type = "password";
        icon.style.color = "grey";
    }
}