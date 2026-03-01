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

    const startButton = document.getElementById("startButton");
const statusIndicator = document.getElementById("statusIndicator");
const statusText = document.getElementById("statusText");

let isDetecting = false;

startButton.addEventListener("click", () => {
  isDetecting = !isDetecting;

  if (isDetecting) {
    statusIndicator.classList.add("status-indicator--on");
    statusText.textContent = "Detection ON";
    startButton.textContent = "Stop Detection";
  } else {
    statusIndicator.classList.remove("status-indicator--on");
    statusText.textContent = "Detection OFF";
    startButton.textContent = "Start Detection";
  }
});

    button.textContent = "🎙 Start Detection";
    alertBox.classList.add("hidden");
  }
});
