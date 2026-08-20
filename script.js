const pageContainer = document.querySelector("#pageContainer");
const mainHeading = document.querySelector("#mainHeading");
const nameInput = document.querySelector("#nameInput");
const greetingButton = document.querySelector("#greetingButton");
const backgroundButton = document.querySelector("#backgroundButton");
const resetButton = document.querySelector("#resetButton");
const messageArea = document.querySelector("#messageArea");


const initialHeadingText = mainHeading.textContent;
const initialBackgroundColor = document.body.style.backgroundColor;


console.log("Script loaded and elements selected successfully.");


function handleGreetingClick() {
    const name = nameInput.value.trim();
    if (name !== "") {
        mainHeading.textContent = `Hello, ${name}!`;
        messageArea.textContent = "Greeting generated successfully!";
    } else {
        messageArea.textContent = "Please enter your name first!";
    }
}


function handleBackgroundClick() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
    document.body.style.backgroundColor = randomColor;
    messageArea.textContent = `Webpage background color changed to ${randomColor}.`;
}


function handleResetClick() {
    mainHeading.textContent = initialHeadingText;
    nameInput.value = "";
    document.body.style.backgroundColor = initialBackgroundColor;
    messageArea.textContent = "";
    console.log("Webpage state has been reset.");
}


function handleInputEvent(event) {
    const currentText = event.target.value;
    if (currentText.length > 0) {
        messageArea.textContent = `You are typing: ${currentText}`;
    } else {
        messageArea.textContent = "";
    }
}


function handleMouseOver(event) {
    const buttonId = event.target.id;
    console.log(`The mouse is over the ${buttonId}.`);
}


greetingButton.addEventListener("click", handleGreetingClick);
backgroundButton.addEventListener("click", handleBackgroundClick);
resetButton.addEventListener("click", handleResetClick);
nameInput.addEventListener("input", handleInputEvent);


greetingButton.addEventListener("mouseover", handleMouseOver);
backgroundButton.addEventListener("mouseover", handleMouseOver);
resetButton.addEventListener("mouseover", handleMouseOver);