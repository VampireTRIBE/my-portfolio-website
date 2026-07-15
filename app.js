import { projects } from "./projects.module.js";

const menuCheckbox = document.querySelector("#nav-menu-options");
const desktopNav = window.matchMedia("(min-width: 941px)");
const themeToggle = document.getElementById("page-theme");
const themeIcon = document.querySelector(".theme-toggle img");
const projectGrid = document.getElementById("project-grid");
const projectTemplate = document.getElementById("project-card-template");
const filterButtons = document.querySelectorAll(".filter-button");
const navLinks = document.querySelectorAll(".site-nav a");
const sections = [...document.querySelectorAll("main section[id]"), document.querySelector(".footer")].filter(Boolean);

function handleNavResize(event) {
  if (event.matches && menuCheckbox) {
    menuCheckbox.checked = false;
  }
}

function setTheme(isDark) {
  document.body.classList.toggle("dark", isDark);
  if (themeIcon) {
    themeIcon.src = isDark ? "./assets/images/dark.png" : "./assets/images/light.png";
  }
  localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
}

function createMetric(metric) {
  const item = document.createElement("div");
  item.className = "metric";
  item.innerHTML = `<strong>${metric.value}</strong><span>${metric.label}</span>`;
  return item;
}

function renderProjects(filter = "all") {
  if (!projectGrid || !projectTemplate) return;

  projectGrid.innerHTML = "";
  const visibleProjects = filter === "all" ? projects : projects.filter(project => project.category === filter);

  visibleProjects.forEach(project => {
    const card = projectTemplate.content.firstElementChild.cloneNode(true);
    card.querySelector(".project-kind").textContent = project.kind;
    card.querySelector(".project-year").textContent = project.year;
    card.querySelector("h3").textContent = project.title;
    card.querySelector(".project-description").textContent = project.description;

    const metrics = card.querySelector(".project-metrics");
    project.metrics.forEach(metric => metrics.appendChild(createMetric(metric)));

    const tags = card.querySelector(".project-tags");
    project.tags.forEach(tag => {
      const item = document.createElement("li");
      item.textContent = tag;
      tags.appendChild(item);
    });

    const primary = card.querySelector(".project-primary");
    const secondary = card.querySelector(".project-secondary");
    primary.href = project.primary.url;
    primary.textContent = project.primary.label;
    if (project.secondary) {
      secondary.href = project.secondary.url;
      secondary.textContent = project.secondary.label;
    } else {
      secondary.remove();
    }

    projectGrid.appendChild(card);
  });
}

function setActiveNav() {
  const current = sections
    .map(section => ({
      id: section.id,
      distance: Math.abs(section.getBoundingClientRect().top - 96)
    }))
    .sort((a, b) => a.distance - b.distance)[0];

  if (!current) return;

  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current.id}`);
  });
}

desktopNav.addEventListener("change", handleNavResize);
handleNavResize(desktopNav);

themeToggle?.addEventListener("change", () => {
  setTheme(themeToggle.checked);
});

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (menuCheckbox) menuCheckbox.checked = false;
  });
});

window.addEventListener("scroll", setActiveNav, { passive: true });

const savedTheme = localStorage.getItem("portfolio-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const shouldUseDark = savedTheme ? savedTheme === "dark" : prefersDark;

if (themeToggle) themeToggle.checked = shouldUseDark;
setTheme(shouldUseDark);
renderProjects();
setActiveNav();
