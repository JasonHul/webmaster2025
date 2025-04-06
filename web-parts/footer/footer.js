const section = document.getElementById('footer-section');
function loadFooter() {
    try {
    
    // Load the CSS dynamically
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "./web-parts/footer/footer.css" // Path to the CSS file
    document.head.appendChild(link);

    console.log("Load Function trying to do it's job");
    // Return the footer HTML structure
    return `
    <footer class="footer-content">
  <div class="footer-links">
    <a href="../menu.html">Menu</a>
    <a href="../about.html">About</a>
    <a href="../reservation.html">Reservation</a>
    <a href="../reference.html">Reference</a>
    <a href="../careers.html">Careers</a>
    <a href="../privacy.html">Privacy Policy</a>
  </div>

  <div class="social-icons">
    <a href="https://www.instagram.com/oktsa78/" target="_blank" aria-label="Instagram">
      <svg class="social-icon" viewBox="0 0 24 24">
        <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"/>
      </svg>
    </a>
    <a href="https://www.facebook.com/OklahomaTSA/" target="_blank" aria-label="Facebook">
      <svg class="social-icon" viewBox="0 0 24 24">
        <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"/>
      </svg>
    </a>
    <a href="https://twitter.com/oklahomatsa" target="_blank" aria-label="Twitter">
      <svg class="social-icon" viewBox="0 0 24 24">
        <path d="M 2.8671875 3 L 9.7363281 12.818359 L 2.734375 21 L 5.3808594 21 L 10.919922 14.509766 L 15.460938 21 L 21.371094 21 L 14.173828 10.697266 L 20.744141 3 L 18.138672 3 L 12.996094 9.0097656 L 8.7988281 3 L 2.8671875 3 z"/>
      </svg>
    </a>
  </div>

  <p class="copyright">&copy; 2025 Nectar. All rights reserved.</p>
</footer>

    `;
    }
    catch (error) {
        console.log("LoadFooter Function Failed to load", error);
    }
}

section.innerHTML = loadFooter();
