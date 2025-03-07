const question = document.getElementById("question");
const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");

yesButton.addEventListener("click", () => {
    question.innerText = "Бірақ беретін ақшам көп емес, кешіресізба?";
    yesButton.innerText = "Иә";
    noButton.innerText = "Жоқ";
    noButton.style.pointerEvents = "auto"; // Включаем кнопку "Жоқ"
    noButton.style.opacity = "1"; // Делаем её активной

    yesButton.onclick = () => {
        question.innerText = "Телеграмнан маған жаз❤";
        yesButton.style.display = "none";
        noButton.style.display = "none";
    };

    noButton.onclick = () => {
        question.innerText = "Жақсы";
        yesButton.style.display = "none";
        noButton.style.display = "none";
    };
});
