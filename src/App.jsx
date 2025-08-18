import React, { useState } from "react";
import SkillCard from "./components/SkillCard";
import ProfileCard from "./components/ProfileCard";
import ContactForm from "./components/ContactForm";
import "./styles.css";

function App() {
  const [skills, setSkills] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [form, setForm] = useState({ name: "", offer: "", want: "" });

  // Add skill card
  const addSkill = () => {
    const { name, offer, want } = form;
    if (!name || !offer || !want) {
      alert("Fill all fields!");
      return;
    }
    setSkills([...skills, { name, offer, want }]);
    setForm({ name: "", offer: "", want: "" });
  };

  // Add profile
  const addProfile = () => {
    const name = prompt("Enter name:");
    const role = prompt("Enter role:");
    if (name && role) setProfiles([...profiles, { name, role }]);
  };

  // Change background color
  const changeBg = () => {
    document.body.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 50%, 90%)`;
  };

  return (
    <div className="App">
      <header>
        <h1>🇮🇳 SkillSwap India</h1>
        <p>Connect. Learn. Grow — Together.</p>
        <nav>
          <a href="#">🏠 Home</a> | <a href="#contact">📩 Contact</a>
        </nav>
        <button id="colorBtn" onClick={changeBg}>Change Background</button>
      </header>

      <main>
        {/* Skill Form */}
        <section className="form-section">
          <h2>Share Your Skills</h2>
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Skill You Offer"
            value={form.offer}
            onChange={(e) => setForm({ ...form, offer: e.target.value })}
          />
          <input
            type="text"
            placeholder="Skill You Want"
            value={form.want}
            onChange={(e) => setForm({ ...form, want: e.target.value })}
          />
          <button onClick={addSkill}>Add Skill</button>
        </section>

        {/* Skill Cards */}
        <section className="skills-list">
          <h2>Available Swaps</h2>
          <div id="skillsContainer">
            {skills.map((s, i) => (
              <SkillCard
                key={i}
                name={s.name}
                offer={s.offer}
                want={s.want}
                onDelete={() => setSkills(skills.filter((_, index) => index !== i))}
              />
            ))}
          </div>
        </section>

        {/* Mini Activity - Profile Cards */}
        <section>
          <h2>Practical Activity - Profile Cards</h2>
          <button onClick={addProfile}>Add Profile</button>
          <div id="profilesContainer">
            {profiles.map((p, i) => (
              <ProfileCard
                key={i}
                name={p.name}
                role={p.role}
                onRemove={() => setProfiles(profiles.filter((_, index) => index !== i))}
              />
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact">
          <ContactForm />
        </section>
      </main>

      <footer>
        <p>© 2025 SkillSwap India — Built with ❤️ for learners</p>
      </footer>
    </div>
  );
}

export default App;
