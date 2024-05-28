function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    email: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };
  const serviceID = "service_rkr2lyp";
const templateID = "template_mlftiq3";

emailjs.send(serviceID, templateID, params).then((res) => {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("message").value = "";
  console.log(res);
  alert("your message sent successfully");
})
.catch(err=>console.log(err));
}

