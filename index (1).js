const data = {
  "📖 ELA": [
    ["Essays",      "Argumentative Essay",                "A−",  "Strong thesis, work on transitions."],
    ["Reading",     "Novel Study — The Outsiders",        "B+",  "Character analysis of Ponyboy Curtis."],
    ["Speaking",    "Oral Presentation",                  "A",   "Great delivery and eye contact."],
    ["Grammar",     "Vocab Unit 3 Quiz",                  "92%", "Missed 2 context-clue questions."]
  ],
  "🏛 History": [
    ["Research",    "Ancient Rome Project",               "A",   "Used 5 primary and secondary sources."],
    ["Maps",        "Silk Road Trade Map",                "B+",  "Annotated with key cities and goods."],
    ["Timelines",   "Ancient Egypt Timeline",             "A−",  "Covered Old, Middle, New Kingdoms."],
    ["Sources",     "Declaration of Independence",        "88%", "Strong written response."]
  ],
  "🎨 Elective": [
    ["Project",     "Semester Major Project",             "A",   "Creative and well-executed."],
    ["Portfolio",   "Best Work Collection Q1",            "A−",  "Top 5 pieces showing growth."],
    ["Performance", "Winter Showcase",                    "Pass","Confident in front of the school."],
    ["Skills",      "Daily Practice Log Q1",              "95%", "Consistent effort all quarter."]
  ],
  "🔬 Science": [
    ["Lab",         "Plant vs Animal Cell Lab",           "A−",  "Diagrams detailed and labeled."],
    ["Research",    "Ecosystems & Biomes Paper",          "B+",  "Solid data, needs more citations."],
    ["Model",       "3D Animal Cell Model",               "A",   "All 12 organelles labeled correctly."],
    ["Fair",        "Science Fair Project",               "TBD", "Brainstorming chemistry topics."]
  ],
  "➗ Math": [
    ["Problems",    "Algebra Problem Set Unit 2",         "85%", "Review multi-step equations."],
    ["Project",     "Real-World Budgeting Project",       "A",   "Applied ratios and percents well."],
    ["Tests",       "Geometry Test — Angles",             "78%", "Review exterior angle theorem."],
    ["Notes",       "Geometry Formula Sheet",             "N/A", "Color-coded area/volume formulas."]
  ]
};

const nav = document.getElementById('nav');
const app = document.getElementById('app');

Object.entries(data).forEach(([tab, rows], i) => {
  const btn = document.createElement('button');
  btn.textContent = tab;
  btn.onclick = () => {
    document.querySelectorAll('nav button, .panel').forEach(el => el.classList.remove('on'));
    btn.classList.add('on');
    document.getElementById('p' + i).classList.add('on');
  };
  if (!i) btn.classList.add('on');
  nav.appendChild(btn);

  const panel = document.createElement('div');
  panel.className = 'panel' + (!i ? ' on' : '');
  panel.id = 'p' + i;
  panel.innerHTML = rows.map(([lbl, title, grade, note]) => `
    <div class="drawer">
      <div class="dh" onclick="this.classList.toggle('on');this.nextElementSibling.classList.toggle('on')">${lbl} <span>▾</span></div>
      <div class="db">
        <label>Title</label><div class="t" contenteditable>${title}</div>
        <label>Grade</label><div class="g" contenteditable>${grade}</div>
        <label>Note</label> <div class="n" contenteditable>${note}</div>
      </div>
    </div>`).join('');
  app.appendChild(panel);
});
