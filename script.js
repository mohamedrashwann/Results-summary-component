// Fetch the JSON data
fetch("./assets/data.json")
  .then((response) => response.json())
  .then((data) => {
    const list = document.querySelector("ul");

    list.innerHTML = ""; // Clear default items

    data.forEach((item) => {
      const li = document.createElement("li");
      li.classList.add("item", item.category.toLowerCase());

      li.innerHTML = `
        <img src="${item.icon}" alt="${item.category} icon" />
        <span>${item.category}</span>
        <p><strong>${item.score}</strong> / 100</p>
      `;

      list.appendChild(li);
    });
  })
  .catch((error) => console.error("Error loading JSON:", error));
