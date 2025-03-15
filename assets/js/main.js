document.addEventListener("DOMContentLoaded", function() {
    let navLinks = document-this.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active")
        }
    });
    let sections = document.querySelectorAll(".feature")
    window.addEventListener("scroll", function() {
        sections.forEach(section => {
            let position = section.getBoundingClientRect().top
            let screenPosition = window.innerHeight / 1.3
            if (position < screenPosition) {
                section.classList.add("visible")
            }
        });
    });
    let themeToggle = document.getElementById("theme-toggle")
    if (themeToggle) {
        themeToggle.addEventListener("click", function() {
            document.body.classList.toggle("dark-mode")
        })
    }
})