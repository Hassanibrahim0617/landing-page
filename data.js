const formInput = document.querySelector("form");
const smallMsg = document.querySelectorAll("small");

formInput.addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    event.currentTarget.name.value === "" ||
    event.currentTarget.email.value === "" ||
    event.currentTarget.phonenumber.value === "" ||
    event.currentTarget.message.value === ""
  ){
    smallMsg.forEach((eachMsg) => {
      eachMsg.textContent = "fill in the blank";
      formInput.classList.add("error");
      setTimeout(function () {
        eachMsg.style.display = "none";
        window.location = "./main.html";
      }, 4000);
    });
  } else {
    smallMsg.forEach((eachMsg) => {
      formInput.classList.add("success");
      formInput.classList.remove("error");
    });
  }

  let formData = new FormData(formInput);
  let formDataObj = Object.fromEntries(formData);
  localStorage.setItem("data", JSON.stringify(formDataObj));
});

// link page
const easyLink = document.querySelector('.easybank-link')
function greet(){
  easyLink.innerHTML = 'hello'
  console.log(easyLink)
}