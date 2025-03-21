function confirmationsubmission() {
  return confirm("Thank you! Are you sure you want to submit?");
}

function confirmationreset() {
  return confirm("Thank you! Are you sure you want to reset?");
}

function empty(event) {
  const input = event.target;
  if (input.value.trim() === "") {
    input.style.border = "2px solid red";
  } else {
    input.style.border = "2px solid green";
  }
}

function handleFormSubmit() {
  const username = document.querySelector('input[name="username"]').value;
  if (confirmationsubmission()) {
    localStorage.setItem("loggedInUser", username);
    window.location.href = "index.html";
    return false;
  }
  return false;
}
