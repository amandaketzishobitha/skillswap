// Welcome alert (only on home page)
if (document.title.includes("SkillSwap India") && !document.title.includes("Contact")) {
    window.onload = function() {
        alert("Welcome to SkillSwap India!");
    };
}

// Change background color (only if button exists)
const colorBtn = document.getElementById("colorBtn");
if (colorBtn) {
    colorBtn.addEventListener("click", function() {
        document.body.style.backgroundColor =
            `hsl(${Math.floor(Math.random() * 360)}, 50%, 90%)`;
    });
}

// Skill Form (Home Page)
const skillForm = document.getElementById("skillForm");
if (skillForm) {
    skillForm.addEventListener("submit", function(e) {
        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let skill = document.getElementById("skill").value.trim();
        let want = document.getElementById("want").value.trim();

        if (!name || !skill || !want) {
            alert("Please fill out all fields before submitting!");
            return;
        }

        let card = document.createElement("div");
        card.classList.add("skill-card");
        card.innerHTML = `
            <h3>${name}</h3>
            <p>Offers: <strong>${skill}</strong></p>
            <p>Wants: <strong>${want}</strong></p>
        `;

        document.getElementById("skillsContainer").appendChild(card);
        skillForm.reset();
    });
}

// Contact Form (Contact Page)
const contactForm = document.getElementById("contactForm");
if (contactForm) {
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
