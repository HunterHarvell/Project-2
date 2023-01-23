
const saveUpdateFormHandler = async (event) => {
  event.preventDefault();

  const city = document.querySelector("#location-signup").value.trim();
  const dogWalk = document.querySelector("#dogwalk-signup").checked;
  const dogFeeding = document.querySelector("#dogfeeding-signup").checked;
  const stSitting = document.querySelector("#STdogSitting-signup").checked;
  const ltSitting = document.querySelector("#LTdogSitting-signup").checked;
  const smallDog = document.querySelector("#smallDog-signup").checked;
  const medDog = document.querySelector("#medDog-signup").checked;
  const largeDog = document.querySelector("#largeDog-signup").checked;

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
      alert("change not saved");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("provider-id")) {
    const pid = event.target.getAttribute("provider-id");
    console.log("provider-id: " + pid);
//TODO: run the routes for providerupdate and user update
const isProvider = false;
 const response = await fetch("/api/users/updateisprovider", {
      method: "PUT",
      body: JSON.stringify({ isProvider }),
      headers: { "Content-Type": "application/json" },
    });
    // const response2 = await fetch(`/api/providers/${pid}`, {
    //   method: "DELETE",
    // });
      
   // if (response.ok && response2.ok) {
    if (response.ok){
      document.location.replace("/profile");
    } else {
      alert("Failed to delete provider");
    }
  }
};

document
  .querySelector("#save-changes")
  .addEventListener("click", saveUpdateFormHandler);

document
.querySelector("#removeProvider")
.addEventListener("click", delButtonHandler);
