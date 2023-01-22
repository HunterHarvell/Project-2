


const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("provider-id")) {
    const pid = event.target.getAttribute("provider-id");
//TODO: run the routes for providerupdate and user update
    const response = await fetch(`/api/providerInfo/${pid}`, {
      method: "DELETE",
    });
    if (event.target.hasAttribute("user-id")) {
    const uid = event.target.getAttribute("user-id");
//TODO: run the routes for providerupdate and user update //make route***
//FIXME: pass through provider and user id
      const isProvider = false;
    const response2 = await fetch(`/api/providerInfo/isprovider/${uid}`, {
      method: "PUT",
      body: JSON.stringify({isProvider}),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok && response2.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to delete provider");
    }
  }
};

document
.querySelector("#removeProvider")
.addEventListener("click", delButtonHandler);
