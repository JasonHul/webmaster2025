const section = document.getElementById('footer-section');
function loadFooter() {
    try {
    
    // Load the CSS dynamically
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = ".././web-parts/footer/footer.css" // Path to the CSS file
    document.head.appendChild(link);

    console.log("Load Function trying to do it's job");
    // Return the footer HTML structure
    return `
    <footer class="footer-content">
        <img src="../images/toWEBP/nectar-removebg-preview.webp" width="5%" alt="Logo" id="footer-logo" onclick="location.href='../index.html'">
        <nav class="footer-links">
            <a href="../index.html">Home</a>
            <a href="../menu.html">Menu</a>
            <a href="../food/specials.html">Specials</a>
            <a href="../about.html">About</a>
            <a href="../contact.html">Contact</a>
            <a href="careers.html">Careers</a>
        </nav>
        <p class="copyright">&copy; 2025 Nectar. All Rights Reserved.</p>
    </footer>
    `;
    }
    catch (error) {
        console.log("LoadFooter Function Failed to load", error);
    }
}

section.innerHTML = loadFooter();
