const submitButton = document.querySelector(".submit");
const form = document.querySelector(".form");
const email = document.querySelector(".form input");
const errorMsg = document.querySelector(".error-msg");

function isValidEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) return true;
  else return false;
}

submitButton.addEventListener("click", () => {
  if (isValidEmail(email)) {
    errorMsg.style.visibility = "hidden";
    email.classList.remove("not-valid");
    form.submit();
  } else {
    errorMsg.style.visibility = "initial";
    email.classList.add("not-valid");
  }
});
