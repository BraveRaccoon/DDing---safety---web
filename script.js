const button = document.getElementById("detectButton");
const statusText = document.getElementById("statusText");
const alertBox = document.getElementById("alertBox");

let isDetecting = false;

button.addEventListener("click", () => {
  isDetecting = !isDetecting;

  if (isDetecting) {
    statusText.textContent = "Detection ON";
    button.textContent = "⏹ Stop Detection";

    setTimeout(() => {
      alertBox.classList.remove("hidden");
      navigator.vibrate([200, 100, 200]);
    }, 2000);

  } else {
    statusText.textContent = "Detection OFF";
    button.textContent = "🎙 Start Detection";
    alertBox.classList.add("hidden");
  }
});
