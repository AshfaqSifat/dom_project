// Add your code to this file
let images = document.querySelectorAll("img");
let h3 = document.querySelectorAll("h3");
let h1 = document.querySelector("h1");
let body = document.querySelector("body");
let footer = document.querySelector("footer");

for(i = 0; i < images.length; i++) {
    images[i].style.border = "3px dotted yellow";
}
for(i = 0; i < h3.length; i++) {
    h3[i].style.color = "yellow";
}

body.style.backgroundColor = "blue";
h1.style.textDecoration = "underline";
footer.style.textDecoration = "underline overline";