const emailInput = document.getElementById("input-email");
const emailError = document.getElementById("email-error");
const submitEmail = document.getElementById("submit-email");
const emailFormContainer = document.getElementById("email-form-container");
const personalInfoContainer = document.getElementById(
  "personal-info-container",
);

submitEmail.addEventListener("click", function () {
  const emailValue = emailInput.value.trim();

  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailValue === "") {
    emailError.textContent = "Vui lòng nhập email để xác thực";
    emailError.classList.add("show-error");
    return;
  }

  if (!regex.test(emailValue)) {
    emailError.textContent = "Email không đúng định dạng";
    emailError.classList.add("show-error");
    return;
  }

  emailFormContainer.classList.add("hide");
  personalInfoContainer.classList.remove("hide");
});

const viewMoreButtons = document.querySelectorAll(".view-more-btn");

viewMoreButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const resumeCard = button.parentElement;
    const resumeContent = button.nextElementSibling;

    if (resumeContent.classList.contains("hide")) {
      resumeContent.classList.remove("hide");
      resumeCard.classList.add("active");
      button.textContent = "▲ VIEW LESS";
    } else {
      resumeContent.classList.add("hide");
      resumeCard.classList.remove("active");
      button.textContent = "▼ VIEW MORE";
    }
  });
});
