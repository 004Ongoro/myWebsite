const openButton = document.getElementById("menu_bars");
const closeButton = document.getElementById("menu_x");
const menu = document.getElementById("nav_menu");
const listItems = document.querySelectorAll(".list_item");

// ======== TOGGLE MENU
const openMenu = () => {
  menu.classList.add("open_list");
};

const closeMenu = () => {
  menu.classList.remove("open_list");
};

openButton.addEventListener("click", () => {
  openMenu();
});
closeButton.addEventListener("click", closeMenu);

listItems.forEach((item) => item.addEventListener("click", closeMenu));

// =========== MANAGE COOKIES MODAL
document.addEventListener("DOMContentLoaded", () => {
  const cookieModal = document.getElementById("cookie_modal");
  const cookieAccept = document.getElementById("cookie_accept");
  const cookieReject = document.getElementById("cookie_reject");

  // Show moadl

  setTimeout(() => {
    cookieModal.style.bottom = "0";
  }, 1000);

  // ACCEPT COOKIES
  cookieAccept.addEventListener("click", () => {
    cookieModal.style.bottom = "-100%";

    localStorage.setItem("cookiesAccepted", "true");

    showMessage("You accepted the cookies", "success");
  });

  // REJECT COOKIES
  cookieReject.addEventListener("click", () => {
    cookieModal.style.bottom = "-100%";

    localStorage.setItem("cookiesRejected", "true");

    showMessage(
      "You rejected cookies, some features may not be available",
      "error"
    );
  });

  if (
    localStorage.getItem("cookiesAccepted") ||
    localStorage.getItem("cookiesRejected")
  ) {
    cookieModal.style.display = "none";
  }
});

// ============= HANDLE PROMPTS
const messageModal = document.getElementById("message_modal");
const messageIcon = document.getElementById("message_icon");
const messageText = document.getElementById("message_text");

const showMessage = (message, type) => {
  messageModal.style.bottom = "0%";
  if (type === "error") {
    messageText.style.color = "red";

    if (messageIcon.classList.contains("fa-check")) {
      messageIcon.classList.replace("fa-check", "fa-x");
      messageIcon.style.color = "red";
    }
  } else if (type === "success") {
    messageText.style.color = "green";

    if (messageIcon.classList.contains("fa-x")) {
      messageIcon.classList.replace("fa-x", "fa-check");
      messageIcon.style.color = "green";
    }
  } else if (type === "warning") {
    messageText.style.color = "orange";
  }

  messageText.textContent = message;

  setTimeout(() => {
    messageModal.style.bottom = "-100%";
  }, 5000);
};

// =============== HANDLE SUBSCRIPTION
const emailInput = document.getElementById("email_subscribe");
const subscribeButton = document.getElementById("subscribe_btn");

subscribeButton.addEventListener("click", (e) => {
  e.preventDefault();
  const email = emailInput.value;

  if (email == "") {
    showMessage(
      "Email input is empty or email is in the wrong format.",
      "error"
    );
  } else {
    showMessage(
      "You have successfully subscribed to the newsletter",
      "success"
    );
  }
});
