//Classes, meant for encapsulation

class Sidenav {
    constructor() {
        this.isOpen = false; // Initialize the drawer state
        this.menuIcon = document.querySelector(".menuicon");
        this.sidenav = document.getElementById("mySidenav"); 

        // Add event listener to menuIcon
        if (this.menuIcon) {
            this.menuIcon.addEventListener("click", () => {
                this.menuChange(this.menuIcon);
                this.move();
            });
        }
    }

    // Toggles the menu icon's "change" class
    menuChange(x) {
        x.classList.toggle("change");
    }

    // Opens the side navigation
    openNav() {
        if (this.sidenav) {
            this.sidenav.style.width = "310px";
        }
    }

    // Closes the side navigation
    closeNav() {
        if (this.sidenav) {
            this.sidenav.style.width = "0";
        }
    }

    // Closes and opens the drawer
    move() {
        if (this.isOpen) {
            this.closeNav();
            this.isOpen = false;
        } else {
            this.openNav();
            this.isOpen = true;
        }
    }
}

// Instantiate Sidenav class
document.addEventListener("DOMContentLoaded", () => {
    new Sidenav();
});
