//Alert Message
const alert = document.getElementById('alert');
const alertMessage = document.createElement('p');
const alertClose = document.createElement('i');

alertMessage.innerHTML = "<strong>Alert</strong> This is an alert, alerting you of important messages. Important message: There are no important messages at the moment.";
alertClose.className = "fa fa-close";
alertClose.addEventListener('click', ()=>{
  alert.style.display = "none";
});

alert.appendChild(alertMessage);
alert.appendChild(alertClose);


//Bell Notification
const notification = document.getElementById('bell-notification');
const bellNote = document.createElement('i');

bellNote.className = "fa fa-circle";
notification.appendChild(bellNote);

//Sent Message
const input = document.getElementById('search-user');
const message = document.getElementById('message-user');
const send = document.getElementById('send-message');
const form = document.getElementById('form-container');
const fields = document.getElementById('fields-container');

const sentMessage = document.createElement('div');
sentMessage.className = "alert alert-success";
sentMessage.setAttribute("role", "alert");
sentMessage.textContent = "Your message has been sent!"

send.addEventListener("click", ()=>{
  if(input.value === "" || message.value === "") {
    window.alert("Please fill in the search and message fields.");
  } else {
    fields.style.display = "none";
    form.appendChild(sentMessage);
  }
});
