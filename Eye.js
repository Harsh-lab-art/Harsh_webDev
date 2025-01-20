document.querySelector("body").addEventListener("mousemove", eyeball);
function eyeball() {
    const eyes = document.querySelectorAll(".eyes");
    eyes.forEach(function (eye) {
        
        let x=eye.getBoundingClientRect().left + eye.clientWidth / 2;
        let y=eye.getBoundingClientRect().top + eye.clientHeight / 2;
        let radian=Math.atan2(event.pageY - y, event.pageX - x);
        let rotate=radian * (180 / Math.PI) * -1 + 270;
        eye.style.transform = "rotate(" + rotate + "deg)";
    });
}
