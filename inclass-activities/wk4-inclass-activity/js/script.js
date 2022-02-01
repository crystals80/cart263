/**
In-class Activity - Week 4
Lam Ky Anh Do

Reviewing lecture 3

1- localStorage
 - How to store more than one data set?
 - How to trigger a new save/item?
 - How do I add something to a save-data object?
 - What about saving files to the computer itself? (ANSWER: saveStrings(), saveCanvas(), saveJSON())
2- JSON
 - How do you go through a JSON array sequentially?
 - Creating character dialog (Q&As)
*/

"use strict";

// (1) localStorage: How to store more than one data set?
/*let saveData = {
    key: "cart263a-data-live-coding-save-data",
    players: {
        joachim: {
          playerData: {
            name: "Joachim",
            age: "23",
            eyeColor: "turquoise"
          },
          backgroundData: {
            r: 255,
            g: 200,
            b: 120
          }
        }
      },

      {
        jacqueline: {
          playerData: {
            name: "Jacqueline",
            age: "22",
            eyeColor: "diamond"
          },
          backgroundData: {
            r: 255,
            g: 200,
            b: 0
          }
        }
    };

      function setup() {
      createCanvas(500, 500);

      let loadedData = JSON.parse(localStorage.getItem(saveData.key));
      if (loadedData !== null) {
        saveData = loadedData
      }

    }

    function draw() {
      background(saveData.backgroundData.r, saveData.backgroundData.g, saveData.backgroundData.b);
    }*/

// (2) localStorage: How to trigger a new save/item? (see where it happens)
/*let saveData = {
  key: "cart263a-data-live-coding-save-data",
  players: [{
      name: "Joachim",
      age: "23",
      eyeColor: "turquoise",
      background: {
        r: 255,
        g: 200,
        b: 120
      }
    },
    {
      name: "Jacqueline",
      age: "22",
      eyeColor: "diamond",
      background: {
        r: 255,
        g: 200,
        b: 0
      }
    }
  ],
  // dialog: {
  //   scene1:[
  //     {
  //       character: "Joachim",
  //       text: "Do you know where we are?"
  //     },
  //     {
  //       character: "Jacqueline",
  //       text: "No, do you?"
  //     },
  //     {
  //       character: "Joachim",
  //       text: "No, I don't know either?"
  //     }
  //   ],
  // }
};

function setup() {
  createCanvas(500, 500);
}

// (2) localStorage: How to trigger a new save/item?
function draw() {
  background(0);

  for (let i = 0; i < saveData.players.length; i++) {
    let player = saveData.players[i];

    push();
    fill(player.background.r, player.background.g, player.background.b);
    rect(0, i * 100, 200, 100);

    fill(0);
    textSize(32);
    text(player.name, 0, i * 100 + 100);
    pop();
  }
}

// (3) localStorage: How do I add something to a save-data object?
function mousePressed() {
  let player = {
    name: random(["Frank", "Steve", "Fiona", "Devjani", "Joachim", "Jacqueline"]),
    age: random(10, 50),
    eyeColor: random("Red", "Blue"),
    background: {
      r: random(100, 200),
      g: random(100, 200),
      b: random(100, 200),
    }
  };
  saveData.players.push(player);
}

// (4) localStorage: What about saving files to the computer itself?
function keyPressed() {
  saveJSON(saveData, `all-my-secrets.json`)
}*/

// (5) JSON: How do you go through a JSON array sequentially?
let saveData = {
  key: "cart263a-data-live-coding-save-data",
  characters: {
    joachim: {
      name: "Joachim du Pres",
      age: 23,
      eyeColor: "turquoise",
      background: {
        r: 255,
        g: 200,
        b: 120
      }
    },
    jacqueline: {
      name: "Jacqueline DuPré",
      age: 22.99,
      eyeColor: "diamond",
      background: {
        r: 255,
        g: 100,
        b: 100
      }
    }
  },
  dialog: {
    scene1: [{
        character: "joachim",
        text: "Do you know where we are?"
      },
      {
        character: "jacqueline",
        text: "No, do you?"
      },
      {
        character: "joachim",
        text: "No, I don't know either?"
      },
      {
        character: "jacqueline",
        text: "We're doomed!"
      }
    ]
  }
};

let currentScene = "scene1";
let currentLine = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  // let line = saveData.dialog.scene1[0].text;
  let line = saveData.dialog[currentScene][currentLine];
  let dialog = line.text;
  // let character = line.character;
  let characterKey = line.character;
  let character = saveData.characters[characterKey];

  push();
  fill(character.background.r, character.background.g, character.background.b);
  rect(0, 50, 200, 100);

  textSize(32);
  textAlign(LEFT, BOTTOM);
  text(character.name, 0, 50);

  fill(0);
  textSize(18);
  textAlign(LEFT, TOP);
  text(dialog, 0, 50, 200, 100);
  pop();
}

function mousePressed() {
  currentLine++;
  if (currentLine >= saveData.dialog[currentScene].length) {
    currentLine = 0;
  }
}

// function keyPressed() {}