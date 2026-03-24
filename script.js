// Canvas drawing
const canvas = document.getElementById("canvas");
if(canvas){
const ctx = canvas.getContext("2d");
ctx.fillStyle = "blue";
ctx.fillRect(50,50,100,100);
}

// LocalStorage
localStorage.setItem("username", "John");
console.log(localStorage.getItem("username"));

// Geolocation
navigator.geolocation.getCurrentPosition(pos => {
console.log(pos.coords.latitude, pos.coords.longitude);
});