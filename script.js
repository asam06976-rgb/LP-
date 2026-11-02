const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle?.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "メニューを閉じる" : "メニューを開く");
});

mainNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "メニューを開く");
  });
});

document.querySelectorAll(".faq details").forEach((item) => {
  item.addEventListener("toggle", () => {
    const icon = item.querySelector("summary span");
    if (icon) icon.textContent = item.open ? "×" : "+";
  });
});

const trialForm = document.querySelector("#trial-form");
trialForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(trialForm);
  const name = String(formData.get("name") || "").trim();
  const message = document.querySelector("#form-message");
  if (!name) {
    message.textContent = "お名前を入力してください。";
    return;
  }
  message.textContent = `${name}さん、ありがとうございます！これはポートフォリオ用のデモフォームです。実際の予約は送信されていません。`;
  trialForm.reset();
});
