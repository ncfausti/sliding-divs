const left = document.querySelector(".left");
const right = document.querySelector(".right");

document.addEventListener("mouseleave", function (event) {
  console.log("left the screen, time to reset");
  left.style.left = "0px";
  right.style.right = "0px";
  left.style.width = "33vw";
  right.style.width = "33vw";
});

window.addEventListener("mouseleave", function (event) {
  console.log("left the window, time to reset");
  left.style.left = "0px";
  right.style.right = "0px";
  left.style.width = "33vw";
  right.style.width = "33vw";
});

document.addEventListener("mousemove", function (event) {
  const viewWidth = document.documentElement.clientWidth;
  const x = event.clientX;
  const oneThirdWidth = 0.333 * viewWidth;
  const twoThirdWidth = 0.667 * viewWidth;
  const midPoint = 0.5 * viewWidth;
  const xPct = x / viewWidth;

  // left third
  if (x < oneThirdWidth) {
    // snap right div to right side of page
    right.style.right = `${x}px`;

    // scale left div width inversely with mouseX
    left.style.width = `${viewWidth / 2 - viewWidth * (xPct / 2)}px`;

    // snap left div to left side of page
    left.style.left = "0px";
    left.style.borderRadius = "0px 12px 12px 0px";
    left.style.zIndex = 2;
    right.style.zIndex = 1;
  }

  // center
  if (x > oneThirdWidth && x < twoThirdWidth) {
    left.style.borderRadius = "12px";
    right.style.borderRadius = "12px";
    // left half of center-third
    if (x > midPoint) {
      const zeroToOneSixth = xPct - 0.3333;
      const normedZeroToOneSixth = zeroToOneSixth * 6;
      const scaledOffset = (normedZeroToOneSixth * viewWidth) / 3;
      right.style.right = `${viewWidth - scaledOffset - viewWidth * 0.3333}px`;
    }
    // right half of center-third
    else {
      const zeroToOneSixth = xPct - 0.3333;
      const normedZeroToOneSixth = zeroToOneSixth * 6;
      const scaledOffset = (normedZeroToOneSixth * viewWidth) / 3;
      left.style.left = `${scaledOffset}px`;
    }
  }

  // right third
  if (x > twoThirdWidth) {
    right.style.width = `${x * 0.5}px`;
    left.style.left = `${viewWidth - x}px`;
    // snap right to the right wall
    right.style.right = "0px";
    right.style.borderRadius = "12px 0px 0px 12px";

    left.style.zIndex = 1;
    right.style.zIndex = 2;
  }
});

// when mouse.X is 50% of window, both should come out
// when mouse.X is left and < 20% of width left takes up half of window
// when mouse.X is right and > 80% of width, right takes up full right half

/* var counter = (function() {
 var i = 0;
 
 return {
   get: function() {
  
  return i;
  },
  set: function(val) {
  return
  }
 
 }
})(); */
