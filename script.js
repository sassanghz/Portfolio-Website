document.getElementById("hamburger").addEventListener("click", function(){
    var navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
});

document.querySelector(".newsletter form").addEventListener("submit", function(event) {
    var emailInput = document.getElementById("mail").value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput)) {
        alert("Please enter a valid email address.");
        event.preventDefault(); // Prevent form submission
    }
});

document.querySelector(".newsletter form").addEventListener("submit", function(){
    document.getElementById("mail").value = "";
});

document.getElementById("newsletter-form").addEventListener("submit", function(){
    document.getElementById("mail").value = "";
})
