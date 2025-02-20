

// header.js
const headerSection = document.getElementById('header-section');
function loadHeader() {
    try {
    
    // Load the CSS dynamically
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "./web-parts/header/header.css" // Path to the CSS file
    document.head.appendChild(link);

    console.log("LoadHeader Function trying to do it's job");
    // Return the footer HTML structure
    return `
    <header class="header">
        <img src="images/nectar-removebg-preview.png" alt="Logo" id="homelogo" width="65px" onclick="location.href='index.html'">
        <h2 id="user-greeting"></h2>
        <nav class="navbar">
            <a href="cart.html" id="cart-label">Cart</a>
            <a href="index.html">Home</a>
            <a href="menu.html">Menu</a>
            <a href="about.html">About</a>
            <a href="contact.html">Contact</a>
            <a href="reference.html">Reference Page</a>
            <a onclick="direct()" style="cursor: pointer;">Profile</a>
        </nav>
        <div class="menuicon" onclick="move();">
			<div class="bar1"></div>
  			<div class="bar2"></div>
  			<div class="bar3"></div>
   		</div>
        <div id="mySidenav" class="sidenav">
            <a href="cart.html" id="cart-label">Cart</a>
            <a href="index.html">Home</a>
            <a href="menu.html">Menu</a>
            <a href="about.html">About</a>
            <a href="contact.html">Contact</a>
            <a href="reference.html">Reference Page</a>
            <a onclick="direct()" style="cursor: pointer;">Profile</a>
        </div>
    </header>
    `;
    }
    catch (error) {
        console.log("Header Failed to load", error);
    }
}

function writeUserGreeting() {
    if (localStorage.getItem("sessionUser")) {
        const sessionUser = JSON.parse(localStorage.getItem("sessionUser"));
        console.log("sessionUser: ", sessionUser);
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
        location.href = "profile.html";
    }
    else {
        location.href = "login.html";
    }
}

headerSection.innerHTML = loadHeader();
writeUserGreeting();

function move() {
    const sidenav = document.getElementById("mySidenav");
    const menuicon = document.querySelector(".menuicon");
    
    if (sidenav.classList.contains("open")) {
        menuicon.classList.toggle("change");
        sidenav.classList.remove("open"); // Close menu
    } else {
        sidenav.classList.add("open"); // Open menu fullscreen
        menuicon.classList.toggle("change");
    }
}
