//FIXME:create the call to the signup create from event listener

const providerSignupFormHandler = async (event) => {
  event.preventDefault();

  const phone = document.querySelector("#phone-signup").value.trim();
  const city = document.querySelector("#location-signup").value.trim();
  
  const dogwalk = document.querySelector("#dogwalk-signup").checked;
  const smallDog = document.querySelector("#smallDog-signup").checked;
  const medDog = document.querySelector("#medDog-signup").checked;
  const largeDog = document.querySelector("#largeDog-signup").checked;

  console.log(phone, city);
  if (phone && city) {
    const response = await fetch("/api/providers", {
      method: "POST",
      body: JSON.stringify({ phone, city, smallDog, medDog, largeDog}),
      headers: { "Content-Type": "application/json" },
    });
    console.log("got to response");
console.log(response);
    //TODO: add the calls to create the services
    console.log(response);
    if (response.ok) {
        document.location.replace("/profile");
    } else {
      alert("failed to create provider info - make sure you have filled in phone and city");
    }
  }
};

 document
   .querySelector("#sign-up")
   .addEventListener("click", providerSignupFormHandler);