import { createProfileCard } from './profileCard.js';
import greet, { add, multiply } from './mathUtils.js';
import { handleContactForm } from './contactForm.js';

// Run greet() and log math results
greet();
console.log("Add:", add(2, 3));
console.log("Multiply:", multiply(4, 5));

// Welcome alert (only on home page)
if (document.title === "SkillSwap India") {
    window.onload = function() {
        alert("Welcome to SkillSwap India!");
    };
}

// Change background color
const colorBtn = document.getElementById("colorBtn");
if (colorBtn) {
    colorBtn.addEventListener("click", function() {
        document.body.style.backgroundColor =
            `hsl(${Math.floor(Math.random() * 360)}, 50%, 90%)`;
    });
}

// Skill Form
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

// Mini Activity - Create/Delete Cards
const createCardBtn = document.getElementById("createCardBtn");
const cardContainer = document.getElementById("cardContainer");

if (createCardBtn) {
    createCardBtn.addEventListener("click", () => {
        const card = document.createElement("div");
        card.className = "card";
        card.textContent = "I am a dynamic card";

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            card.remove();
        });

        card.appendChild(deleteBtn);
        cardContainer.appendChild(card);
    });
}

// Practical Activity - Profile Cards
if (document.title === "SkillSwap India") {
    const addProfileBtn = document.createElement("button");
    addProfileBtn.textContent = "Add Profile";
    document.querySelector("main").prepend(addProfileBtn);

    const profilesContainer = document.createElement("div");
    profilesContainer.id = "profilesContainer";
    document.querySelector("main").appendChild(profilesContainer);

    addProfileBtn.addEventListener("click", () => {
        const name = prompt("Enter name:");
        const role = prompt("Enter role:");
        if (name && role) {
            profilesContainer.appendChild(createProfileCard(name, role));
        }
    });
}

// Contact Form Handler
handleContactForm();
