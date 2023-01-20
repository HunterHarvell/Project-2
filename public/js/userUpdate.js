


const saveUpdateFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  console.log(name, email, password);
  if (name && email && password) {
    const response = await fetch("/api/users/update", {
      method: "PUT",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    //FIXME: do we want an else here to post an alert box that one of the 3 is missing so can't post?

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};
  

document
  .querySelector(".form-group")
  .addEventListener("submit", saveUpdateFormHandler);
