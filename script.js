document.getElementById("skillForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let skill = document.getElementById("skill").value;
    let want = document.getElementById("want").value;

    let card = document.createElement("div");
    card.classList.add("skill-card");
    card.innerHTML = `<h3>${name}</h3>
                      <p>Offers: <strong>${skill}</strong></p>
                      <p>Wants: <strong>${want}</strong></p>`;

    document.getElementById("skillsContainer").appendChild(card);

    document.getElementById("skillForm").reset();
});
