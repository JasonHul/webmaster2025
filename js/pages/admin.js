function logout() {
    // Clear the session
    localStorage.removeItem("sessionUser");
    localStorage.removeItem("foodItems");

    // Redirect to the login page
    window.location.href = "login.html";
}



document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("active");
});