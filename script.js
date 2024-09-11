let img=document.getElementById("img1");
img.setAttribute("src","Highlight-Surface-Pro-AI-11Ed-Sapphire-MC001-3000x1682_VP5-1920x600.avif")
let previous=document.getElementById("previous");
let next=document.getElementById("next");
let first=document.getElementById("first");
let second=document.getElementById("second");

previous.addEventListener("click", function() {
    img.classList.add("transition", "duration-500", "ease-in-out"); /* Add transition classes */
    img.style.transform = "translateX(-100%)"; /* Move the image to the left */
    setTimeout(function() {
      img.setAttribute("src", "Highlight-Slim-Multi-Canvas-Game-Call-Of-Duty-Black-Ops-6-Trio_VP5-1920x600.avif");
      img.style.transform = "translateX(0%)"; /* Move the image back to its original position */
    }, 500); /* Wait for the transition to complete */
    first.style.backgroundColor = "black";
    second.style.backgroundColor = "white";
  });
  
  next.addEventListener("click", function() {
    img.classList.add("transition", "duration-500", "ease-in-out"); /* Add transition classes */
    img.style.transform = "translateX(100%)"; /* Move the image to the right */
    setTimeout(function() {
      img.setAttribute("src", "Highlight-Surface-Pro-AI-11Ed-Sapphire-MC001-3000x1682_VP5-1920x600.avif");
      img.style.transform = "translateX(0%)"; /* Move the image back to its original position */
    }, 500); /* Wait for the transition to complete */
    first.style.backgroundColor = "white";
    second.style.backgroundColor = "black";
  });