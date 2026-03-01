const detectButton = document.getElementById("detectButton");
const statusText = document.getElementById("statusText");
const alertBox = document.getElementById("alertBox");

let detecting = false;

detectButton.addEventListener("click", () => {
  detecting = !detecting;

  if (detecting) {
    // 감지 ON
    statusText.textContent = "Detection ON";
    detectButton.textContent = "⏹ Stop Detection";

    // 예시: 위험 감지 시뮬레이션
    setTimeout(triggerAlert, 2000);

  } else {
    // 감지 OFF
    statusText.textContent = "Detection OFF";
    detectButton.textContent = "🎙 Start Detection";
    alertBox.classList.add("hidden");
  }
});

function triggerAlert() {
  if (!detecting) return;

  alertBox.classList.remove("hidden");

  // 📳 진동 (모바일에서만 작동)
  if (navigator.vibrate) {
    navigator.vibrate([200, 100, 200, 100, 400]);
  }
}
