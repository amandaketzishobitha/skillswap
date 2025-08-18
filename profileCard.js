export function createProfileCard(name, role) {
    const card = document.createElement("div");
    card.className = "profile-card";

    card.innerHTML = `
        <h3>${name}</h3>
        <p>${role}</p>
        <button class="removeBtn">Remove</button>
    `;

    card.querySelector(".removeBtn").addEventListener("click", () => {
        card.remove();
    });

    return card;
}
