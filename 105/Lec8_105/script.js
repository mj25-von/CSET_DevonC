document.getElementById("btn-find").addEventListener("click", () => {
  console.clear();
  console.log("=== FINDING ELEMENTS ===");
  const byId = document.getElementById("para1");
  console.log("Found by ID:", byId);

  const byTag = document.getElementsByTagName("p");
  console.log("Found by Tag:", byTag.length, "paragraphs");

  const byClass = document.getElementsByClassName("note");
  console.log("Found by Class:", byClass.length, "elements");

  const query = document.querySelectorAll(".note");
  console.log("querySelectorAll:", query.length, "matches");
});

document.getElementById("btn-create").addEventListener("click", () => {
  console.clear();
  console.log("=== CREATING / CHANGING ELEMENTS ===");

  const newP = document.createElement("p");
  newP.textContent = "This paragraph was created with createElement()!";
  document.body.appendChild(newP);

  const first = document.getElementById("para1");
  const textNode = document.createTextNode(" (added with createTextNode)");
  first.appendChild(textNode);

  const toRemove = document.querySelector("img");
  if (toRemove) {
    toRemove.remove();
    console.log("Removed <img> element.");
  }
});

document.getElementById("btn-style").addEventListener("click", () => {
  console.clear();
  console.log("=== MANIPULATING STYLE ===");

  const para = document.getElementById("para1");
  para.style.color = para.style.color === "blue" ? "black" : "blue";
  para.style.fontSize = "18px";

  console.log("Toggled color and set font size using .style property.");
});

document.getElementById("btn-event").addEventListener("click", () => {
  console.clear();
  console.log("=== EVENT / INTERACTIVITY ===");

  const name = window.prompt("Enter your name:");
  if (name) {
    console.log("Hello,", name + "!");
  } else {
    console.log("No name entered.");
  }
});

document.getElementById("btn-random").addEventListener("click", () => {
  console.clear();
  console.log("=== RANDOM NUMBERS ===");

  console.log("Random 0–9:", Math.floor(Math.random() * 10));
  console.log("Random 1–10:", Math.floor(Math.random() * 10) + 1);

  function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  console.log("Random between 5 and 15:", randomRange(5, 15));
});
