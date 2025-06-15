const bulbDiv = document.querySelector(".bulb");
const bulbElement = document.getElementById("bulbIcon");
const switchElement = document.getElementById("switchIcon");

switchElement.addEventListener("click", () => {
  const isOn = bulbElement.classList.toggle("on");

  bulbDiv.classList.toggle("on", isOn);
  switchElement.classList.toggle("fa-toggle-off", !isOn);
  switchElement.classList.toggle("fa-toggle-on", isOn);

  document.body.classList.toggle("glow", isOn);
});


