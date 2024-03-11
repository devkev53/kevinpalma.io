export function consoleText(words, id) {
  let visible = true;
  let bar = document.querySelector("#console");
  let letterCount = 1;
  let x = 1;
  let waiting = false;
  let target = document.querySelector(`#${id}`);
  window.setInterval(() => {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount);
      window.setTimeout(() => {
        let useWord = words.shift();
        words.push(useWord);
        x = 1;
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(() => {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (waiting == false) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount += x;
    }
  }, 120);
  window.setInterval(() => {
    if (visible === true) {
      bar.className = "consoleUderscore hidden";
      visible = false;
    } else {
      bar.className = "consoleUderscore";
      visible = true;
    }
  }, 400);
}
