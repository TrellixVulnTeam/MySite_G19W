// Listen for contact form submit

document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  // input values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let description = document.querySelector(".desc").value;

  // open pop-up
  //   document.querySelector(".pop-up").style.visibility = "visible";

  console.log(name);
  console.log(email);
  console.log(description);

  document.querySelector(".pop-up__message").innerHTML = `Hey ${
    name[0].toUpperCase() + name.substr(1) //capitalizing string
  }, thanks for contacting me. I'll get back to you as soon as possible.`;
  sendEmail(name, email, description);

  document
    .querySelector(".pop-up__content__close")
    .addEventListener("click", function () {
      document.querySelector(".pop-up").style.visibility = "hidden";
    });

  document.body.addEventListener("click", function () {
    document.querySelector(".pop-up").style.visibility = "hidden";
  });

  // clearing input values
  document.querySelector(".name").value = "";
  document.querySelector(".email").value = "";
  document.querySelector(".desc").value = "";
}

//sending email
function sendEmail(name, email, description) {
  console.log("Sending a email now/./");
  Email.send({
    Host: "smtp.gmail.com",
    Username: "sandeepmscanada@gmail.com",
    Password: "Gmail@123",
    To: "sandeepmscanada@gmail.com",
    From: "sandeepmscanada@gmail.com",
    Subject: `${name} - from findsandeep.space`,
    Body: `<br/> Name: ${name} <br/><br/> Email: ${email} <br/> <br/> Message :<br/> ${description}`,
  }).then(
    (message) =>
      (document.querySelector(".pop-up").style.visibility = "visible")
  );
}

// Hey, thanks for contacting me. I'll get back to you as soon as
// possible.
