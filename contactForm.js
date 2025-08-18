export function handleContactForm() {
    const contactForm = document.getElementById("contactForm");
    if (!contactForm) return;

    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();

        let name = document.getElementById("contactName").value.trim();
        let email = document.getElementById("contactEmail").value.trim();
        let message = document.getElementById("contactMessage").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields before submitting!");
            return;
        }

        document.getElementById("thankYouMessage").style.display = "block";
        contactForm.reset();
    });
}
