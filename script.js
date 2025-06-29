const container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.classList.add("row"); 

    for (let j = 0; j < 16; j++) {
        const box = document.createElement("div");
        box.classList.add("box");
        row.appendChild(box);
    }

    container.appendChild(row);
}

const boxes = document.querySelectorAll(".box");
boxes.forEach(box => {
  box.addEventListener("mouseover", () => {
    box.classList.add("highlighted");
  });
});