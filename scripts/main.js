emailjs.init("user_tIC4gmgY9AxjTYQ04oT4u");

async function addContact(event, inputId) {
  event.preventDefault();

  await emailjs.send("service_msr3vi4", "template_iwifmb2", {
    reply_to: document.getElementById(String(inputId)).value,
  });

  document.getElementById(String(inputId)).value = "";
}

function closeOpenPopUp() {
  console.log(document.getElementById("wrapper").clicked !== true);
  if (document.getElementById("wrapper").clicked !== true) {
    console.log("DA");
    document
      .getElementById("popup")
      .classList.toggle("pop-up-container-closed");
  }
}
