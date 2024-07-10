var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

var typed = new Typed('#element', {
    strings: ['Web Developer', 'Graphic Designer', 'Web Designer', 'Video Editor'],
    typeSpeed: 100, 
    backDelay: 2000,
});

var icon = document.getElementById("icon");
icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "images/sun.jpeg";
        logo.src = "images/logo2.jpg";
    } else {
        icon.src = "images/moon.jpeg";
        logo.src = "images/logo1.jpg";
    }
}
