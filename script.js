function createTable() {
  const rows = prompt("Input number of rows");
  const cols = prompt("Input number of columns");

  const rn = parseInt(rows);
  const cn = parseInt(cols);

  // Validate inputs
  if (isNaN(rn) || isNaN(cn)) {
    alert("Please enter valid numbers.");
    return;
  }

  if (rn <= 0 || cn <= 0) {
    alert("Number of rows and columns must be greater than 0.");
    return;
  }

  const table = document.getElementById("myTable");

  // Clear previous table content
  table.innerHTML = "";

  for (let i = 0; i < rn; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < cn; j++) {
      const cell = document.createElement("td");
      cell.textContent = `Row-${i} Column-${j}`;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}
