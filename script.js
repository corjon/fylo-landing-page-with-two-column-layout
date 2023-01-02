const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const forms = document.querySelectorAll('form');

forms.forEach((item) => {
  item.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let textField = item.firstElementChild;
    let errMsg = item.querySelector(".err-msg");
    if (textField.value === "" || !textField.value.match(emailFormat)) {
      textField.style.borderColor = "#EF4877";
      errMsg.classList.add("visible");
    }
    else {
      textField.style.borderColor = "#07043B";
      errMsg.classList.remove("visible");
      alert("email valid. no data submitted");
      item.reset();
    }
  });
});