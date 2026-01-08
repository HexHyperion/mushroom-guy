const guys = [
  [
    "_   \\◐_◑/   ",
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
    "    \\◐_◑/   _",
    "     | |  || ",
    "  ___|_|===| ",
    " ||          ",
    "_||          "
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

let counter = 0;
setInterval(() => {
  document.querySelector("body").style.background = `conic-gradient(from ${counter++}deg, rgba(255,0,0,1) 0%, rgba(255,154,0,1) 10%, rgba(208,222,33,1) 20%, rgba(79,220,74,1) 30%, rgba(63,218,216,1) 40%, rgba(47,201,226,1) 50%, rgba(28,127,238,1) 60%, rgba(95,21,242,1) 70%, rgba(186,12,248,1) 80%, rgba(251,7,217,1) 90%, rgba(255,0,0,1) 100%)`
}, 1)