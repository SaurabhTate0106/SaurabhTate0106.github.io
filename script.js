const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");
const toggle = document.querySelector(".theme-toggle");
const nameText = "Saurabh Tate";
let i = 0;

function typeWriter() {
if (i < nameText.length) {
document.querySelector(".typewriter").innerHTML += nameText.charAt(i);
i++;
setTimeout(typeWriter, 100);
}
}

window.onload = typeWriter;
toggle.addEventListener("click", () => {
document.body.classList.toggle("light-mode");
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function(e) {
e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
});

});
});
window.addEventListener("load",()=>{
document.getElementById("loader").style.display="none";
});

document.addEventListener("mousemove", e => {
cursor.style.top = e.clientY + "px";
cursor.style.left = e.clientX + "px";

cursor2.style.top = e.clientY + "px";
cursor2.style.left = e.clientX + "px";
});
menu.addEventListener("click", () => {
nav.classList.toggle("active");
});

(function(){
emailjs.init("YOUR_PUBLIC_KEY");
})();

document.getElementById("contact-form")
.addEventListener("submit", function(e){

e.preventDefault();

emailjs.init("YOUR_PUBLIC_KEY");

emailjs.sendForm(
"YOUR_SERVICE_ID",
"YOUR_TEMPLATE_ID",
this

)
.then(function(){
alert("Message Sent Successfully 🚀");
}, function(error){
alert("Failed to send message");
});

});
particlesJS("particles-js", {
particles: {
number: { value: 80 },
size: { value: 3 },
move: { speed: 1 },
line_linked: { enable: true }
}
});
VanillaTilt.init(document.querySelectorAll(".skill-card"), {
max: 20,
speed: 400,
glare: true,
"max-glare": 0.3,
});

VanillaTilt.init(document.querySelectorAll(".project-card"), {
max: 15,
speed: 400,
glare: true,
"max-glare": 0.2,
});

/* Typing Animation */

const text = ["Full Stack Developer","Java Developer","Spring Boot Developer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

if(count === text.length){
count = 0;
}

currentText = text[count];
letter = currentText.slice(0,++index);

document.querySelector(".typing").textContent = letter;

if(letter.length === currentText.length){
count++;
index = 0;
setTimeout(type,2000);
}else{
setTimeout(type,100);
}

})();

