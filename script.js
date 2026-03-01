// index.html 안의 요소들 가져오기
const startButton = document.getElementById("startButton");
const statusIndicator = document.getElementById("statusIndicator");
const statusText = document.getElementById("statusText");

// 감지 상태 플래그
let isDetecting = false;

// 버튼 클릭 시 ON/OFF 토글
startButton.addEventListener("click", () => {
  isDetecting = !isDetecting;

  if (isDetecting) {
    // 상태 표시: ON
    statusIndicator.classList.add("status-indicator--on");
    statusText.textContent = "Detection ON";

    // 버튼 텍스트 변경
    startButton.querySelector(".primary-button__text").textContent =
      "Stop Detection";
    startButton.querySelector(".primary-button__icon").textContent = "⏹";

    // (예시) 진동 한 번 주기
    if ("vibrate" in navigator) {
      navigator.vibrate([150, 80, 150]);
    }

    // 실제 감지 로직이 있다면 여기에서 startDetection() 호출
    // startDetection();

  } else {
    // 상태 표시: OFF
    statusIndicator.classList.remove("status-indicator--on");
    statusText.textContent = "Detection OFF";

    // 버튼 텍스트 원래대로
    startButton.querySelector(".primary-button__text").textContent =
      "Start Detection";
    startButton.querySelector(".primary-button__icon").textContent = "🔔";

    // 실제 감지 종료 로직
    // stopDetection();
  }
});
