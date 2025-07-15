// --- Language Switcher & Translation ---
const translations = {
  en: {
    about: "About",
    education: "Education",
    skills: "Skills",
    projects: "Projects",
    interests: "Interests",
    contact: "Contact",
    heroTitle: "NIZAR SAIDI",
    heroSubtitle: "CYBER SECURITY Student | Future Digital Infrastructure Specialist",
    heroDesc: "Passionate about technology and digital solutions",
    aboutTitle: "About Me",
    aboutText: "18-year-old Moroccan student specializing in Digital Infrastructure at OFPPT. Passionate about cyber security, networking, and emerging technologies.",
    traits: ["Hardworking", "Curious", "Always learning"],
    educationTitle: "Education",
    bac: "Baccalaureate (2024)",
    bacOpt: "Option: SVT (Life and Earth Sciences)",
    ofppt: "OFPPT (2024-Present)",
    ofpptDesc: "First year completed in <strong>Digital Infrastructure</strong>.",
    ofpptList: ["Networking", "Cybersecurity", "System Administration"],
    skillsTitle: "Skills",
    techSkills: "Technical Skills",
    techList: ["Basic Networking (TCP/IP, DNS, etc.)", "Operating Systems (Windows, Linux)", "Hardware & Troubleshooting", "Programming (Python, HTML, CSS, JS - beginner)"],
    softSkills: "Soft Skills",
    softList: ["Problem-solving & Critical Thinking", "Teamwork", "Fast learner", "Communication", "Leadership", "Time management"],
    projectsTitle: "Projects & Goals",
    projectsList: ["Built a small home network", "Configured a virtual server", "Planning to earn certifications in CCNA or Microsoft Azure"],
    interestsTitle: "Interests & Hobbies",
    interestsList: [
      "<i class=\"fas fa-microchip\"></i> Technology trends",
      "<i class=\"fas fa-gamepad\"></i> Gaming",
      "<i class=\"fas fa-futbol\"></i> Football",
      "<i class=\"fas fa-swimmer\"></i> Swimming",
      "<i class=\"fas fa-shield-alt\"></i> Cyber security news",
      "<i class=\"fas fa-running\"></i> Sports"
    ],
    contactTitle: "Contact",
    contactList: [
      "<i class=\"fas fa-envelope\"></i> nizarsaidi444@gmail.com",
      "<i class=\"fab fa-linkedin\"></i> <a href=\"https://www.linkedin.com/in/nizar-saidi-29943a324\" target=\"_blank\">LinkedIn</a>",
      "<i class=\"fab fa-github\"></i> <a href=\"#\">GitHub</a>",
      "<i class=\"fas fa-phone\"></i> 0684697980"
    ],
    footer: "&copy; 2025 Nizar Saidi. All rights reserved."
  },
  fr: {
    about: "À propos",
    education: "Éducation",
    skills: "Compétences",
    projects: "Projets & Objectifs",
    interests: "Centres d'intérêt",
    contact: "Contact",
    heroTitle: "NIZAR SAIDI",
    heroSubtitle: "Étudiant en CYBERSÉCURITÉ | Futur spécialiste des infrastructures numériques",
    heroDesc: "Passionné par la technologie et les solutions numériques",
    aboutTitle: "À propos de moi",
    aboutText: "Étudiant marocain de 18 ans spécialisé en Infrastructure Numérique à l'OFPPT. Passionné par la cybersécurité, le réseau et les technologies émergentes.",
    traits: ["Travailleur", "Curieux", "Toujours en apprentissage"],
    educationTitle: "Éducation",
    bac: "Baccalauréat (2024)",
    bacOpt: "Option : SVT (Sciences de la Vie et de la Terre)",
    ofppt: "OFPPT (2024-Présent)",
    ofpptDesc: "Première année validée en <strong>Infrastructure Numérique</strong>.",
    ofpptList: ["Réseaux", "Cybersécurité", "Administration Système"],
    skillsTitle: "Compétences",
    techSkills: "Compétences techniques",
    techList: ["Réseaux de base (TCP/IP, DNS, etc.)", "Systèmes d'exploitation (Windows, Linux)", "Matériel & Dépannage", "Programmation (Python, HTML, CSS, JS - débutant)"],
    softSkills: "Compétences relationnelles",
    softList: ["Résolution de problèmes & Pensée critique", "Travail d'équipe", "Apprentissage rapide", "Communication", "Leadership", "Gestion du temps"],
    projectsTitle: "Projets & Objectifs",
    projectsList: ["Création d'un petit réseau domestique", "Configuration d'un serveur virtuel", "Prévoit d'obtenir des certifications CCNA ou Microsoft Azure"],
    interestsTitle: "Centres d'intérêt & Loisirs",
    interestsList: [
      "<i class=\"fas fa-microchip\"></i> Tendances technologiques",
      "<i class=\"fas fa-gamepad\"></i> Jeux vidéo",
      "<i class=\"fas fa-futbol\"></i> Football",
      "<i class=\"fas fa-swimmer\"></i> Natation",
      "<i class=\"fas fa-shield-alt\"></i> Actualités cybersécurité",
      "<i class=\"fas fa-running\"></i> Sports"
    ],
    contactTitle: "Contact",
    contactList: [
      "<i class=\"fas fa-envelope\"></i> nizarsaidi444@gmail.com",
      "<i class=\"fab fa-linkedin\"></i> <a href=\"https://www.linkedin.com/in/nizar-saidi-29943a324\" target=\"_blank\">LinkedIn</a>",
      "<i class=\"fab fa-github\"></i> <a href=\"#\">GitHub</a>",
      "<i class=\"fas fa-phone\"></i> 0684697980"
    ],
    footer: "&copy; 2025 Nizar Saidi. Tous droits réservés."
  }
};

function setLanguage(lang) {
  const t = translations[lang];
  // Navbar links
  const navLinks = document.querySelectorAll('.nav-links a');
  const navKeys = ['about','education','skills','projects','interests','contact'];
  navLinks.forEach((a, i) => { a.textContent = t[navKeys[i]]; });
  // Hero
  const nameSpan = document.querySelector('.typing-animation .name-text');
  if (nameSpan) nameSpan.textContent = t.heroTitle;
  document.querySelector('.hero-content h2').textContent = t.heroSubtitle;
  document.querySelector('.hero-content p').textContent = t.heroDesc;
  // About
  document.querySelector('#about h2').textContent = t.aboutTitle;
  document.querySelector('#about p').textContent = t.aboutText;
  document.querySelectorAll('.traits li').forEach((li, i) => { li.textContent = t.traits[i]; });
  // Education
  document.querySelector('#education h2').textContent = t.educationTitle;
  document.querySelectorAll('#education .edu-item h3')[0].textContent = t.bac;
  document.querySelectorAll('#education .edu-item p')[0].textContent = t.bacOpt;
  document.querySelectorAll('#education .edu-item h3')[1].textContent = t.ofppt;
  document.querySelectorAll('#education .edu-item p')[1].innerHTML = t.ofpptDesc;
  const eduList = document.querySelectorAll('#education .edu-item ul li');
  t.ofpptList.forEach((txt, i) => { eduList[i].textContent = txt; });
  // Skills
  document.querySelector('#skills h2').textContent = t.skillsTitle;
  document.querySelectorAll('.skills-block h3')[0].textContent = t.techSkills;
  document.querySelectorAll('.skills-block h3')[1].textContent = t.softSkills;
  const techList = document.querySelectorAll('.skills-block ul')[0].children;
  t.techList.forEach((txt, i) => { techList[i].textContent = txt; });
  const softList = document.querySelectorAll('.skills-block ul')[1].children;
  t.softList.forEach((txt, i) => { softList[i].textContent = txt; });
  // Projects
  document.querySelector('#projects h2').textContent = t.projectsTitle;
  const projList = document.querySelectorAll('#projects ul li');
  t.projectsList.forEach((txt, i) => { projList[i].textContent = txt; });
  // Interests
  document.querySelector('#interests h2').textContent = t.interestsTitle;
  const intList = document.querySelectorAll('.interests-list li');
  t.interestsList.forEach((html, i) => { intList[i].innerHTML = html; });
  // Contact
  document.querySelector('#contact h2').textContent = t.contactTitle;
  const contactList = document.querySelectorAll('.contact-list li');
  t.contactList.forEach((html, i) => { contactList[i].innerHTML = html; });
  // Footer
  document.querySelector('footer p').innerHTML = t.footer;
  // Set active button
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector('.lang-btn[data-lang="'+lang+'"]')?.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  // Language switcher
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      setLanguage(this.dataset.lang);
    });
  });
  setLanguage('en'); // Default
});

// Typing animation for the hero name
window.addEventListener('DOMContentLoaded', () => {
    const el = document.querySelector('.typing-animation');
    if (el) {
        const text = el.textContent;
        el.textContent = '';
        let i = 0;
        function type() {
            if (i < text.length) {
                el.textContent += text.charAt(i);
                i++;
                setTimeout(type, 90);
// Floating particles animation for hero background
window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('.particles');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = document.querySelector('.hero').offsetHeight;
    let particles = [];
    const colors = ['#00ffe7', '#7df9ff', '#1a237e', '#00ffe799'];
    const num = Math.floor(w / 32);
    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = document.querySelector('.hero').offsetHeight;
    }
    window.addEventListener('resize', resize);
    function Particle() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.radius = Math.random() * 2.5 + 1.2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speed = Math.random() * 0.7 + 0.2;
        this.angle = Math.random() * Math.PI * 2;
    }
    Particle.prototype.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 0.7;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
    };
    Particle.prototype.update = function() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        if (this.x < 0 || this.x > w || this.y < 0 || this.y > h) {
            this.x = Math.random() * w;
            this.y = Math.random() * h;
        }
    };
    function createParticles() {
        particles = [];
        for (let i = 0; i < num; i++) {
            particles.push(new Particle());
        }
    }
    createParticles();
    function animate() {
        ctx.clearRect(0, 0, w, h);
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }
        requestAnimationFrame(animate);
    }
    animate();
    window.addEventListener('resize', () => {
        resize();
        createParticles();
    });
});
            }
        }
        type();
    }
});


// --- Animated techy background for main content (not header) ---
window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('.main-bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    // Parameters for grid/lines
    const lineColor = '#00ffe7';
    const gridSpacing = 60;
    const speed = 0.5;
    let offset = 0;

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);

    function drawGrid() {
        ctx.clearRect(0, 0, w, h);
        ctx.save();
        ctx.globalAlpha = 0.22;
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 1.2;
        // Vertical lines
        for (let x = -gridSpacing + (offset % gridSpacing); x < w; x += gridSpacing) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, h);
            ctx.stroke();
        }
        // Horizontal lines
        for (let y = -gridSpacing + (offset % gridSpacing); y < h; y += gridSpacing) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(w, y);
            ctx.stroke();
        }
        ctx.restore();
    }

    function animate() {
        offset += speed;
        drawGrid();
        requestAnimationFrame(animate);
    }
    animate();
});

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            e.preventDefault();
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
