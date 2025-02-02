

// header.js
const headerSection = document.getElementById('header-section');
function loadHeader() {
    try {
    
    // Load the CSS dynamically
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "../webmaster2025/web-parts/header/header.css" // Path to the CSS file
    document.head.appendChild(link);

    console.log("LoadHeader Function trying to do it's job");
    // Return the footer HTML structure
    return `
    <header class="header">
        <img src="images/nectar-removebg-preview.png" alt="Logo" id="homelogo" width="65px" onclick="location.href='index.html'">
        <nav class="navbar">
            <a href="cart.html" id="cart-label">Cart</a>
            <a href="index.html" class="active">Home</a>
            <a href="menu.html">Menu</a>
            <a href="login.html">Order</a>
            <a href="about.html">About</a>
            <a href="contact.html">Contact</a>
            <a href="reference.html">Reference Page</a>
        </nav>
    </header>
    `;
    }
    catch (error) {
        console.log("Header Failed to load", error);
    }
}

headerSection.innerHTML = loadHeader();
