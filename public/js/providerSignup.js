//FIXME:create the call to the signup create from event listener

const providerSignupFormHandler = async (event) => {
  event.preventDefault();

  const phone = document.querySelector("#phone-signup").value.trim();
  const city = document.querySelector("#location-signup").value.trim();
  
  const dogwalk = document.querySelector("#dogwalk-signup").checked;
  const smallDog = document.querySelector("#smallDog-signup").checked;
  const medDog = document.querySelector("#medDog-signup").checked;
  const largeDog = document.querySelector("#largeDog-signup").checked;

  console.log(phone, city, password, isProvider);
  //don't want provider in the if cause if not checked would be false so not needed and wouldn't
  if (phone && city) {
    const response = await fetch("/api/providers", {
      method: "POST",
      body: JSON.stringify({ phone, city, smallDog, medDog, largeDog}),
      headers: { "Content-Type": "application/json" },
    });

    //TODO: add the calls to create the services
    console.log(response);
    //FIXME: do we want an else with alert box for if one of the three is missing say why can't post?
    if (response.ok) {
        document.location.replace("/listings");
    } else {
      alert(response.statusText);
    }
  }
};

 document
   .querySelector(".form-group")
   .addEventListener("submit", providerSignupFormHandler);