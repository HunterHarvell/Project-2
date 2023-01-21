


const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");
//TODO: runn the routs for providerupdate and user update
    const response = await fetch(`/api/providerInfo/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to delete project");
    }
  }
};

document
.querySelector("#removeProvider")
.addEventListener("click", delButtonHandler);
