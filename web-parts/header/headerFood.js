

// header.js
const headerSection = document.getElementById('header-section');
function loadHeader() {
    try {
    
    // Load the CSS dynamically
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = ".././web-parts/header/header.css" // Path to the CSS file
    document.head.appendChild(link);

    console.log("LoadHeader Function trying to do it's job");
    // Return the footer HTML structure
    return `
    <header class="header">
        <img src="../images/toWEBP/nectar-removebg-preview.webp" alt="Logo" id="homelogo" width="65px" onclick="location.href='../index.html'">
        <h2 id="user-greeting"></h2>
        <nav class="navbar">
            <a href="cart.html" class="cart-label">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" class="icon-cart" style="width: 25px; height: 25px; vertical-align: middle;">
                    <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 
                        14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 
                        2.1-4.684 2.924-7.138a60.114 60.114 0 0 
                        0-16.536-1.84M7.5 14.25 5.106 5.272M6 
                        20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 
                        1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 
                        .75.75 0 0 1 1.5 0Z" />
                </svg>
                <span class="cart-count-text">(0)</span>
            </a>
            <a href="../menu.html">Menu</a>
            <a href="../about.html">About</a>
            <a href="../reservation.html">Reservation</a>
            <a href="../reference.html">Reference Page</a>
            <a onclick="direct()" style="cursor: pointer;">Profile</a>
        </nav>
        <div class="menuicon" onclick="move();">
			<div class="bar1"></div>
  			<div class="bar2"></div>
  			<div class="bar3"></div>
   		</div>
        <div id="mySidenav" class="sidenav">
           <a href="cart.html" class="cart-label">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" class="icon-cart" style="width: 25px; height: 25px; vertical-align: middle;">
                    <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 
                        14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 
                        2.1-4.684 2.924-7.138a60.114 60.114 0 0 
                        0-16.536-1.84M7.5 14.25 5.106 5.272M6 
                        20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 
                        1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 
                        .75.75 0 0 1 1.5 0Z" />
                </svg>
                <span class="cart-count-text">(0)</span>
            </a>
            <a href="../index.html">Home</a>
            <a href="../menu.html">Menu</a>
            <a href="../about.html">About</a>
            <a href="../contact.html">Contact</a>
            <a href="../reservation.html">Reservations</a>
            <a href="../reference.html">Reference Page</a>
            <a onclick="direct()" style="cursor: pointer;">Profile</a>
            <a href="careers.html">Careers</a>
        </div>
    </header>
    <div class="loader"></div>
    `;
    }
    catch (error) {
        console.log("Header Failed to load", error);
    }
}


function writeUserGreeting() {
    if (localStorage.getItem("sessionUser")) {
        const sessionUser = JSON.parse(localStorage.getItem("sessionUser"));
        const userGreeting = document.getElementById("user-greeting");
        userGreeting.textContent = `Welcome, ${sessionUser.username}!`;
        console.log("Session user found:", sessionUser);
    }
    else {
        console.log("No session user found.");
    }
}

function direct() {
    if (localStorage.getItem("sessionUser")) {
        location.href = "../profile.html";
    }
    else {
        location.href = "../login.html";
    }
}

headerSection.innerHTML = loadHeader();
writeUserGreeting();

function move() {
    const sidenav = document.getElementById("mySidenav");
    const menuicon = document.querySelector(".menuicon");
    
    if (sidenav.classList.contains("open")) {
        menuicon.classList.toggle("change");
        sidenav.classList.remove("open");
    } else {
        sidenav.classList.add("open");
        menuicon.classList.toggle("change");
    }
}

//head append
function appendHead() {
    const head = document.getElementById('head-section');
    head.innerHTML += `
    <link rel="shortcut icon" type="image/x-icon" href="../images/toWEBP/nectar-removebg-preview.webp" />
    `;
}
appendHead();