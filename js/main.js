import projects from "../data/projects.js";

console.log(projects.title);

const renderProjects = () => {
  const projectsContainer = document.querySelector(".project_container");
  const projectCard = document.querySelector(".template");

  projects.forEach((project) => {
    // clone .template
    const projCard = projectCard.cloneNode(true);

    projCard.querySelector("img").src = project.screenshot;
    projCard.querySelector("img").alt = `${project.title} screenshot`;
    projCard.querySelector("h3").textContent = project.title;
    projCard.querySelector("p").textContent = project.description;
    projCard.querySelector("a").href = project.link;

    projCard.style.display = "flex";

    projectsContainer.appendChild(projCard);
  });
};

document.addEventListener("DOMContentLoaded", renderProjects);
