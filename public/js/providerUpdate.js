
const saveUpdateFormHandler = async (event) => {
  event.preventDefault();

  const city = document.querySelector("#location-signup").value.trim();
  const dogWalk = document.querySelector("#dogwalk-signup").value.trim();
  const dogFeeding = document.querySelector("#dogfeeding-signup").value.trim();
  const stSitting = document.querySelector("#STdogSitting-signup").value.trim();
  const ltSitting = document.querySelector("#LTdogSitting-signup").value.trim();
  const smallDog = document.querySelector("#smallDog-signup").value.trim();
  const medDog = document.querySelector("#medDog-signup").value.trim();
  const largeDog = document.querySelector("#largeDog-signup").value.trim();

  console.log(city, dogWalk, dogFeeding, stSitting, ltSitting, smallDog, medDog, largeDog);

  if (city) {
    const response = await fetch("/api/providers/:id", {
      method: "PUT",
      body: JSON.stringify({ city, dogWalk, dogFeeding, stSitting, ltSitting, smallDog, medDog, largeDog }),
      headers: { "Content-Type": "application/json" },
    });
    //FIXME: do we want an else here to post an alert box that one of the 3 is missing so can't post?
console.log("response:" + response);
    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};

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
  .querySelector(".info-update")
  .addEventListener("submit", saveUpdateFormHandler);

document
.querySelector("#removeProvider")
.addEventListener("click", delButtonHandler);
