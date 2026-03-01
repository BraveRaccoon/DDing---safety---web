const detectButton = document.getElementById("detectButton");
const statusText = document.getElementById("statusText");
const alertBox = document.getElementById("alertBox");

let detecting = false;

detectButton.addEventListener("click", () => {
  detecting = !detecting;

  if (detecting) {
    statusText.textContent = "Detection ON";
    detectButton.textContent = "⏹ Stop Detection";

    // 시연용 위험 감지
    setTimeout(() => {
      if (detecting) triggerAlert();
    }, 2500);

  } else {
    statusText.textContent = "Detection OFF";
    detectButton.textContent = "🎙 Start Detection";
    alertBox.classList.add("hidden");
  }
});

function triggerAlert
