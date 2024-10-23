const form = document.querySelector(".form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch("/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const message = await response.text();

    console.log(message);
  } catch (error) {
    console.log("Failed, try again");
  }
});
