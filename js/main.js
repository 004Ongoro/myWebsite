import projects from "../data/projects.js";

const renderProjects = () => {
  //const projectsContainer = document.querySelector(".project_container");
  const projectsContainer = document.querySelector(".project_container");
  const projectCard = document.querySelector(".template");

  projects.forEach((project) => {
    // clone .template
    const projCard = projectCard.cloneNode(true);

    projCard.querySelector("img").src = project.screenshot;
    projCard.querySelector("img").alt = `${project.title} screenshot`;
    projCard.querySelector("h3").textContent =
      project.title.length > 20
        ? project.title.substring(0, 20) + "..."
        : project.title;
    projCard.querySelector("p").textContent =
      project.description.length > 90
        ? project.description.substring(0, 90) + "..."
        : project.description;
    projCard.querySelector("a").href = project.link;

    projCard.style.display = "flex";

    projectsContainer.appendChild(projCard);
    projCard.addEventListener("click", () => {
      projectsDetailModal.classList.add("project_details_open");
      projectsDetailTitle.textContent = project.title;
      projectsDetailDescr.textContent = project.description;
    });
  });
};

document.addEventListener("DOMContentLoaded", renderProjects);

// MANAGE PROJECT MODAL

const projectsDetailModal = document.querySelector(".project_details");
const projectsDetailTitle = document.querySelector(".det_title");
const projectsDetailDescr = document.querySelector(".det_description");
const projectsModalClose = document.getElementById("proj_modal_close");
let modalOpen = false;

// SHOW/HIDE MODAL
const closeModal = () => {
  projectsDetailModal.classList.remove("project_details_open");
};

projectsModalClose.addEventListener("click", closeModal);
