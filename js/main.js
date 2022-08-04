// 
function side_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("bars").style.display = "none";
    document.getElementById("cross").style.display = "block";
}
function side_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("bars").style.display = "block";
    document.getElementById("cross").style.display = "none";
}

// 
// Navbar
const navbar = document.querySelector('.header');
// Logo
const logoOne = document.querySelector('.logo-one');
const logoTwo = document.querySelector('.logo-two');
// Anchors
const navbarAnchors = document.querySelector('.navbar-anchors');
// Bars
const bar = document.querySelector('#bars');
const cross = document.querySelector('#cross');
// Arrow
const arrow = document.querySelector('.arrow');
//
const host = "https://snazzy-babka-e25725.netlify.app/";
const localhost = "http://127.0.0.1:5500/index.html";
if ((window.location.href == host + 'index.html') || (window.location.href == host) || (window.location.href == localhost)) {
    window.onscroll = () => {
        if (window.scrollY > 100) {
            // Navbar
            navbar.classList.add('nav-active');
            // Logo
            logoOne.classList.add('display-none');
            logoTwo.classList.remove('display-none');
            // Anchors
            navbarAnchors.classList.add('navbar-anchors-active');
            // button-bars
            bar.classList.add('button-active');
            cross.classList.add('button-active');
            // Arrow
            arrow.classList.add('arrow-hide');
        } else {
            // Navbar
            navbar.classList.remove('nav-active');
            // Logo
            logoTwo.classList.add('display-none');
            logoOne.classList.remove('display-none');
            // Anchors
            navbarAnchors.classList.remove('navbar-anchors-active');
            // button-bars
            bar.classList.remove('button-active');
            cross.classList.remove('button-active');
            // Arrow
            arrow.classList.remove('arrow-hide');
        }
    };
} else {
    // Navbar
    navbar.classList.add('nav-active');
    // Logo
    logoOne.classList.add('display-none');
    logoTwo.classList.remove('display-none');
    // Anchors
    navbarAnchors.classList.add('navbar-anchors-active');
    // button-bars
    bar.classList.add('button-active');
    cross.classList.add('button-active');
}

// LeaftletJS Map
var map = L.map('map').setView([-34.7217851, -58.3744177], 16);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map); 
var marker = L.marker([-34.7217851, -58.3744177]).addTo(map);
marker.bindPopup("<b class='leafletb'>Direccion</b><br>Pepe 123454").openPopup();



