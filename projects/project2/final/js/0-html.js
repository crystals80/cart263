/**
Project 2: Escape the Gamingverse
Lam Ky Anh Do

This JS file is a mix of DOM and Jquery for code on the HTML page only.
*/

/****** TITLE SCREEN ******/
// Click on START button...
$(`#start-btn`).click(function() {
  // ...to hide the title "screen" or message...
  $(`#title`).fadeOut(1500);
  // ...show the game introduction message...
  $(`#line-1`).fadeIn(5000);
  $(`#line-2`).delay(2000).fadeIn(5000);
  $(`#line-3`).delay(3000).fadeIn(5000);
  $(`#line-4`).delay(5000).fadeIn(5000);
  $(`#line-5`).delay(8000).fadeIn(5000);
  $(`#line-6`).delay(9000).fadeIn(5000);
  $(`#line-7`).delay(12000).fadeIn(5000);
  $(`#line-8`).delay(13000).fadeIn(5000);
  $(`#line-9`).delay(14000).fadeIn(5000);
  $(`#line-10`).delay(15000).fadeIn(5000);
  $(`#line-11`).delay(16000).fadeIn(5000);
  $(`#line-12`).delay(19000).fadeIn(5000);
  $(`#line-13`).delay(20000).fadeIn(5000);
  $(`#line-14`).delay(25000).fadeIn(5000);
  $(`#line-15`).delay(28000).fadeIn(5000);
  // ...show button to start game
  $(`#read-btn`).delay(31000).fadeIn(5000);
});

/****** INTRODUCTION MESSAGE SCREEN ******/
// Click on NEXT button...
$(`#read-btn`).click(function() {
  // ...to hide the title "screen" or message...
  $(`#introduction`).fadeOut(1500);
  // ...show the game introduction message...
  $(`#dialog-box`).fadeIn(2000, function() {
    innerPara();
  });
  $(`#dir-0`).fadeIn(5000);
  $(`canvas`).delay(2000).fadeIn(2000);
  $(`#dir-1`).delay(2000).fadeIn(2000);
  $(`#dir-2`).delay(4000).fadeIn(2000);
  $(`#dir-3`).delay(6000).fadeIn(2000);
  $(`#dir-4`).delay(8000).fadeIn(2000);
  $(`#user-answer-1`).delay(7000).fadeIn(2000);
  $(`#dir-5`).delay(10000).fadeIn(2000);
  $(`#nav-instruction`).delay(12000).fadeIn(2000);
  $(`#inventory`).delay(14000).fadeIn(2000);
});

/****** DRAGGABLE INVENTORY ITEMS ******/
$(`.fatui`).draggable({
  revert: `invalid`,
  containment: `document`,
});

/****** TYPEWRITER EFFECT ******/
function innerPara() {

  let text = $(`#dialog`).html();
  $(`#dialog`).html(``); //clear
  $(`#dialog`).css(`display`, `block`); //display

  let i = 0; //which char are we on....
  let speed = 75;
  let outString = ''; //to build the outstring

  let timer = setInterval(function() {

    if (i < text.length) {
      outString += text.charAt(i);
      $(`#dialog`).html(outString);
      console.log(outString);
      i++;
    } else {

      clearInterval(timer);
    }
  }, speed);
} //inner

/****** CURSOR ******/
const cursor = document.querySelector(`.cursor`);
const cursorinner = document.querySelector(`.cursor2`);

document.addEventListener(`mousemove`, (e) => {
  const x = e.clientX;
  const y = e.clientY;
  cursor.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
});

document.addEventListener(`mousemove`, (e) => {
  const x = e.clientX;
  const y = e.clientY;
  cursorinner.style.left = `${x}px`;
  cursorinner.style.top = `${y}px`;
});

document.addEventListener(`mousedown`, () => {
  cursorinner.classList.add(`cursorinnerhover`);
});

document.addEventListener(`mouseup`, () => {
  cursorinner.classList.remove(`cursorinnerhover`);
});