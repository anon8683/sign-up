const firstName = document.querySelector("#firstName");
const secondName = document.querySelector("#secondName");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const pass = document.querySelector("#password");
const passC = document.querySelector("#passCheck");
const submit = document.querySelector("button");

const firstError = document.querySelector(".firstError");
const secondError = document.querySelector(".secondError");
const emailError = document.querySelector(".emailError");
const phoneError = document.querySelector(".phoneError");
const passError = document.querySelector(".passError");
const passCheck = document.querySelector(".passCheckError");

let matched = false;

firstName.addEventListener("change", (e) => {
  if (firstName.validity.valid) {
    firstName.className = "valid";
    firstError.textContent = "";
    return;
  }
  if (firstName.value === "") {
    firstName.className = "invalid";
    firstError.textContent = "This field is required.";
    return;
  }
  firstName.className = "invalid";
  firstError.textContent = "Can only contain letters";
});

secondName.addEventListener("change", (e) => {
  if (secondName.validity.valid) {
    secondName.className = "valid";
    secondError.textContent = "";
    return;
  }
  if (secondName.value === "") {
    secondName.className = "invalid";
    secondError.textContent = "This field is required.";
    return;
  }
  secondName.className = "invalid";
  secondError.textContent = "Can only contain letters";
});

email.addEventListener("change", (e) => {
  if (email.validity.valid) {
    emailError.textContent = "";
    email.className = "valid";
    return;
  }
  if (email.value === "") {
    emailError.textContent = "This field is required";
    email.className = "invalid";
    return;
  }

  if (!email.validity.valid) {
    if (!email.value.includes("@")) {
      emailError.textContent = "Email must include @";
      email.className = "invalid";
      return;
    }
  }
});

phone.addEventListener("change", (e) => {
  if (phone.validity.valid) {
    phoneError.textContent = "";
    phone.className = "valid";
    return;
  }
  phoneError.textContent = "Invalid phone number";
  phone.className = "invalid";
});

pass.addEventListener("change", (e) => {
  if (pass.validity.valid) {
    pass.className = "valid";
    passError.textContent = "";
    return;
  }
  pass.className = "invalid";
  passError.textContent =
    "Password must contain uppercase, lowercase and a number ";
});

passC.addEventListener("change", (e) => {
  if (passC.validity.valid) {
    if (passC.value === pass.value) {
      passC.className = "valid";
      passCheck.textContent = "";
      matched = true;
      return;
    }
  }
  passC.className = "invalid";
  passCheck.textContent = "Passwords do not match";
});

submit.addEventListener("click", (e) => {
  if (
    !firstName.validity.valid ||
    !secondName.validity.valid ||
    !email.validity.valid ||
    !phone.validity.valid ||
    !pass.validity.valid ||
    matched === false
  ) {
    e.preventDefault();
  }
});
