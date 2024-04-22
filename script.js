//! DOM = Document Object Model

// console.log(document);
// document.title = "My Website"
// document.body.style.backgroundColor = "hsl(0, 0%, 15%)";

// console.dir(document);

//* Example for h1

const username = "Linkx";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? `Guest` : username;
