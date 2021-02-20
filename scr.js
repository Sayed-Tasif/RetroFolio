const aboutMe = document.getElementById("aboutMe");
const logo = document.getElementById("logo");
aboutMe.addEventListener("click", function(){
    const topMid = document.getElementById("topMidContainer");
    topMid.style.display = "block";
})

logo.addEventListener("click", function(){
    const topMid = document.getElementById("topMidContainer");
    topMid.style.display = "none";
})