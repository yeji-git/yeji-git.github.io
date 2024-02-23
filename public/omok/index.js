const gridContainer = document.querySelector(".grid-container");

let size = 13;

for (let i = 0; i < size + 1; i++) {
  for (let j = 0; j < size + 1; j++) {
    const gridItem = document.createElement("div");

    gridItem.setAttribute("class", `grid-item`);

    gridContainer.append(gridItem);

    console.log(j);
  }
}

const playContainer = document.querySelector(".play-container");

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    const playItem = document.createElement("div");
    const id = `y${i}x${j}`;

    playItem.setAttribute("class", `play-item`);
    playItem.setAttribute("id", id);

    playContainer.append(playItem);
  }
}

let turn = 1;
let win = 0;
let count = 1;

marking();
reset();

function marking() {
  const mark = document.getElementsByClassName("play-item");
  for (let i = 0; i < mark.length; i++) {
    mark[i].addEventListener("click", (e) => {
      if (e.target.className === "play-item" && win === 0) {
        e.target.setAttribute("class", `P${turn}`);

        const pTag = document.createElement("p");
        pTag.innerText = `${count++}`;
        e.target.appendChild(pTag);

        checkWin();
        turn = turn === 1 ? 2 : 1;
      }
    });
  }
}

function checkWin() {
  checkHori();
  checkVert();
  checkLeftDiagonal();
  checkRightDiagonal();
  if (win !== 0) alert(`P${win} WIN!!!`);
}

function checkHori() {
  for (let i = 0; i < size; i++) {
    let count = 0;
    for (let j = 0; j < size; j++) {
      const target = `y${i}x${j}`;
      const id = document.querySelector(`#${target}`);

      if (id.className === `P${turn}`) count++;
      else count = 0;
      if (count === 5) win = turn;
    }
  }
}

function checkVert() {
  for (let i = 0; i < size; i++) {
    let count = 0;
    for (let j = 0; j < size; j++) {
      const target = `y${j}x${i}`;
      const id = document.querySelector(`#${target}`);

      if (id.className === `P${turn}`) count++;
      else count = 0;
      if (count === 5) win = turn;
    }
  }
}

function checkLeftDiagonal() {
  for (let i = 0; i < size - 4; i++) {
    for (let j = 0; j < size - 4; j++) {
      let count = 0;
      for (let k = 0; k < 5; k++) {
        const target = `y${i + k}x${j + k}`;
        const id = document.querySelector(`#${target}`);

        if (id.className === `P${turn}`) count++;
        else count = 0;
        if (count === 5) win = turn;
      }
    }
  }
}

function checkRightDiagonal() {
  for (let i = 0; i < size - 4; i++) {
    for (let j = 4; j < size; j++) {
      let count = 0;
      for (let k = 0; k < 5; k++) {
        const target = `y${i + k}x${j - k}`;
        const id = document.querySelector(`#${target}`);

        if (id.className === `P${turn}`) count++;
        else count = 0;
        if (count === 5) win = turn;
      }
    }
  }
}

function reset() {
  const reset = document.querySelector(".reset");
  reset.addEventListener("click", (e) => {
    location.reload();
  });
}
