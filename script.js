const container = document.querySelector("#container");

function createGrid(size) {
    for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row"); 

    for (let j = 0; j < size; j++) {
        const box = document.createElement("div");
        box.classList.add("box");
        row.appendChild(box);
    }

    container.appendChild(row);
    }
}

createGrid(16);

function applyBoxListeners() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.addEventListener("mouseover", () => {
            box.classList.add("highlighted");
        });
    });
}

applyBoxListeners();

const button = document.querySelector("button");
button.addEventListener("click", () => {
    const input = prompt("Enter number of squares per side for new grid (1-100)");
    
    if (input === null) {
        // do nothing
    } else {
        const size = parseInt(input);

        if (!Number.isInteger(size) || size > 100 || size < 1) {
            alert("Invalid input")
        } else {
            container.innerHTML = "";
            createGrid(size);                
            applyBoxListeners();
        }
    }
});
