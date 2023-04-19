const form = document.querySelector(".login-form");

const handleSubmit = (event) => {
    event.preventDefault();
    const {
      elements: { email, password },
    } = event.currentTarget;
      
  if (email.value === "" || password.value === "") {
      return alert("Please fill in all the fields!");
    }
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
      const takeFormData = { name, value };
      console.log(takeFormData);
        event.currentTarget.reset();
    })
};

form.addEventListener("submit", handleSubmit);
