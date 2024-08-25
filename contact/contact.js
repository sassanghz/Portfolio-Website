document.getElementById("contact-form").addEventListener("submit", function() {
    // Clear all input fields after submission
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mobile").value = "";
    document.querySelector("textarea[name='message']").value = "";
});
