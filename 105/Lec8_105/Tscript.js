function generateTable() {
  const num = document.getElementById("numberInput").value;
  const output = document.getElementById("tableOutput");
  
  if (num === "") {
    output.innerHTML = "<p>Please enter a number.</p>";
    return;
  }

  let table = "";
  for (let i = 1; i <= 10; i++) {
    table += `${num} x ${i} = ${num * i}<br>`;
  }

  output.innerHTML = table;
}
