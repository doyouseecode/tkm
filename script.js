document.getElementById("smsForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Simulate form submission
  document.getElementById("smsForm").style.display = "none";
  document.getElementById("confirmation").classList.remove("hidden");

  // You can add backend logic here to send data to RingCentral or store it
});
