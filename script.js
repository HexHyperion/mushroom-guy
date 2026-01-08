const guys = [
  [
    "_   \\◐_◑/    ",
    " ||  | |     ",
    " |===|_|___  ",
    "          || ",
    "          ||_"
  ],
  // [
  //   "    \\◐_◑/    ",
  //   "     | |     ",
  //   "  ___|_|___  ",
  //   " ||       || ",
  //   "_||       ||_"
  // ],
  [
    "    \\◐_◑/   _ ",
    "     | |  || ",
    "  ___|_|===| ",
    " ||            ",
    "_||            "
  ],
  // [
  //   "    \\◐_◑/    ",
  //   "     | |     ",
  //   "  ___|_|___  ",
  //   " ||       || ",
  //   "_||       ||_"
  // ],
]

const guySpace = document.getElementById("guy-space");
let currentIndex = 0;

setInterval(() => {
  guySpace.textContent = guys[currentIndex++].join("\n");
  currentIndex %= guys.length;
}, 300);